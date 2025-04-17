export const typeDefs = /* GraphQL */ `
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
