import React, { CSSProperties } from "react";
import { ThemeValue } from "../types";
import { InfoCard } from "./InfoCard";
import { useMailchimpSubscription } from "../core";

import { StyleModules } from "../style-modules";

const styles = StyleModules.subscribing;

interface SubscribingProps {
  theme?: ThemeValue;
  style?: CSSProperties;
}

export const Subscribing = ({ theme, style }: SubscribingProps) => {
  const { email, handleChangeEmail, handleSubmit } = useMailchimpSubscription();

  return (
    <InfoCard theme={theme} style={style}>
      <div className={styles[theme]}>
        <h4 className="monospace">Join the Mailing List ✉️</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={handleChangeEmail}
          />
          <button>Subscribe</button>
        </form>
      </div>
    </InfoCard>
  );
};
