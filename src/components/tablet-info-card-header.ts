import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { registerElement } from "../register-element";

const TAG_NAME = "tablet-info-card-header";

export class TabletInfoCardHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-width: 0;
    }

    .header {
      display: grid;
      grid-template-columns: var(--tic-icon-col-width, 32px) 1fr;
      column-gap: 8px;
      align-items: center;
      min-width: 0;
    }

    .icon-cell {
      width: var(--tic-icon-col-width, 32px);
      height: var(--tic-icon-size, 30px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ha-icon {
      --mdc-icon-size: var(--tic-icon-size, 30px);
      --iron-icon-width: var(--tic-icon-size, 30px);
      --iron-icon-height: var(--tic-icon-size, 30px);
      color: var(--tic-main-color, #18bcf2);
      filter: drop-shadow(0 0 5px color-mix(in srgb, var(--tic-main-color, #18bcf2) 42%, transparent));
    }

    .title {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.15;
      letter-spacing: 0;
      color: var(--tic-main-color, #18bcf2);
    }
  `;

  @property({ type: String })
  icon = "mdi:flash";

  @property({ type: String })
  title = "";

  render() {
    return html`
      <div class="header">
        <div class="icon-cell">
          <ha-icon .icon=${this.icon}></ha-icon>
        </div>
        <div class="title" title=${this.title}>${this.title}</div>
      </div>
    `;
  }
}

registerElement(TAG_NAME, TabletInfoCardHeader);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: TabletInfoCardHeader;
  }
}
