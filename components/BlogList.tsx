import BlogItemCard from "./BlogItemCard";
import coding from "../assets/coding.jpg";
import nature from "../assets/nature.jpg";
import bargains from "../assets/bargains.jpg";

import styles from "../styles/BlogList.module.css";

function BlogList() {
  return (
    <div className={styles.blogListContainer}>
      <BlogItemCard
        title=" I Started My Own Simple Website For Only P5,000, And You Could Too!"
        subtitle="subtitle about the blog post - sit amet consectetur adipisicing elit."
        src={coding}
      />

      {/* <BlogItemCard
        title=" I Started My Own Simple Website For Only P5,000, And You Could Too!"
        subtitle="subtitle about the blog post - sit amet consectetur adipisicing elit."
        src={nature}
      />*/}

      <BlogItemCard
        title=" I Started My Own Simple Website For Only P5,000, And You Could Too!"
        subtitle="subtitle about the blog post - sit amet consectetur adipisicing elit."
        src={bargains}
      />
    </div>
  );
}

export default BlogList;
