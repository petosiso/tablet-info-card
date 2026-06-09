import type { HassActionConfig } from "./types";

export interface HassActionDetail {
  config: {
    entity?: string | null;
    tap_action: HassActionConfig;
  };
  action: "tap";
}

export const fireHassAction = (target: EventTarget, detail: HassActionDetail) => {
  target.dispatchEvent(
    new CustomEvent<HassActionDetail>("hass-action", {
      bubbles: true,
      composed: true,
      detail,
    }),
  );
};
