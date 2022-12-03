import BlogItemCard from "./BlogItemCard";

import styles from "../styles/BlogList.module.css";
import { Blog } from "../interfaces/interfaces";

interface BlogListProps {
  blogs: Blog[];
}

function BlogList({ blogs }: BlogListProps) {
  return (
    <div className={styles.blogListContainer}>
      {blogs.map((blog) => (
        <BlogItemCard
          title={blog.title}
          subtitle={blog.subtitle}
          image={blog.image}
          key={blog.id}
          slug={blog.slug}
        />
      ))}
    </div>
  );
}

export default BlogList;
