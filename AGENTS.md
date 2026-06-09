# Repository Instructions

- Split UI and logic into small, focused components. Avoid large monolithic files when a feature can be expressed as readable subcomponents or helpers.
- Prefer explicit data-flow boundaries: Home Assistant lifecycle in the card adapter, render data shaping in view-model helpers, and visual concerns in Lit components.
- Do not commit or push after every change. Keep changes local unless the user explicitly asks for a commit or push.
- Preserve the existing Lit + TypeScript + Vite pattern for this Home Assistant Lovelace card.
