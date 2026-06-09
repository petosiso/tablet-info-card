const CARD_VERSION = "0.1.1";
const CARD_TYPE = "tablet-info-card";

const DEFAULT_CONFIG = {
  background_ok: "rgba(46, 46, 46, 0.5)",
  background_nok: "#ffcccc",
  text_ok: "#18bcf2",
  text_nok: "#3a3a3a",
  text_highlight: "#ff5d0c",
  icon_size: "37px",
  icon_col_width: "37px",
  row_indent: "10px",
  height: "130px",
  border_radius: "20px",
};

const toBool = (value) => value === true || value === "true" || value === 1 || value === "1";

const hasValue = (value) => value !== undefined && value !== null && value !== "";

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

class TabletInfoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  setConfig(config) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  getCardSize() {
    return 3;
  }

  getGridOptions() {
    return {
      rows: 3,
      columns: 6,
      min_rows: 2,
      min_columns: 3,
    };
  }

  static getStubConfig() {
    return {
      entity: "sensor.ui_element_example",
    };
  }

  static getConfigForm() {
    return {
      schema: [
        { name: "entity", selector: { entity: {} } },
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
        { name: "navigation_path", selector: { text: {} } },
        { name: "warn", selector: { boolean: {} } },
      ],
    };
  }

  _render() {
    if (!this.config) {
      return;
    }

    const entity = this._getEntity(this.config.entity);
    const attributes = entity?.attributes ?? {};
    const isWarn = hasValue(this.config.warn) ? toBool(this.config.warn) : toBool(attributes.is_warn);
    const mainColor = isWarn ? this.config.text_nok : this.config.text_ok;
    const background = isWarn ? this.config.background_nok : this.config.background_ok;
    const title = this._getTitle(attributes, entity);
    const icon = this.config.icon || attributes.icon || "mdi:flash";
    const navigationPath = this.config.navigation_path || attributes.navigation_path;
    const rows = this._getRows(attributes, isWarn);
    const isClickable = !!(this.config.tap_action || navigationPath || this.config.entity);

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: var(--paper-font-body1_-_font-family, var(--primary-font-family, sans-serif));
        }

        ha-card {
          display: block;
          min-height: ${escapeHtml(this.config.height)};
          border-radius: ${escapeHtml(this.config.border_radius)};
          background: ${escapeHtml(background)};
          border: none;
          box-shadow: 0 0 8px 0 ${escapeHtml(mainColor)};
          overflow: hidden;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .card {
          min-height: ${escapeHtml(this.config.height)};
          box-sizing: border-box;
          display: grid;
          grid-template-areas:
            "i n"
            "r r";
          grid-template-columns: ${escapeHtml(this.config.icon_col_width)} 1fr;
          grid-template-rows: ${escapeHtml(this.config.icon_size)} 1fr;
          column-gap: 8px;
          padding: 8px 10px;
          color: ${escapeHtml(mainColor)};
          cursor: ${isClickable ? "pointer" : "default"};
        }

        .icon-cell {
          grid-area: i;
          width: ${escapeHtml(this.config.icon_col_width)};
          height: ${escapeHtml(this.config.icon_size)};
          display: flex;
          align-items: center;
          justify-content: center;
        }

        ha-icon {
          --mdc-icon-size: ${escapeHtml(this.config.icon_size)};
          --iron-icon-width: ${escapeHtml(this.config.icon_size)};
          --iron-icon-height: ${escapeHtml(this.config.icon_size)};
          color: ${escapeHtml(mainColor)};
        }

        .name {
          grid-area: n;
          align-self: center;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          color: ${escapeHtml(mainColor)};
        }

        .rows {
          grid-area: r;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2px;
          min-width: 0;
          padding-top: 4px;
          padding-left: ${escapeHtml(this.config.row_indent)};
        }

        .row {
          appearance: none;
          border: 0;
          background: transparent;
          color: inherit;
          font: inherit;
          text-align: left;
          padding: 0;
          min-width: 0;
          line-height: 1.35;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: default;
        }

        .row[role="button"] {
          cursor: pointer;
        }

        .row.warn {
          color: ${escapeHtml(this.config.text_highlight)};
          font-weight: 700;
        }

        .empty {
          opacity: 0.7;
        }
      </style>
      <ha-card>
        <div class="card" role="${isClickable ? "button" : "presentation"}" tabindex="${isClickable ? "0" : "-1"}">
          <div class="icon-cell">
            <ha-icon icon="${escapeHtml(icon)}"></ha-icon>
          </div>
          <div class="name">${escapeHtml(title)}</div>
          <div class="rows">
            ${rows.length > 0 ? rows.map((row, index) => this._renderRow(row, index)).join("") : `<div class="row empty">No rows configured</div>`}
          </div>
        </div>
      </ha-card>
    `;

    this.shadowRoot.querySelector(".card")?.addEventListener("click", () => this._handleCardTap(navigationPath));
    this.shadowRoot.querySelector(".card")?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this._handleCardTap(navigationPath);
      }
    });

    this.shadowRoot.querySelectorAll(".row[role='button']").forEach((element) => {
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        this._handleRowTap(rows[Number(element.dataset.index)]);
      });
      element.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          this._handleRowTap(rows[Number(element.dataset.index)]);
        }
      });
    });
  }

  _renderRow(row, index) {
    const role = row.entity || row.tap_action ? "button" : "presentation";
    const tabindex = role === "button" ? "0" : "-1";
    const className = row.warn ? "row warn" : "row";
    return `<div class="${className}" role="${role}" tabindex="${tabindex}" data-index="${index}">${escapeHtml(row.text)}</div>`;
  }

  _getEntity(entityId) {
    return entityId && this._hass?.states ? this._hass.states[entityId] : undefined;
  }

  _getTitle(attributes, entity) {
    return (
      this.config.name ||
      attributes.name ||
      attributes.friendly_name ||
      entity?.attributes?.friendly_name ||
      this.config.entity ||
      ""
    );
  }

  _getRows(attributes, cardWarn) {
    if (Array.isArray(this.config.rows) && this.config.rows.length > 0) {
      return this.config.rows
        .slice(0, 3)
        .map((row) => this._normalizeConfiguredRow(row, cardWarn))
        .filter((row) => hasValue(row.text));
    }

    return [1, 2, 3]
      .map((number) => ({
        entity: attributes[`row_${number}_entity`] || null,
        text: attributes[`row_${number}_text`] || "",
        warn: toBool(attributes[`row_${number}_warn`]),
      }))
      .filter((row) => hasValue(row.text));
  }

  _normalizeConfiguredRow(row, cardWarn) {
    const entity = this._getEntity(row.entity);
    const text = hasValue(row.text)
      ? row.text
      : this._formatEntityRow(entity, row);

    return {
      ...row,
      text,
      warn: hasValue(row.warn) ? toBool(row.warn) : cardWarn && toBool(row.inherit_warn),
    };
  }

  _formatEntityRow(entity, row) {
    if (!entity) {
      return "";
    }

    const label = row.name || entity.attributes?.friendly_name || row.entity;
    const rawValue = row.attribute ? entity.attributes?.[row.attribute] : entity.state;
    const value = Array.isArray(rawValue) || typeof rawValue === "object" ? JSON.stringify(rawValue) : rawValue;
    const unit = row.unit ?? (row.attribute ? "" : entity.attributes?.unit_of_measurement ?? "");

    if (!hasValue(value)) {
      return label;
    }

    return row.show_name === false ? `${value}${unit ? ` ${unit}` : ""}` : `${label}: ${value}${unit ? ` ${unit}` : ""}`;
  }

  _handleCardTap(navigationPath) {
    const tapAction =
      this.config.tap_action ||
      (navigationPath
        ? { action: "navigate", navigation_path: navigationPath }
        : this.config.entity
          ? { action: "more-info" }
          : null);

    if (!tapAction) {
      return;
    }

    this._fireAction({
      entity: this.config.entity,
      tap_action: tapAction,
    });
  }

  _handleRowTap(row) {
    if (!row) {
      return;
    }

    const tapAction = row.tap_action || (row.entity ? { action: "more-info" } : null);
    if (!tapAction) {
      return;
    }

    this._fireAction({
      entity: row.entity || this.config.entity,
      tap_action: tapAction,
    });
  }

  _fireAction(actionConfig) {
    const event = new Event("hass-action", {
      bubbles: true,
      composed: true,
    });

    event.detail = {
      config: actionConfig,
      action: "tap",
    };

    this.dispatchEvent(event);
  }
}

if (!customElements.get(CARD_TYPE)) {
  customElements.define(CARD_TYPE, TabletInfoCard);
}

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({
    type: CARD_TYPE,
    name: "Tablet Info Card",
    preview: true,
    description: "Compact status and navigation card with up to three detail rows.",
    documentationURL: "https://github.com/petosiso/tablet-info-card",
    getEntitySuggestion: (hass, entityId) => {
      const attributes = hass.states[entityId]?.attributes ?? {};
      const looksSupported =
        hasValue(attributes.navigation_path) ||
        hasValue(attributes.row_1_text) ||
        hasValue(attributes.row_2_text) ||
        hasValue(attributes.row_3_text);

      if (!looksSupported) {
        return null;
      }

      return {
        config: {
          type: `custom:${CARD_TYPE}`,
          entity: entityId,
        },
      };
    },
  });
}

console.info(
  `%c ${CARD_TYPE} %c ${CARD_VERSION} `,
  "color: white; background: #18bcf2; font-weight: 700;",
  "color: #18bcf2; background: transparent; font-weight: 700;",
);
