export interface Game {
  id: number;
  title: string;
  slug?: string;
  description?: string;
  slogan?: string;
  statusId?: number;
  img: string;
  link?: string;
  publisher?: string;
  releaseYear?: number;
  players?: string;
  playTime?: string;
  genre?: string;
  categoryId?: number;
  rating?: number;
  difficulty?: number;
  recommendedAge?: string;
  award?: string;
  gameDesigner?: string;
  hits?: number;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  access_token: string;
}
