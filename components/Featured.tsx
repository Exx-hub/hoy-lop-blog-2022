import styles from "../styles/Featured.module.css";
import FeaturedCard from "./FeaturedCard";

// import bargains from "../assets/bargains.jpg";
import beauty from "../assets/beauty.jpg";
import nature1 from "../assets/nature1.jpg";
import travel from "../assets/travel.jpg";

function Featured() {
  return (
    <section className={styles.cardsGrid}>
      {/* <FeaturedCard img={bargains} title="bargains" /> */}
      <FeaturedCard img={travel} title="travel" />
      <FeaturedCard img={nature1} title="nature" />
      <FeaturedCard img={beauty} title="beauty" />
    </section>
  );
}

export default Featured;
