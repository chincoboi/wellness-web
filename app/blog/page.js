import React from "react";
import { Blog } from "../components/blog/Blog";

export const metadata = {
  title: "Blog",
  description: "Wellness Services Blog Page",
};

const BlogPage = () => {
  return (
    <>
      <Blog />
    </>
  );
};

export default BlogPage;
