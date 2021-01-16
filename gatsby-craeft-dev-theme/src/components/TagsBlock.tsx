import { Link } from "gatsby";
import React from "react";
import { PostTags } from ".";
import { ThemeValue } from "../types";
import { InfoCard } from "./InfoCard";

interface TagsBlockProps {
  tags: string[];
  theme?: ThemeValue;
}

export const TagsBlock = ({ tags, theme }: TagsBlockProps) => {
  return (
    <InfoCard theme={theme}>
      <h3 className="monospace">Tags</h3>
      <PostTags tags={tags} direction="column" />
      <p>
        <Link className="underline theme-link" to="/tags">
          ...more
        </Link>
      </p>
    </InfoCard>
  );
};
