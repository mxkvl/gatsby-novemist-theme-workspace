import React from "react";
import { ThemeValue } from "../types";
import { icons } from "../icons";
import { Icon } from "./Icon";

interface ThemeSwitcherProps {
  theme?: ThemeValue;
  onToggle?(): void;
}

export const ThemeSwitcher = ({ theme, onToggle }: ThemeSwitcherProps) => {
  return (
    <button
      className="no-style-btn"
      onClick={onToggle}
      style={{ display: "flex", alignItems: "center" }}
    >
      {theme === "dark" ? (
        <Icon src={icons.emojiSun} widthSize="18px" />
      ) : (
        <Icon src={icons.emojiWaxingCrescentMoon} widthSize="18px" />
      )}
    </button>
  );
};
