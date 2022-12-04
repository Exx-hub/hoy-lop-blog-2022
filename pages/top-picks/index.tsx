import React from "react";
import BlogList from "../../components/BlogList";
import SubLayout from "../../components/layout/SubLayout";
import Socials from "../../components/Socials";
import SubNavigation from "../../components/SubNavigation";
import { getAllBlogs } from "../../helpers/post-utils";
import { Blog } from "../../interfaces";

interface TopPicksProps {
  blogs: Blog[];
}

function TopPicks({ blogs }: TopPicksProps) {
  return (
    <SubLayout title="Top Picks + Recos">
      <BlogList blogs={blogs} />
    </SubLayout>
  );
}

export default TopPicks;

export const getStaticProps = () => {
  const blogs = getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};
