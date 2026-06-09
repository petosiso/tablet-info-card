import type React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "ha-card": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "ha-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon?: string;
      };
    }
  }
}
