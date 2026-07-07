import { LitElement, css, html, nothing } from "lit";
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

  `;

  @property({ attribute: false })
  rows: TabletInfoRow[] = [];

  render() {
    return html`
      <div class="rows">
        ${this.rows.length > 0
          ? this.rows.map((row, index) => html`<tablet-info-card-row .row=${row} data-index=${index}></tablet-info-card-row>`)
          : nothing}
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
