import React from "react";
import BlogList from "../../components/BlogList";
import SubNavigation from "../../components/SubNavigation";
import { Blog } from "../../interfaces/interfaces";

import { getAllBlogs } from "../../helpers/post-utils";

interface BlogProps {
  blogs: Blog[];
}

function Blog(props: BlogProps) {
  // console.log(props);
  return (
    <div className="container blog-page">
      <SubNavigation title="Blog" />
      <BlogList blogs={props.blogs} />
    </div>
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
