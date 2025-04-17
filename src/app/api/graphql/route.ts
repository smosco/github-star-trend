import { NextRequest } from 'next/server';
import { createSchema, createYoga } from 'graphql-yoga';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

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
