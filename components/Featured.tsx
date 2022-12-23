import styles from "../styles/Featured.module.css";
import FeaturedCard from "./FeaturedCard";

import beauty from "../assets/beauty.jpg";
import nature1 from "../assets/nature1.jpg";
import naturenew from "../assets/nature.png";
import travel from "../assets/travel.jpg";

function Featured() {
  return (
    <section className={styles.cardsGrid}>
      <FeaturedCard img={travel} title="travel" />
      <FeaturedCard img={naturenew} title="nature" />
      <FeaturedCard img={beauty} title="beauty" />
    </section>
  );
}

export default Featured;
