import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { registerElement } from "../register-element";
import type { TabletInfoRow } from "../types";
import "./tablet-info-card-row";

const TAG_NAME = "tablet-info-card-rows";

export class TabletInfoCardRows extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-width: 0;
    }

    .rows {
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 6px;
      padding-left: var(--tic-row-indent, 10px);
    }

    .empty {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: var(--tic-row-font-size, 12px);
      line-height: 1.15;
      color: var(--tic-main-color, #18bcf2);
      opacity: 0.7;
    }
  `;

  @property({ attribute: false })
  rows: TabletInfoRow[] = [];

  render() {
    return html`
      <div class="rows">
        ${this.rows.length > 0
          ? this.rows.map((row, index) => html`<tablet-info-card-row .row=${row} data-index=${index}></tablet-info-card-row>`)
          : html`<div class="empty">No rows configured</div>`}
      </div>
    `;
  }
}

registerElement(TAG_NAME, TabletInfoCardRows);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardRows;
  }
}
