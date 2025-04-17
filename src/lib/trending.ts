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

  for (const username of CURATORS) {
    const starred = await getRecentStarredRepos(username, token);

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

  // 2명 이상이 스타한 레포만 추출
  return Array.from(repoMap.values()).filter(
    (repo) => repo.starredBy.length >= 2
  );
}
