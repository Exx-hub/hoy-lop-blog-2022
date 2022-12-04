import BlogList from "../../components/BlogList";
import SubLayout from "../../components/layout/SubLayout";

import { getAllBlogs, getTopPicks } from "../../helpers/post-utils";
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
  const topPicks = getTopPicks();

  return {
    props: {
      blogs: topPicks,
    },
  };
};
