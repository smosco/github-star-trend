import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    accessToken?: string; // accessToken 추가
  }

  interface JWT {
    accessToken?: string; // JWT 타입 확장
  }
}
