import Head from "next/head";
import BlogList from "../../components/BlogList";
import CustomHeadTags from "../../components/CustomHeadTags";
import SubLayout from "../../components/layout/SubLayout";

import { getAllBlogs, getTopPicks } from "../../helpers/post-utils";
import { Blog } from "../../interfaces";

interface TopPicksProps {
  blogs: Blog[];
}

function TopPicks({ blogs }: TopPicksProps) {
  return (
    <>
      <CustomHeadTags
        title="Top Picks + Recos"
        description="Collection of featured and favorite blog posts"
      />
      <SubLayout title="Top Picks + Recos">
        <BlogList blogs={blogs} />
      </SubLayout>
    </>
  );
}

export default TopPicks;

export const getStaticProps = () => {
  const topPicks = getTopPicks();

  return {
    props: {
      blogs: topPicks,
    },
  };
};
