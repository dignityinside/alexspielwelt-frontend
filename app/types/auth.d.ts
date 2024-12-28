// auth.d.ts
declare module '#auth-utils' {
  interface User {
    id: number;
    name: string;
  }

  interface UserSession {
    loggedInAt: Date;
  }

  interface SecureSessionData {
    token: string;
  }
}

export {};
