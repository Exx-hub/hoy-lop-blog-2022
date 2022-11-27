import styles from "../styles/Featured.module.css";
import FeaturedCard from "./FeaturedCard";

import bargains from "../assets/bargains.jpg";
import beauty from "../assets/beauty.jpg";
import nature1 from "../assets/nature1.jpg";

function Featured() {
  return (
    <article className={styles.cardsGrid}>
      <FeaturedCard img={bargains} title="bargains" />
      <FeaturedCard img={nature1} title="nature" />
      <FeaturedCard img={beauty} title="beauty" />
    </article>
  );
}

export default Featured;
