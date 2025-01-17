export const ADD_STAR = `
    mutation AddStar($repoId: ID!) {
      addStar(input: { starrableId: $repoId }) {
        starrable {
          id
          viewerHasStarred
        }
      }
    }
  `;
