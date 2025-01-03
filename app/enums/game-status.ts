export enum GameStatus {
  Draft = 'draft',
  Public = 'public',
  Hidden = 'hidden',
}

export const GameStatusLabels = {
  [GameStatus.Draft]: 'Entwurf',
  [GameStatus.Public]: 'Veröffentlicht',
  [GameStatus.Hidden]: 'Versteckt',
};
