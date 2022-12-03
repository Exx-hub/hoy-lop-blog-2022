import React from "react";
import BlogList from "../../components/BlogList";
import SubNavigation from "../../components/SubNavigation";

function TopPicks() {
  return (
    <div className="container blog-page">
      <SubNavigation title="Top Picks + Recos" />
      {/* <BlogList /> */}
    </div>
  );
}

export default TopPicks;
