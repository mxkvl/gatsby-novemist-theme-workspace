import React, { CSSProperties } from "react";
import { ThemeValue } from "../types";
import { InfoCard } from "./InfoCard";
import { useMailchimpSubscription } from "../core";

import { StyleModules } from "../style-modules";
import { Icon } from "./Icon";
import { icons } from "../icons";

const styles = StyleModules.subscribing;

interface SubscribingProps {
  theme?: ThemeValue;
}

export const Subscribing = ({ theme }: SubscribingProps) => {
  const { email, handleChangeEmail, handleSubmit } = useMailchimpSubscription();

  return (
    <InfoCard theme={theme}>
      <div className={styles[theme]}>
        <h4 className="monospace">
          <span>Join the Mailing List </span>
          <Icon src={icons.emojiEnvelope} widthSize="20px" />
        </h4>
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
