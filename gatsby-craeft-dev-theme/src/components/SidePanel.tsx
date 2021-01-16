import React from "react";

import styles from "../../styles/side-panel.module.css";

interface SidePanelProps {
  children: React.ReactNode;
}

export const SidePanel = ({ children }: SidePanelProps) => {
  return <aside className={styles.panel}>{children}</aside>;
};
