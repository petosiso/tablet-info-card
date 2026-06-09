# Tablet Info Card

A compact Home Assistant Lovelace card for status/navigation tiles with one icon, one title, and up to three detail rows.

This card replaces a previous `streamline-card` + `button-card` YAML template with a standalone custom card. It has no HACS runtime dependencies besides Home Assistant itself.

## Installation with HACS as a custom repository

1. In Home Assistant, open HACS.
2. Open the three-dot menu and choose **Custom repositories**.
3. Add `https://github.com/petosiso/tablet-info-card`.
4. Select category **Dashboard**.
5. Download the repository.

If Home Assistant does not add the dashboard resource automatically, add it manually:

```yaml
url: /hacsfiles/tablet-info-card/tablet-info-card.js
type: module
```

## Basic usage

```yaml
type: custom:tablet-info-card
entity: sensor.tablet_status
```

In this mode the card reads these optional entity attributes:

```yaml
icon: mdi:flash
name: Tablet
navigation_path: /dashboard-tablet
is_warn: false
row_1_text: Battery 82 %
row_1_entity: sensor.tablet_battery
row_1_warn: false
row_2_text: Charging
row_2_entity: binary_sensor.tablet_charging
row_2_warn: false
row_3_text: Wi-Fi OK
row_3_entity: sensor.tablet_wifi
row_3_warn: false
```

## Config-driven usage

```yaml
type: custom:tablet-info-card
entity: sensor.boiler_status
name: Boiler
icon: mdi:water-boiler
navigation_path: /dashboard-boiler
warn: false
rows:
  - entity: sensor.boiler_temperature
    name: Temperature
  - text: Heating enabled
    entity: switch.boiler_heating
  - text: Service needed
    entity: binary_sensor.boiler_service
    warn: true
```

Rows support static text or entity-derived text. If a row has `entity` but no `text`, the card renders the entity friendly name and state.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `entity` | string | optional | Main entity used for title, icon, warning state, navigation path, and fallback row attributes. |
| `name` | string | entity attribute | Main title. |
| `icon` | string | `mdi:flash` | Main Material Design icon. |
| `navigation_path` | string | entity attribute | Path used for the default card tap action. |
| `tap_action` | object | navigate or more-info | Home Assistant tap action for the main card. |
| `warn` | boolean | `entity.attributes.is_warn` | Switches the card to warning colors. |
| `rows` | list | entity row attributes | Up to three detail rows. |
| `background_ok` | string | `rgba(46, 46, 46, 0.5)` | Normal card background. |
| `background_nok` | string | `#ffcccc` | Warning card background. |
| `text_ok` | string | `#18bcf2` | Normal text/icon color. |
| `text_nok` | string | `#3a3a3a` | Warning text/icon color. |
| `text_highlight` | string | `#ff5d0c` | Warning row highlight color. |
| `height` | string | `130px` | Card height. |
| `border_radius` | string | `20px` | Card border radius. |
| `icon_size` | string | `37px` | Icon size. |
| `icon_col_width` | string | `37px` | Icon column width. |
| `row_indent` | string | `10px` | Left padding for detail rows. |

## Row options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | string | entity-derived | Text shown in the row. |
| `entity` | string | optional | Entity used for default `more-info` tap action and derived row text. |
| `name` | string | entity friendly name | Label used when text is derived from an entity. |
| `attribute` | string | optional | Entity attribute to display instead of state. |
| `unit` | string | entity unit | Unit appended to derived state text. |
| `show_name` | boolean | `true` | Set to `false` to show only the derived value. |
| `warn` | boolean | `false` | Highlights the row. |
| `inherit_warn` | boolean | `false` | Lets the row inherit the main card warning state. |
| `tap_action` | object | `more-info` | Home Assistant tap action for the row. |

## Release checklist

1. Update `CARD_VERSION` in `dist/tablet-info-card.js`.
2. Commit the change.
3. Create a GitHub release, for example `v0.1.0`.
4. In HACS, redownload the custom repository.
