import Link from "next/link";
import styles from "../styles/SubNavigation.module.css";
import { GrClose, GrMenu } from "react-icons/gr";

interface SubNavigationProps {
  title?: string;
}

function SubNavigation({ title }: SubNavigationProps) {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{title}</h3>

      <nav className={styles.nav}>
        <Link href="/">HOY LOP</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/top-picks">TOP PICKS + RECOS</Link>
      </nav>

      <GrMenu className={styles.menu} />
    </header>
  );
}

export default SubNavigation;
