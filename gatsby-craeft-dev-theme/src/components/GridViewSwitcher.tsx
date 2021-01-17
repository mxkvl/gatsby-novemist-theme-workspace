import React from "react";

import { GridViewValue, ThemeValue } from "../types";

import gridTileLightIcon from "../../static/icons/grid-tile-light.svg";
import gridRowLightIcon from "../../static/icons/grid-row-light.svg";
import gridTileDarkIcon from "../../static/icons/grid-tile-dark.svg";
import gridRowDarkIcon from "../../static/icons/grid-row-dark.svg";

const ICONS = {
  tile: {
    light: gridTileDarkIcon,
    dark: gridTileLightIcon,
  },
  row: {
    light: gridRowDarkIcon,
    dark: gridRowLightIcon,
  },
};

interface GridViewSwitcherProps {
  gridView: GridViewValue;
  theme: ThemeValue;
  toggleGridView(): void;
}

export const GridViewSwitcher = ({
  gridView,
  theme,
  toggleGridView,
}: GridViewSwitcherProps) => {
  return (
    <button
      className="no-style-btn"
      style={{
        width: "20px",
        height: "20px",
        padding: 0,
      }}
      onClick={toggleGridView}
    >
      <img src={ICONS[gridView][theme]} alt="grid-view-switcher" />
    </button>
  );
};
