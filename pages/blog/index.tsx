import BlogList from "../../components/BlogList";
import { Blog } from "../../interfaces";

import { getAllBlogs } from "../../helpers/post-utils";
import SubLayout from "../../components/layout/SubLayout";

interface BlogProps {
  blogs: Blog[];
}

function Blog(props: BlogProps) {
  // console.log(props);
  return (
    <SubLayout title="Blog">
      <BlogList blogs={props.blogs} />
    </SubLayout>
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
