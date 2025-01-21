import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { authenticatedGithubClient } from '@/utils/authenticatedGithubClient';
import {
  FOLLOW_USER_MUTATION,
  UNFOLLOW_USER_MUTATION,
} from '@/graphql/mutations/followUser';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.accessToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { userId, isFollowing } = await req.json();

    if (!userId || typeof isFollowing !== 'boolean') {
      return NextResponse.json(
        { error: 'Invalid request payload' },
        { status: 400 }
      );
    }

    const client = authenticatedGithubClient(session.accessToken);

    const mutation = isFollowing
      ? UNFOLLOW_USER_MUTATION
      : FOLLOW_USER_MUTATION;

    const variables = { userId };

    const response = await client.request(mutation, variables);

    return NextResponse.json(
      { viewerIsFollowing: !isFollowing },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in github-follow API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
