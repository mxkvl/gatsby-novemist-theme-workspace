import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { Post } from "../types";
import { useTheme } from "../core";

import { PostCardTitle } from "./PostCardTitle";
import PostCardExcerpt from "./PostCardExcerpt";
import { PostTags } from "./PostTags";

import styles from "../../styles/post-card.module.css";
import { PostInfo } from "./PostInfo";

interface PostCardProps extends Omit<Post, "slug"> {
  to: string;
}

export const PostCard = ({
  title,
  image,
  excerpt,
  date,
  tags,
  to,
}: PostCardProps) => {
  const { theme } = useTheme();

  const commentsCount = Math.floor(Math.random() * Math.floor(10));

  return (
    <article className={styles.card}>
      {image && (
        <Link className={styles.thumbnail} to={to}>
          {<Img className={styles.thumbnailInner} fluid={image}></Img>}
        </Link>
      )}
      <header>
        <PostTags tags={tags} />
        <PostCardTitle to={to} theme={theme}>
          {title}
        </PostCardTitle>
      </header>
      <section className={styles.excerpt}>
        <PostCardExcerpt theme={theme}>{excerpt}</PostCardExcerpt>
      </section>
      <footer>
        <PostInfo date={date} commentsCount={commentsCount} postLink={to} />
      </footer>
    </article>
  );
};
