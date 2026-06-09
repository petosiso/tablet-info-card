import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { registerElement } from "../register-element";
import type { TabletInfoRow } from "../types";

const TAG_NAME = "tablet-info-card-row";

export interface TabletInfoRowTapDetail {
  row: TabletInfoRow;
}

export class TabletInfoCardRow extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-width: 0;
    }

    .row {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 11px;
      line-height: 1.15;
      color: var(--tic-main-color, #18bcf2);
    }

    .row.button {
      cursor: pointer;
    }

    .row.warn {
      color: var(--tic-highlight-color, #ff5d0c);
      font-weight: 700;
    }
  `;

  @property({ attribute: false })
  row?: TabletInfoRow;

  render() {
    if (!this.row) {
      return nothing;
    }

    const isClickable = this.isClickable;

    return html`
      <div
        class=${classMap({ row: true, button: isClickable, warn: this.row.warn })}
        role=${isClickable ? "button" : "presentation"}
        tabindex=${isClickable ? "0" : "-1"}
        title=${this.row.text}
        @click=${this.handleTap}
        @keydown=${this.handleKeyDown}
      >
        ${this.row.text}
      </div>
    `;
  }

  private get isClickable() {
    return !!(this.row?.entity || this.row?.tap_action);
  }

  private handleTap(event: Event) {
    if (!this.row || !this.isClickable) {
      return;
    }

    event.stopPropagation();
    // Keep row behavior local and let the parent decide how to talk to Home Assistant.
    this.dispatchEvent(
      new CustomEvent<TabletInfoRowTapDetail>("tablet-info-row-tap", {
        bubbles: true,
        composed: true,
        detail: { row: this.row },
      }),
    );
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    this.handleTap(event);
  }
}

registerElement(TAG_NAME, TabletInfoCardRow);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardRow;
  }
}
