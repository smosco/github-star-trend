import mock from './mock.json';
import { getTrendingRepos } from '@/lib/trending';
import { Theme } from './types';

export const resolvers = {
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
