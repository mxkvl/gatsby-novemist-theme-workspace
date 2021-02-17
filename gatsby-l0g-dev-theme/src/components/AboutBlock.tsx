import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { useTheme } from "../core";
import { Container } from "./Container";

import { InfoCard } from "./InfoCard";
import { Subscribing } from "./Subscribing";

import { StyleModules } from "../style-modules";

const styles = StyleModules.aboutBlock;

interface DataType {
  mdx: {
    body: string;
  };
}

interface AboutBlockProps {
  hasColorishBg?: boolean;
}

export const AboutBlock: FC<AboutBlockProps> = ({ hasColorishBg = false }) => {
  const { mdx } = useStaticQuery<DataType>(query);
  const { theme } = useTheme();
  const styleName = hasColorishBg ? theme : "block";

  return (
    <div className={styles[styleName]}>
      <Container>
        <div className={styles.inner}>
          <InfoCard style={{ width: "70%", marginRight: "10px" }} theme={theme}>
            <h2 className="monospace bold">About 💾</h2>
            {mdx ? <MDXRenderer>{mdx.body}</MDXRenderer> : null}
          </InfoCard>
          <Subscribing
            style={{ width: "30%", marginLeft: "10px" }}
            theme={theme}
          />
        </div>
      </Container>
    </div>
  );
};

const query = graphql`
  query AboutBlock {
    mdx(frontmatter: { key: { eq: "about-block" } }) {
      body
    }
  }
`;
