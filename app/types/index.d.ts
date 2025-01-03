export interface Game {
  id: number;
  title: string;
  slug?: string;
  intro?: string;
  description?: string;
  slogan?: string;
  status?: string;
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
  ean?: string;
  uvp?: number;
}

export interface User {
  id: number;
  name: string;
  access_token: string;
}
