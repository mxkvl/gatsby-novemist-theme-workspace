import React from "react";

import { PostTag } from "./PostTag";

import styles from "../../styles/post-card-tags.module.css";

interface PostTagsProps {
  tags: string[];
}

export const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <PostTag to={`/tags/${tag}`} color="orange" key={tag}>
          {tag}
        </PostTag>
      ))}
    </div>
  );
};
