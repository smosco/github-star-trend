export interface Repo {
  name: string;
  url: string;
  description?: string;
}

export interface Curator {
  username: string;
  profileUrl: string;
  avatarUrl: string;
  bio: string;
  highlight: string;
  repos: Repo[];
}

export interface Theme {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  curators: Curator[];
}
