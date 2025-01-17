export const REMOVE_STAR = `
    mutation RemoveStar($repoId: ID!) {
      removeStar(input: { starrableId: $repoId }) {
        starrable {
          id
          viewerHasStarred
        }
      }
    }
  `;
