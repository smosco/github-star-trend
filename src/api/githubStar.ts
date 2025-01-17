import { useAuthenticatedGithubClient } from '@/utils/useAuthenticatedGithubClient';
import { ADD_STAR } from '../graphql/mutations/addStar';
import { REMOVE_STAR } from '../graphql/mutations/removeStar';
import { IS_STARRED } from '../graphql/queries/isStarred';
import { IsStarredResponse } from '@/types/star';

export function useGithubActions() {
  const getAuthenticatedClient = useAuthenticatedGithubClient();

  const addStar = async (repoId: string) => {
    const client = await getAuthenticatedClient();

    return client.request(ADD_STAR, { repoId });
  };

  const removeStar = async (repoId: string) => {
    const client = await getAuthenticatedClient();
    return client.request(REMOVE_STAR, { repoId });
  };

  const isRepoStarred = async (owner: string, name: string) => {
    const client = await getAuthenticatedClient();
    return client.request<IsStarredResponse>(IS_STARRED, { owner, name });
  };

  return { addStar, removeStar, isRepoStarred };
}
