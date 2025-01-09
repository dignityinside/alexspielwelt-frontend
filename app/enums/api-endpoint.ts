export enum ApiEndpoint {
  /**
   * GAMES
   */

  // Games - Admin list of games
  GAMES_ADMIN = '/games/admin',

  // Games - Add new game
  GAMES_ADMIN_ADD = 'games/admin/add',

  // Games - Edit a game by slug
  GAMES_ADMIN_EDIT = 'games/admin/',

  // Games - Get data for game edit form
  GAMES_ADMIN_EDIT_FORM = 'games/admin/edit/',

  // Games - Get a game by slug
  GAMES_GAME = 'games/',

  // Games - List of games
  GAMES_LIST = '/games',

  // Games - Get a list of all genres
  GAMES_GENRES = 'games/genres/all',

  /**
   * AUTH
   */

  // Login user via server api
  LOGIN = '/api/login',

  /**
   * STATS
   */

  STATS = 'stats',
}
