import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { authenticatedGithubClient } from '@/utils/authenticatedGithubClient';

interface ViewerIsFollowingResponse {
  node: {
    viewerIsFollowing: boolean;
  };
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.accessToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: 'Invalid request payload' },
        { status: 400 }
      );
    }

    const client = authenticatedGithubClient(session.accessToken);

    const query = `
      query ($userId: ID!) {
        node(id: $userId) {
          ... on User {
            viewerIsFollowing
          }
        }
      }
    `;

    const variables = { userId };
    const data: ViewerIsFollowingResponse = await client.request(
      query,
      variables
    );

    return NextResponse.json(
      { viewerIsFollowing: data.node.viewerIsFollowing },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in github-follow-status API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
