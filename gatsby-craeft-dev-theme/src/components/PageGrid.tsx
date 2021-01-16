import React from "react";

import styles from "../../styles/page-grid.module.css";

interface PageGridProps {
  children: React.ReactNode;
}

export const PageGrid = ({ children }: PageGridProps) => {
  return <section className={styles.page}>{children}</section>;
};
