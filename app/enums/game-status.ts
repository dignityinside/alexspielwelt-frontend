export enum GameStatus {
  DRAFT = 'draft',
  PUBLIC = 'public',
  HIDDEN = 'hidden',
}

export const GameStatusLabels = {
  [GameStatus.DRAFT]: 'Entwurf',
  [GameStatus.PUBLIC]: 'Veröffentlicht',
  [GameStatus.HIDDEN]: 'Versteckt',
};
