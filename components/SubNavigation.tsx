import { useState } from "react";
import Link from "next/link";
import styles from "../styles/SubNavigation.module.css";
import { GrClose, GrMenu } from "react-icons/gr";

interface SubNavigationProps {
  title?: string;
}

function SubNavigation({ title }: SubNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{title}</h3>

      <nav className={styles.nav}>
        <Link href="/">HOY LOP!</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/top-picks">TOP PICKS + RECOS</Link>
      </nav>

      {menuOpen ? (
        <GrClose
          size={20}
          className={styles.menu}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      ) : (
        <GrMenu
          size={20}
          className={styles.menu}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      )}

      <nav
        className={
          menuOpen
            ? `${styles.mobileNav}`
            : `${styles.mobileNav} ${styles.hidden}`
        }
      >
        <Link href="/">HOY LOP!</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/top-picks">TOP PICKS + RECOS</Link>
      </nav>
    </header>
  );
}

export default SubNavigation;
