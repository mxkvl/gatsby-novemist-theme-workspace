import React from "react";
import { PageProps, graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import {
  PageGrid,
  MainLayout,
  PostsList,
  InfoCard,
  TagsBlock,
  SidePanel,
} from "../components";
import { PostEdge } from "../types";
import { PageTitle } from "../components/PageTitle";
import { useTheme } from "../core";
import { getMappedPosts } from "../utils";

interface DataType {
  mdx: {
    body: string;
  };
  allMdx: {
    edges: PostEdge[];
    totalCount: number;
  };
}

const IndexPage = ({ data: { allMdx, mdx } }: PageProps<DataType>) => {
  const { theme } = useTheme();

  const posts = getMappedPosts(allMdx.edges);

  return (
    <MainLayout>
      <header>
        <PageTitle theme={theme}>Latest Posts</PageTitle>
      </header>
      <PageGrid>
        <div>
          <PostsList posts={posts} />
          {allMdx.totalCount > 6 && (
            <h3 className="text-center monospace">
              <Link to="/blog" className="underline theme-link">
                view all
              </Link>
            </h3>
          )}
        </div>
        <SidePanel>
          <InfoCard theme={theme}>
            {mdx ? <MDXRenderer>{mdx.body}</MDXRenderer> : null}
          </InfoCard>
          <TagsBlock
            theme={theme}
            tags={[
              "javascript",
              "typescript",
              "react",
              "gatsbyjs",
              "javascript",
              "typescript",
              "react",
              "gatsbyjs",
            ]}
          />
        </SidePanel>
      </PageGrid>
    </MainLayout>
  );
};

export const query = graphql`
  query HomePage {
    mdx(frontmatter: { key: { eq: "short-about" } }) {
      body
    }
    allMdx(
      limit: 6
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { hidden: { ne: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      totalCount
    }
  }
`;

export default IndexPage;
