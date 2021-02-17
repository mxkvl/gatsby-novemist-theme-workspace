import React, { CSSProperties } from "react";

import { DEFAULT_THEME } from "../constants";
import { ThemeValue } from "../types";

import { StyleModules } from "../style-modules";

const styles = StyleModules.infoCard;

interface InfoCardProps {
  theme?: ThemeValue;
  children: React.ReactNode;
  style?: CSSProperties;
}

export const InfoCard = ({
  children,
  theme = DEFAULT_THEME,
  style,
}: InfoCardProps) => {
  return (
    <div style={style} className={styles[theme]}>
      {children}
    </div>
  );
};
