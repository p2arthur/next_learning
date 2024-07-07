import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  console.log('executing next...');

  return (
    <main className={styles.main}>
      <Header />
      <Link href='/about'>About us</Link>
    </main>
  );
}
