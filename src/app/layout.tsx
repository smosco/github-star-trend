import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import * as styles from './RootLayout.css';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '개발자 스타 트래커',
  description: '유명 개발자들의 GitHub 스타 활동으로 트렌드를 알아봐요',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} ${styles.body}`}>
        <ClerkProvider>
          <main className={styles.main}>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <div className={styles.container}>{children}</div>
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
