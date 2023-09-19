import Layout from "components/Layout";
import Seo from "components/Seo";
import React from "react";

export default function IndexPage() {
  return (
    <Layout title="welcome to my blog👋🏻">
      <div></div>
    </Layout>
  );
}

export const Head = () => <Seo title="home" />;
