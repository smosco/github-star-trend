import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import * as styles from './RootLayout.css';
import Providers from './providers/ApolloProvider';

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
        <main className={styles.main}>
          <div className={styles.container}>
            <Providers>{children}</Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
