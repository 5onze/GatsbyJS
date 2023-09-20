import { graphql, PageProps } from "gatsby";
import Layout from "components/Layout";
import Seo from "components/Seo";
import React from "react";

const Blog = ({ data }: PageProps<Queries.BlogPostsQuery>) => {
  console.log(data);
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((file, idx) => (
          <article key={idx}>
            <h3>{file.frontmatter?.title}</h3>
            <h5>
              {file.frontmatter?.author} in: {file.frontmatter?.category}
            </h5>
            <h6>{file.frontmatter?.date}</h6>
            <hr />
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Blog;

export const Head = () => <Seo title="Blog" />;

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "YYYY.MM.DD")
          category
          author
        }
        excerpt(pruneLength: 30)
        body
      }
    }
  }
`;
