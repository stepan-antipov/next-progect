import Link from 'next/link';
import styles from '../../styles/Navigation.module.scss'

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} href="/">
        <span >Главная</span>
      </Link>
      <Link className={styles.link} href="/users">
        <span >Пользователи</span>
      </Link>
    </nav>
  );
}
