import { useSession, signIn, signOut } from 'next-auth/react';
import * as styles from './AuthButton.css';

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        <span className={styles.userName}>{session.user?.name}</span>
        <button className={styles.signOutButton} onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <button className={styles.signInButton} onClick={() => signIn()}>
      Sign in
    </button>
  );
}
