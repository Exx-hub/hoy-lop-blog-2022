import styles from "../styles/Tabs.module.css";

function Tabs() {
  return (
    <article className={styles.tabsContainer}>
      <section className={styles.tabs} style={{ zIndex: "1000" }}>
        <h2>Reels</h2>
        <p>Catch me on Tiktok every Saturday for more</p>
      </section>
      <section className={styles.tabs}>
        <h2>Tutorials</h2>
        <p>Videos to guide and to inspire you create</p>
      </section>
      <section className={styles.tabs}>
        <h2>Top picks + recos</h2>
        <p>Materials I stand by and would love you to try</p>
      </section>
    </article>
  );
}

export default Tabs;
