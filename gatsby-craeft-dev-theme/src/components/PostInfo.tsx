import { Link } from "gatsby";
import React from "react";

import styles from "../../styles/post-info.module.css";

interface PostInfoProps {
  author?: {
    to: string;
    name: string;
  };
  date: string;
  commentsCount: number;
  postLink?: string;
}

export const PostInfo = ({
  author,
  date,
  commentsCount,
  postLink = "",
}: PostInfoProps) => {
  return (
    <div className={styles.info}>
      {author && (
        <>
          <Link to={author.to}>{author.name}</Link>
          <span> | </span>
        </>
      )}
      <time dateTime={date}>{date}</time>
      <span> | </span>
      <Link to={`${postLink}#comments`}>{`${commentsCount} ${
        commentsCount === 1 ? "comment" : "comments"
      }`}</Link>
    </div>
  );
};

export default PostInfo;
