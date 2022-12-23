import { GetStaticProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import CustomHeadTags from "../../components/CustomHeadTags";
import SubLayout from "../../components/layout/SubLayout";

import { convertToDate } from "../../helpers/date-convert";
import { createBlogData, getFiles } from "../../helpers/post-utils";
import { Blog, FixMeLater } from "../../interfaces";
import styles from "../../styles/BlogPage.module.css";

interface BlogProps {
  blog: Blog;
}

function BlogPage({ blog }: BlogProps) {
  const { title, date, image, slug } = blog;
  const readableDate = convertToDate(blog.date);

  const customRenderers = {
    img(image: FixMeLater) {
      return <img src={`/blogImages/${slug}/${image.src}`} alt={image.alt} />;
    },
  };

  return (
    <>
      <CustomHeadTags title={blog.title} description={blog.title} />
      <SubLayout title="hoy Lop!">
        <section className={styles.blogPostMain}>
          <section className={styles.blogPostHeader}>
            <p>{readableDate}</p>
            <h1>{blog.title}</h1>
          </section>
          <section className={styles.blogPostBody}>
            <ReactMarkdown components={customRenderers}>
              {blog.content}
            </ReactMarkdown>
          </section>
        </section>
      </SubLayout>
    </>
  );
}

export default BlogPage;

export const getStaticPaths = () => {
  const allBlogFiles = getFiles(); // get all filesnames from content directory

  // map through allBlogFiles array and remove .md extenstion of each file and pass as slug in params object
  // return paths array
  const paths = allBlogFiles.map((file) => {
    const slug = file.replace(/\.md$/, "");

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug = context.params?.slug;
  const blog = createBlogData(slug);

  return {
    props: {
      blog,
    },
  };
};
