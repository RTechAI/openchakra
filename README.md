# ForgeUI Studio

ForgeUI Studio is an embedded UI and HMI designer built on top of the OpenChakra editor engine.

The project is focused on:
- ESP32-P4 UI design
- LVGL-style screen workflows
- embedded touchscreen layouts
- fixed-resolution HMI design
- future LVGL export tooling

Current target hardware:
- Waveshare ESP32-P4-WIFI6-Touch-LCD-7B
- 1024x600 embedded viewport

---

# PROJECT STATUS

Status:
ALIVE

Current stage:
Embedded coordinate-based editor architecture proven.

Current major milestones achieved:
- fixed embedded viewport
- absolute positioning
- persistent x/y movement
- persistent width/height resizing
- wrapper-owned interaction layer
- viewport-local drag/drop
- embedded workbench architecture
- resize handles V1 alive

ForgeUI Studio is evolving from:
- responsive web builder

toward:
- embedded HMI editor
- ESP32-P4 touchscreen designer
- future LVGL visual editor

---

# CURRENT FEATURES

Working:
- drag/drop widget placement
- fixed ESP32-P4 viewport
- coordinate positioning
- x/y inspector editing
- w/h inspector editing
- persistent movement
- persistent resize
- viewport bounds clamp
- component selection
- wrapper-owned interaction architecture

Current working widgets include:
- Badge
- Button
- Code
- Image
- Input
- Select

Some Chakra components still require normalization work for consistent embedded resizing behavior.

---

# ARCHITECTURE DIRECTION

ForgeUI Studio is NOT intended to become another generic responsive web-page builder.

The intended direction is:

ForgeUI Studio
->
embedded touchscreen designer
->
ESP32-P4 visual editor
->
LVGL-oriented workflow
->
future LVGL export system

Long-term goals include:
- embedded widget systems
- fixed-screen page design
- industrial touchscreen workflows
- dashboard/kiosk design
- ForgeUI-native components
- LVGL export/code generation

---

# IMPORTANT ARCHITECTURE RULES

- Do NOT rewrite the editor engine
- Keep interaction centralized
- Keep sizing centralized
- Keep positioning centralized
- Use wrapper-owned interaction
- Treat Chakra as render layer only
- Keep ForgeUI additions modular

Current interaction ownership direction:

Wrapper layer owns:
- drag
- resize
- selection
- hover
- overlays
- snap guides
- alignment helpers

Child component owns:
- visual rendering only

---

# CURRENT TECH STACK

Base Engine:
- OpenChakra

Framework:
- React
- Next.js
- Chakra UI

Editor Extensions:
- react-rnd
- ForgeUI wrapper interaction layer

Future Targets:
- LVGL
- ESP32-P4
- embedded UI workflows

---

# PROJECT STRUCTURE DIRECTION

Recommended ForgeUI-specific logic lives under:

src/forgeui/

Current important files include:
- ForgeUIDeviceConfig.ts
- ForgeUIPositionProps.ts
- PreviewContainer.tsx
- WithChildrenPreviewContainer.tsx

---

# DEVELOPMENT STATUS

Current architecture is now technically credible as:
- embedded UI editor
- ESP32-P4 designer
- touchscreen HMI designer
- future LVGL visual tooling platform

This project is no longer:
- "build editor from scratch"

The project is now:
- adapting a mature editor engine toward embedded tooling workflows

This dramatically reduces complexity and risk.

---

# UPSTREAM PROJECT

ForgeUI Studio is built on top of the OpenChakra project.

Original upstream project:
https://github.com/premieroctet/openchakra

Original upstream author:
Premier Octet

OpenChakra license:
MIT

ForgeUI Studio heavily extends and modifies the original editor toward:
- embedded workflows
- coordinate-based editing
- ESP32-P4 tooling
- LVGL-oriented workflows

The original MIT license and attribution remain preserved in this repository.

---

# LICENSE

ForgeUI Studio includes upstream MIT-licensed components from OpenChakra and other open-source projects.

Please see:
- LICENSE
- THIRD_PARTY_LICENSES.md

---

# CREATED BY

Scott Forster

ForgeUI Project

Contact:
forgeui.esp32@gmail.com