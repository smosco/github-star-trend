export interface IsStarredResponse {
  repository: {
    id: string;
    viewerHasStarred: boolean;
  };
}

export interface AddStarResponse {
  addStar: {
    starrable: {
      id: string;
      viewerHasStarred: boolean;
    };
  };
}

export interface RemoveStarResponse {
  removeStar: {
    starrable: {
      id: string;
      viewerHasStarred: boolean;
    };
  };
}
