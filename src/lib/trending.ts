import { getRecentStarredRepos } from './github';

const CURATORS = [
  'cyanheads',
  'appcypher',
  'zckly',
  'jspahrsummers',
  'dsp-ant',
  'wong2',
] as const;

type TrendingRepo = {
  nameWithOwner: string;
  url: string;
  description?: string | null;
  starredBy: string[];
};

export async function getTrendingRepos(token: string): Promise<TrendingRepo[]> {
  const repoMap = new Map<string, TrendingRepo>();

  const allResults = await Promise.all(
    CURATORS.map(async (username) => {
      const starred = await getRecentStarredRepos(username, token);
      return { username, starred };
    })
  );

  for (const { username, starred } of allResults) {
    for (const repo of starred) {
      const existing = repoMap.get(repo.nameWithOwner);

      if (existing) {
        existing.starredBy.push(username);
      } else {
        repoMap.set(repo.nameWithOwner, {
          nameWithOwner: repo.nameWithOwner,
          url: repo.url,
          description: repo.description,
          starredBy: [username],
        });
      }
    }
  }

  return Array.from(repoMap.values()).filter(
    (repo) => repo.starredBy.length >= 2
  );
}
