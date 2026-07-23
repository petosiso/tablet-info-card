# Tablet Info Card

A compact Home Assistant Lovelace card for status/navigation tiles with one icon, one title, up to three detail rows, and an optional mini graph.

The card is intentionally a **visual component**. The preferred pattern is to keep dashboard logic in Home Assistant template sensors and let the card render a stable attribute contract.

The source is written in Lit, TypeScript, and Vite. Home Assistant loads it as a standard Lovelace custom element, and HACS installs the compiled `dist/tablet-info-card.js` bundle.

## Screenshots

<p>
  <img src="https://raw.githubusercontent.com/petosiso/tablet-info-card/main/example_result/0.png" alt="Tablet Info Card close-up in Home Assistant" width="360" style="display: block;">
</p>

<p>
  <img src="https://raw.githubusercontent.com/petosiso/tablet-info-card/main/example_result/2.png" alt="Tablet dashboard overview with Tablet Info Card grid" width="900" style="display: block;">
</p>

<p>
  <img src="https://raw.githubusercontent.com/petosiso/tablet-info-card/main/example_result/1.png" alt="Tablet dashboard with camera and status cards" width="900" style="display: block;">
</p>

<p>
  <img src="https://raw.githubusercontent.com/petosiso/tablet-info-card/main/example_result/3.png" alt="Tablet dashboard with outdoor systems and status cards" width="900" style="display: block;">
</p>

## Why this card exists

Home Assistant dashboards often become hard to maintain when every card instance repeats the same input entities, Jinja snippets, warning rules, labels, and navigation paths.

This card is built around a reusable component pattern:

- Define the logic once in Home Assistant, for example in `/homeassistant/templates/ui_elements.yaml`.
- Expose that logic as a template sensor with UI-focused attributes.
- Reuse the same visual card anywhere by passing only one entity.

```yaml
type: custom:tablet-info-card
source: template_entity
entity: sensor.ui_element_blinds
```

That keeps the Lovelace card clean and makes each template sensor act like a small UI view-model. If you want to move the same tile to another dashboard, you do not need to copy Jinja code or repeat the same row definitions.

The card still supports direct YAML configuration as a fallback for users who do not want this template sensor pattern.

## Recommended Home Assistant structure

Create a template file like this:

```text
/homeassistant/templates/ui_elements.yaml
```

Include it from `configuration.yaml`:

```yaml
template: !include_dir_merge_list templates/
```

Then define one or more template sensors in `ui_elements.yaml`. Each sensor can describe one reusable UI element.

See [examples/ui-elements-template.yaml](examples/ui-elements-template.yaml) for a complete example.

## Template sensor contract

The preferred input is a single entity with these attributes:

| Attribute | Required | Description |
| --- | --- | --- |
| `ui_element_type` | For UI picker | Set to `tablet_info_card` so the visual editor and card suggestions can list only compatible template entities. |
| `name` | No | Title shown in the card. Falls back to the entity friendly name. |
| `icon` | No | Main Material Design icon. Falls back to `mdi:flash`. |
| `navigation_path` | No | Dashboard path used when the main card is tapped. |
| `is_warn` | No | Switches the main card into warning colors. |
| `row_1_text` | No | Text for the first detail row. |
| `row_1_entity` | No | Entity opened with `more-info` when the first row is tapped. |
| `row_1_warn` | No | Highlights the first row. |
| `row_2_text` | No | Text for the second detail row. |
| `row_2_entity` | No | Entity opened with `more-info` when the second row is tapped. |
| `row_2_warn` | No | Highlights the second row. |
| `row_3_text` | No | Text for the third detail row. |
| `row_3_entity` | No | Entity opened with `more-info` when the third row is tapped. |
| `row_3_warn` | No | Highlights the third row. |
| `graph_entity` | No | Numeric entity whose current state and Home Assistant history are rendered as a mini graph. |
| `graph_name` | No | Label shown under the graph current value. |
| `graph_period` | No | Set to `today` to render from local midnight to the next midnight. Defaults to `hours`. |
| `graph_hours_to_show` | No | Number of history hours loaded for the graph. Defaults to `24`. |
| `graph_unit` | No | Unit shown next to the graph current value. Falls back to the graph entity unit. |
| `graph_color` | No | CSS color used for the graph line. Falls back to the card text color. |
| `graph_curve` | No | Set to `step` for held-value sensors such as fan speed, binary-like numeric states, or modes. Defaults to `linear`. |

You can define only the rows you need. Missing rows, for example `row_3_text`, are simply not rendered.

## Template sensor example

```yaml
- sensor:
    - name: "Blinds [UI]"
      unique_id: ui_element_blinds
      state: >
        {% set covers = [
          'cover.blinds_bedroom',
          'cover.blinds_kitchen'
        ] %}
        {% set open_count =
          (covers | select('is_state', 'open') | list | count)
          + (covers | select('is_state', 'opening') | list | count)
        %}
        {{ 'Open' if open_count > 0 else 'Closed' }}
      attributes:
        ui_element_type: tablet_info_card
        name: "Blinds"
        icon: "mdi:blinds-horizontal"
        navigation_path: "/lovelace/blinds"
        is_warn: >
          {% set covers = [
            'cover.blinds_bedroom',
            'cover.blinds_kitchen'
          ] %}
          {% set open_count =
            (covers | select('is_state', 'open') | list | count)
            + (covers | select('is_state', 'opening') | list | count)
          %}
          {{ open_count > 0 and is_state('sun.sun', 'below_horizon') }}

        row_1_entity: sensor.ui_element_blinds
        row_1_text: >
          {% set covers = [
            'cover.blinds_bedroom',
            'cover.blinds_kitchen'
          ] %}
          {% set open_count =
            (covers | select('is_state', 'open') | list | count)
            + (covers | select('is_state', 'opening') | list | count)
          %}
          Open: {{ open_count }}
        row_1_warn: >
          {% set covers = [
            'cover.blinds_bedroom',
            'cover.blinds_kitchen'
          ] %}
          {% set open_count =
            (covers | select('is_state', 'open') | list | count)
            + (covers | select('is_state', 'opening') | list | count)
          %}
          {{ open_count > 0 and is_state('sun.sun', 'below_horizon') }}

        row_2_entity: sun.sun
        row_2_text: >
          {% set next_setting = state_attr('sun.sun', 'next_setting') %}
          Sunset: {{ as_timestamp(next_setting) | timestamp_custom('%H:%M', true) if next_setting else '-' }}
        row_2_warn: false
```

Graph settings can also live on the same template sensor:

```yaml
- sensor:
    - name: "Heat Pump [UI]"
      unique_id: ui_element_heat_pump
      state: "{{ states('sensor.energy_consumption_kw') }}"
      attributes:
        ui_element_type: tablet_info_card
        name: "Heat pump"
        icon: "mdi:heat-pump"
        navigation_path: "/lovelace/heat-pump"

        row_1_entity: sensor.energy_consumption_kw
        row_1_text: >
          Consumption: {{ states('sensor.energy_consumption_kw') | float(0) | round(2) }} kW

        graph_entity: sensor.energy_consumption_kw
        graph_name: Current consumption
        graph_period: today
        graph_hours_to_show: 24
        graph_unit: kW
        graph_color: "#18bcf2"
        graph_curve: linear
```

Dashboard usage stays small:

```yaml
type: custom:tablet-info-card
source: template_entity
entity: sensor.ui_element_heat_pump
height: 230
```

After creating a template sensor with `unique_id`, Home Assistant may generate an entity ID from the sensor name. Rename or confirm it in Home Assistant if you want a stable entity ID such as `sensor.ui_element_blinds`.

The visual editor and Home Assistant card suggestions use the `ui_element_type: tablet_info_card` marker to list compatible template entities. Template sensors without the marker still work when referenced manually in YAML, but they will not appear in those filtered UI flows.

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

## Fallback config-driven usage

You can also configure everything directly in Lovelace without template sensors:

```yaml
type: custom:tablet-info-card
source: manual
entity: sun.sun
name: Sun overview
icon: mdi:white-balance-sunny
navigation_path: /lovelace/default_view
fullCardClick: true
warn:
  entity: sun.sun
  state: below_horizon
height: 130
header_padding: 10
body_padding: 10
icon_size: 37
title_font_size: 16
row_font_size: 12
graph_height: 35
graph_value_font_size: 20
graph_value_color: "#d5d8dc"
rows:
  - entity: sun.sun
    name: State
    warn:
      entity: sun.sun
      state: below_horizon
  - entity: sun.sun
    attribute: next_rising
    name: Next rising
  - entity: sun.sun
    attribute: next_setting
    name: Next setting
graph:
  entity: sensor.current_power
  name: Current draw
  period: hours
  hours_to_show: 24
  unit: kW
  color: "#18bcf2"
  curve: linear
```

Rows support static text or entity-derived text. If a row has `entity` but no `text`, the card renders the entity friendly name and state.

For simple fallback use cases, `warn` can also be driven by an entity state:

```yaml
warn:
  entity: binary_sensor.garage_door
  state: "on"
```

Multiple states are supported:

```yaml
warn:
  entity: cover.bedroom_blinds
  state:
    - open
    - opening
```

Use `not_state` when the warning should be active for every state except the listed one:

```yaml
warn:
  entity: sensor.tablet_battery_health
  not_state: normal
```

The warning object supports these fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entity` | string | Yes | Entity whose state is checked. |
| `state` | string or list | No | Warning is active when the entity state matches. |
| `not_state` | string or list | No | Warning is active when the entity state does not match. |

The card intentionally does not evaluate Jinja in Lovelace YAML. For complex conditions, calculations, formatting, or comparisons, create a Home Assistant template sensor and expose the final text/warning attributes to the card.

## Card options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | `template_entity` or `manual` | `template_entity` | Selects whether rows and default values come from template entity attributes or direct card config. |
| `entity` | string | optional | Main entity used for title, icon, warning state, navigation path, and fallback row attributes. |
| `name` | string | entity/template attribute | Main title override. |
| `icon` | string | template attribute or `mdi:flash` | Main Material Design icon override. |
| `navigation_path` | string | template attribute | Path used for the default card tap action. |
| `fullCardClick` | boolean | `false` | When `true` and `navigation_path` is set, every card area (including rows and graph) navigates to that path after a short vertical flip. |
| `tap_action` | object | navigate or more-info | Home Assistant tap action for the main card. |
| `warn` | boolean or object | template `is_warn` or `false` | Switches the card to warning colors, either statically or by matching another entity state. |
| `rows` | list | template row attributes or empty | Up to three detail rows. |
| `graph` | object | optional | Optional mini graph with current value, label, and history sparkline. |
| `background_ok` | string | `rgba(46, 46, 46, 0.5)` | Normal card background. |
| `background_nok` | string | `#ffcccc` | Warning card background. |
| `text_ok` | string | `#18bcf2` | Normal text/icon color. |
| `text_nok` | string | `#3a3a3a` | Warning text/icon color. |
| `text_highlight` | string | `#ff5d0c` | Warning row highlight color. |
| `graph_warn_color` | string | `#d93025` | Graph line color used when the card is in warning state. |
| `graph_value_color` | string | `#d5d8dc` | Graph current value and label color in normal state. Warning state uses `text_nok`. |
| `height` | string or number | `130px` | Card height. Unitless values from the UI editor are treated as pixels. |
| `header_padding` | string or number | `10px` | Padding used for the header area with icon and title. Unitless values from the UI editor are treated as pixels. |
| `body_padding` | string or number | `10px` | Padding used for the rows or graph area. Unitless values from the UI editor are treated as pixels. |
| `border_radius` | string | `20px` | Card border radius. |
| `icon_size` | string or number | `37px` | Icon size. Unitless values from the UI editor are treated as pixels. |
| `row_indent` | string or number | `10px` | Left padding for detail rows. Unitless values from the UI editor are treated as pixels. |
| `title_font_size` | string or number | `16px` | Font size for the card title. Unitless values from the UI editor are treated as pixels. |
| `row_font_size` | string or number | `12px` | Font size for detail rows. Unitless values from the UI editor are treated as pixels. |
| `graph_height` | string or number | `35px` | Height of the graph drawing area. Unitless values from the UI editor are treated as pixels. |
| `graph_value_font_size` | string or number | `20px` | Font size for the graph current value. The graph label is 2px smaller. Unitless values from the UI editor are treated as pixels. |

## Graph options

These options apply when you define `graph` directly in Lovelace. With `source: template_entity`, the same values can also come from `graph_entity`, `graph_name`, `graph_period`, `graph_hours_to_show`, `graph_unit`, `graph_color`, and `graph_curve` attributes on the template sensor. Lovelace `graph` values override template sensor graph attributes.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `entity` | string | required | Entity whose current state and Home Assistant history are rendered. |
| `name` | string | entity friendly name | Label shown under the current value. |
| `period` | `hours` or `today` | `hours` | `hours` renders a rolling window from `hours_to_show`; `today` renders from local midnight to the next midnight so the graph fills from left to right during the day. |
| `hours_to_show` | number or string | `24` | Number of history hours loaded from Home Assistant. Values are clamped between `0.25` and `168`. |
| `unit` | string | entity unit | Unit shown next to the current value. |
| `color` | string | card text color | CSS color used for the sparkline in normal state. Warning state uses `graph_warn_color`. |
| `curve` | `linear` or `step` | `linear` | `linear` connects points directly; `step` holds each value until the next state change, matching Home Assistant history for discrete sensors. |

The graph uses Home Assistant's history API and renders a lightweight SVG sparkline without an external chart dependency. If history is unavailable, the card still shows the current value.

Tapping the graph opens the default Home Assistant more-info dialog for the graph entity, including its built-in history graph.

## Fallback row options

These options apply only when you define `rows` directly in Lovelace:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | string | entity-derived | Text shown in the row. |
| `entity` | string | optional | Entity used for default `more-info` tap action and derived row text. |
| `name` | string | entity friendly name | Label used when text is derived from an entity. |
| `attribute` | string | optional | Entity attribute to display instead of state. |
| `unit` | string | entity unit | Unit appended to derived state text. |
| `show_name` | boolean | `true` | Set to `false` to show only the derived value. |
| `warn` | boolean or object | `false` | Highlights the row, either statically or by matching another entity state. |
| `inherit_warn` | boolean | `false` | Lets the row inherit the main card warning state. |
| `tap_action` | object | `more-info` | Home Assistant tap action for the row. |

## Development

The card is implemented as small Lit Web Components:

```text
src/
  main.ts                          # HACS card picker registration and bundle entry
  tablet-info-card.ts              # Home Assistant custom card lifecycle
  card-source.ts                   # data-source and template-entity helpers
  components/
    tablet-info-card-editor.ts     # visual editor coordinator used by Home Assistant
    tablet-info-card-body.ts       # visual card shell and card tap action
    tablet-info-card-header.ts     # icon and title
    tablet-info-card-graph.ts      # optional SVG history sparkline and current value
    tablet-info-card-rows.ts       # row list
    tablet-info-card-row.ts        # one detail row and row tap action
    editor/                        # focused source, entity, manual, and layout editor controls
  viewModel.ts                     # config/entity attributes -> render model
  styles.ts                        # CSS variable helpers
  types.ts                         # HA and card config types
```

Install dependencies and build:

```bash
npm install
npm run check
```

Run a local Vite dev server for testing from Home Assistant:

```bash
npm run dev -- --port 5173
```

Then add a temporary Home Assistant dashboard resource:

```yaml
url: http://YOUR_DEV_MACHINE_IP:5173/src/main.ts
type: module
```

Disable the HACS resource for the same card while using the dev server, because the browser can register `custom:tablet-info-card` only once.

`npm run build` writes the HACS-ready bundle to:

```text
dist/tablet-info-card.js
```

Lit is bundled into that file, so Home Assistant users do not install any frontend dependency separately.

## Release checklist

1. Update `version` in `package.json`.
2. Update `CARD_VERSION` in `src/constants.ts`.
3. Run `npm run check`.
4. Commit the source files and generated `dist/tablet-info-card.js`.
5. Create a GitHub release, for example `v0.4.0`.
6. In HACS, redownload the custom repository.
