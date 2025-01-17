export const IS_STARRED = `
    query IsStarred($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        id
        viewerHasStarred
      }
    }
  `;
