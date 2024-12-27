import { defineStore } from 'pinia';

interface Game {
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
}
interface GameStore {
  items: Game[];
  item: Game | null;
}
export const useGamesStore = defineStore('games', {
  state: (): GameStore => ({ items: [], item: null }),
  actions: {
    setGames(games: Game[]) {
      this.items = games;
    },
    setGame(game: Game) {
      this.item = game;
    },
  },
  getters: {
    gamesCount: (state): number => state.items.length,
    games: (state): Game[] => state.items,
    game: (state): Game => state.item,
  },
});
