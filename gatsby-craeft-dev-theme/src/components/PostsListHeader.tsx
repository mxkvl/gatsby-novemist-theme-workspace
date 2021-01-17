import React from "react";
import { GridViewValue, ThemeValue } from "../types";

import { GridViewSwitcher } from "./GridViewSwitcher";
import { PageTitle } from "./PageTitle";

import styles from "../../styles/posts-list-header.module.css";

interface PostsListHeaderProps {
  theme: ThemeValue;
  gridView: GridViewValue;
  toggleGridView(): void;
  title: string;
}

export const PostsListHeader = ({
  theme,
  gridView,
  toggleGridView,
  title,
}: PostsListHeaderProps) => {
  return (
    <header className={styles[theme]}>
      <PageTitle theme={theme}>{title}</PageTitle>
      <GridViewSwitcher
        theme={theme}
        gridView={gridView}
        toggleGridView={toggleGridView}
      />
    </header>
  );
};
