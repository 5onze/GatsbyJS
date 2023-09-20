import { graphql, PageProps } from "gatsby";
import Layout from "components/Layout";
import Seo from "components/Seo";
import React from "react";

const Blog = ({ data }: PageProps<Queries.BlogTitlesQuery>) => {
  console.log(data);
  return (
    <Layout title="Blog">
      <ul>
        {data.allFile.nodes.map((title) => (
          <li key={title.name}>{title.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;

export const Head = () => <Seo title="Blog" />;

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
        ext
      }
    }
  }
`;
