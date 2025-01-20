import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { authenticatedGithubClient } from '@/utils/authenticatedGithubClient';
import { GraphQLClient } from 'graphql-request';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.accessToken) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const client = authenticatedGithubClient(session.accessToken);

    const { action, repoOwner, repoName } = await req.json();

    if (action === 'add' || action === 'remove') {
      const mutation =
        action === 'add'
          ? `
        mutation($repoId: ID!) {
          addStar(input: { starrableId: $repoId }) {
            starrable {
              id
              viewerHasStarred
            }
          }
        }
      `
          : `
        mutation($repoId: ID!) {
          removeStar(input: { starrableId: $repoId }) {
            starrable {
              id
              viewerHasStarred
            }
          }
        }
      `;

      const variables = {
        repoId: await getRepoId(client, repoOwner, repoName),
      };

      const data = await client.request<AddOrRemoveStarResponse>(
        mutation,
        variables
      );

      // 응답 구조 단순화
      const result = action === 'add' ? data.addStar : data.removeStar;

      return new Response(
        JSON.stringify({
          viewerHasStarred: result?.starrable.viewerHasStarred, // 클라이언트에서 쉽게 접근
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    if (action === 'status') {
      const query = `
        query($owner: String!, $name: String!) {
          repository(owner: $owner, name: $name) {
            viewerHasStarred
          }
        }
      `;

      const variables = { owner: repoOwner, name: repoName };
      const data = await client.request<ViewerHasStarredResponse>(
        query,
        variables
      );

      return new Response(
        JSON.stringify({
          viewerHasStarred: data.repository.viewerHasStarred,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// Helper 함수: 레포지토리 ID 가져오기
async function getRepoId(
  client: GraphQLClient,
  repoOwner: string,
  repoName: string
) {
  const query = `
    query($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        id
      }
    }
  `;

  const variables = { owner: repoOwner, name: repoName };
  const data = await client.request<RepositoryQueryResponse>(query, variables);
  return data.repository.id;
}

interface ViewerHasStarredResponse {
  repository: {
    viewerHasStarred: boolean;
  };
}

interface AddOrRemoveStarResponse {
  addStar?: {
    starrable: {
      viewerHasStarred: boolean;
    };
  };
  removeStar?: {
    starrable: {
      viewerHasStarred: boolean;
    };
  };
}

interface RepositoryQueryResponse {
  repository: {
    id: string;
  };
}
