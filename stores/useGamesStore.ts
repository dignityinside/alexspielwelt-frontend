import { defineStore } from 'pinia';
import type { Game } from '~/types';

interface GameStore {
  items: Game[];
  item: Game | null;
}

export const useGamesStore = defineStore('games', {
  state: (): GameStore => ({ items: [], item: null as Game | null }),
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
    game: (state): Game | null => state.item,
  },
});
