import BlogList from "../../components/BlogList";
import { Blog } from "../../interfaces";

import { getAllBlogs } from "../../helpers/post-utils";
import SubLayout from "../../components/layout/SubLayout";
import Head from "next/head";
import CustomHeadTags from "../../components/CustomHeadTags";

interface BlogProps {
  blogs: Blog[];
}

function Blog(props: BlogProps) {
  return (
    <>
      <CustomHeadTags title="Blog" description="Showcase of my personal work" />
      <SubLayout title="Blog">
        <BlogList blogs={props.blogs} />
      </SubLayout>
    </>
  );
}

export default Blog;

export const getStaticProps = () => {
  const blogs = getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};
