import React from "react";

import styles from "../../styles/posts-section.module.css";

interface PostsSectionProps {
  children: React.ReactNode;
}

export const PostsSection = ({ children }: PostsSectionProps) => {
  return <section className={styles.section}>{children}</section>;
};
