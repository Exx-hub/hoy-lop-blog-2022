import React from "react";
import BlogList from "../../components/BlogList";
import SubNavigation from "../../components/SubNavigation";

function Blog() {
  return (
    <div className="container blog-page">
      <SubNavigation title="Blog" />
      <BlogList />
    </div>
  );
}

export default Blog;
