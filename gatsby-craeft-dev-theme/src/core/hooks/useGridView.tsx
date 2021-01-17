import { useState } from "react";
import { STORAGE_GRID_VIEW_KEY } from "../../constants";
import { GridViewValue } from "../../types";
import { getInitialGridViewValue } from "../../utils";

export const useGridView = () => {
  const [gridView, setGridView] = useState<GridViewValue>(
    getInitialGridViewValue()
  );

  const toggleGridView = () => {
    const newValue = gridView === "row" ? "tile" : "row";
    setGridView(newValue);

    try {
      localStorage.setItem(STORAGE_GRID_VIEW_KEY, newValue);
    } catch (e) {}
  };

  return {
    gridView,
    toggleGridView,
  };
};
