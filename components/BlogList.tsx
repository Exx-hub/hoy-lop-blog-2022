import BlogItemCard from "./BlogItemCard";

import styles from "../styles/BlogList.module.css";
import { Blog } from "../interfaces";

interface BlogListProps {
  blogs: Blog[];
}

function BlogList({ blogs }: BlogListProps) {
  return (
    <section className={styles.blogListContainer}>
      {blogs.map((blog) => (
        <BlogItemCard
          title={blog.title}
          subtitle={blog.subtitle}
          image={blog.image}
          key={blog.id}
          slug={blog.slug}
        />
      ))}
    </section>
  );
}

export default BlogList;
