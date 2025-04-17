import { NextRequest } from 'next/server';
import { createSchema, createYoga } from 'graphql-yoga';
import type { Theme } from './types';

// 1. 타입 정의
const typeDefs = /* GraphQL */ `
  type Repo {
    name: String!
    url: String!
    description: String
  }

  type Curator {
    username: String!
    profileUrl: String!
    avatarUrl: String!
    bio: String!
    highlight: String!
    repos: [Repo!]!
  }

  type Theme {
    id: ID!
    title: String!
    slug: String!
    createdAt: String!
    editorComment: String!
    curators: [Curator!]!
  }

  type TrendingRepo {
    nameWithOwner: String!
    url: String!
    description: String
    starredBy: [String!]!
  }

  type Query {
    latestTheme: Theme
    themeBySlug(slug: String!): Theme
    allThemes: [Theme!]!
    curatorsByTag(tag: String!): [Curator!]!
    trendingStarredRepos: [TrendingRepo!]!
  }
`;

// 2. 목업 데이터
import mock from './mock.json';
import { getTrendingRepos } from '@/lib/trending';

const resolvers = {
  Query: {
    latestTheme: () => mock[mock.length - 1],
    themeBySlug: (_: any, { slug }: { slug: string }) =>
      mock.find((t: Theme) => t.slug === slug),
    allThemes: () => mock,

    trendingStarredRepos: async () => {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      if (!token) throw new Error('Missing GitHub token');
      return await getTrendingRepos(token);
    },
  },
};

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Request, Response },
});

export async function GET(req: NextRequest) {
  return yoga.handleRequest(req, {});
}

export async function POST(req: NextRequest) {
  return yoga.handleRequest(req, {});
}
