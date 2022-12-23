import Link from "next/link";
import styles from "../styles/Tabs.module.css";

function Tabs() {
  return (
    <section className={styles.tabsContainer}>
      <Link href="/blog" className={styles.tabs} style={{ zIndex: "1000" }}>
        <h2>Blog</h2>
        <p>This is where I share articles about lorem .</p>
      </Link>
      <Link
        href="https://www.youtube.com/@eatpraylove6663"
        target="_blank"
        className={styles.tabs}
      >
        <h2>Tutorials</h2>
        <p>Videos to guide you and to inspire you to lorem.</p>
      </Link>
      <Link href="/top-picks" className={styles.tabs}>
        <h2>Top picks + recos</h2>
        <p>Materials I stand by and would love you to try</p>
      </Link>
    </section>
  );
}

export default Tabs;
