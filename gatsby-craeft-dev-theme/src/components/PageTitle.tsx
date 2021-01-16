import React from "react";

import { ThemeValue } from "../types";
import { THEMES } from "../constants";

import styles from "../../styles/page-title.module.css";

interface PageTitleProps {
  children: string;
  theme?: ThemeValue;
}

export const PageTitle = ({
  children,
  theme = THEMES.light,
}: PageTitleProps) => {
  return <h1 className={styles[theme]}>{children}</h1>;
};
