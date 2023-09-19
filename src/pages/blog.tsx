import Layout from "components/Layout";
import Seo from "components/Seo";
import React from "react";

function Blog() {
  return <Layout title="Blog✍️">blog here!</Layout>;
}

export default Blog;

export const Head = () => <Seo title="Blog" />;
