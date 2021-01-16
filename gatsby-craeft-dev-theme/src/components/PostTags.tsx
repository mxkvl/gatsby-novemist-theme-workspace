import React from "react";

import { PostTag } from "./PostTag";

import styles from "../../styles/post-tags.module.css";

interface PostTagsProps {
  tags: string[];
  direction?: "row" | "column";
}

export const PostTags = ({ tags, direction = "row" }: PostTagsProps) => {
  return (
    <div className={styles[direction]}>
      {tags.map((tag) => (
        <div className={styles.tag}>
          <PostTag to={`/tags/${tag}`} color="orange" key={tag}>
            {tag}
          </PostTag>
        </div>
      ))}
    </div>
  );
};
