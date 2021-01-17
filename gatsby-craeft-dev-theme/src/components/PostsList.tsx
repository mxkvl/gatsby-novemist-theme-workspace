import React from "react";

import { GridViewValue, Post } from "../types";
import { PostCard } from "./PostCard";

import styles from "../../styles/posts-list.module.css";

interface PostsListProps {
  posts: Post[];
  gridView: GridViewValue;
}

export const PostsList = ({ posts, gridView }: PostsListProps) => {
  return (
    <div className={styles.list}>
      {posts.map(({ slug, ...post }) => (
        <PostCard key={slug} {...post} to={`/blog/${slug}`} view={gridView} />
      ))}
    </div>
  );
};
