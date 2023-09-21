import { graphql, Link, PageProps } from "gatsby";
import Layout from "components/Layout";
import Seo from "components/Seo";
import React from "react";

const Blog = ({ data }: PageProps<Queries.BlogPostsQuery>) => {
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((mdx, idx) => (
          <article key={idx}>
            <Link to={`/blog/${mdx.frontmatter?.slug}`}>
              <h3>{mdx.frontmatter?.title}</h3>
              <h5>
                {mdx.frontmatter?.author} in: {mdx.frontmatter?.category}
              </h5>
              <h6>{mdx.frontmatter?.date}</h6>
              <hr />
              <p>{mdx.excerpt}</p>
            </Link>
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
