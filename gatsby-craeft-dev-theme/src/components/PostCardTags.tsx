import React from "react";

import { PostTag } from "./PostTag";

import styles from "../../styles/post-card-tags.module.css";

interface PostCardTagsProps {
  tags: string[];
}

export const PostCardTags = ({ tags }: PostCardTagsProps) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <PostTag to={`/tags/${tag}`} color="orange">
          {tag}
        </PostTag>
      ))}
    </div>
  );
};
