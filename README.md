# ForgeUI Studio

ForgeUI Studio is an embedded UI and HMI designer evolving toward a real LVGL deployment pipeline for ESP32-P4 hardware.

Built on top of the OpenChakra editor engine, the project is focused on:

* ESP32-P4 UI design
* LVGL-oriented workflows
* embedded touchscreen layouts
* fixed-resolution HMI design
* coordinate-based embedded UI workflows
* future industrial/dashboard tooling

Current target hardware:

* Waveshare ESP32-P4-WIFI6-Touch-LCD-7B
* 1024x600 embedded viewport
* LVGL v9
* ESP-IDF runtime pipeline

---

# PROJECT STATUS

Status:
ALIVE

Current stage:
Real Studio-to-hardware deployment pipeline proven.

Current major milestones achieved:

* fixed embedded viewport
* absolute positioning
* persistent x/y movement
* persistent width/height resizing
* wrapper-owned interaction architecture
* viewport-local drag/drop
* embedded workbench architecture
* resize handles V1 alive
* generated LVGL C export
* localhost export bridge
* automatic ESP-IDF build/flash pipeline
* physical ESP32-P4 rendering proof

ForgeUI Studio has now crossed from:

* browser/editor prototype

into:

* deployment-capable embedded UI tooling

---

# MAJOR BREAKTHROUGH

ForgeUI Studio now has a proven end-to-end hardware deployment pipeline:

ForgeUI Studio
->
LVGL C generation
->
export bridge
->
ForgeUI-One runtime template
->
ESP-IDF build
->
ESP32-P4 flash
->
live hardware rendering

This is now physically proven on real hardware.

The Studio is no longer only previewing UI.
It is now generating and deploying embedded runtime screens.

---

# CURRENT FEATURES

Working:

* drag/drop widget placement
* fixed ESP32-P4 viewport
* coordinate positioning
* x/y inspector editing
* w/h inspector editing
* persistent movement
* persistent resize
* viewport bounds clamp
* component selection
* wrapper-owned interaction architecture
* generated LVGL export
* one-click Studio launcher
* export bridge
* automatic firmware flash launcher
* ESP32-P4 hardware deployment

Current working widgets include:

* Badge
* Button
* Code
* Image
* Input
* Select
* Text
* Box
* Progress
* Radio

Some Chakra components still require normalization work for consistent embedded resizing behavior.

---

# CURRENT USER FLOW

1. Launch ForgeUI Studio
2. Design UI visually
3. Press P4 Export
4. Studio generates LVGL C
5. Studio launches firmware build/flash pipeline
6. ESP32-P4 updates live

This workflow is now operational.

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
embedded deployment toolchain

Long-term goals include:

* embedded widget systems
* fixed-screen page design
* industrial touchscreen workflows
* dashboard/kiosk design
* ForgeUI-native components
* LVGL export/code generation
* hardware deployment workflows
* future simulator/runtime tooling

---

# IMPORTANT ARCHITECTURE RULES

Do NOT:

* rewrite the editor engine
* embed React into firmware
* turn firmware into a web runtime
* tightly couple ESP-IDF into the editor runtime

Correct architecture split:

ForgeUI Studio owns:

* editor
* viewport
* interaction layer
* property editing
* export generation
* deployment orchestration

ForgeUI-One owns:

* ESP-IDF runtime
* BSP
* LVGL runtime lifecycle
* hardware drivers
* display/touch/audio/WiFi/SD
* runtime application shell

Generated export files are treated as:

* replaceable build artifacts
* generated runtime inserts

---

# CURRENT TECH STACK

Base Engine:

* OpenChakra

Framework:

* React
* Next.js
* Chakra UI

Editor Extensions:

* react-rnd
* ForgeUI wrapper interaction layer

Embedded Runtime:

* ESP-IDF
* LVGL v9
* ESP32-P4

Current target hardware:

* Waveshare ESP32-P4 7B

---

# CURRENT PROJECT STRUCTURE

ForgeUI-Studio/
├── openchakra/        ← Studio/editor side
├── ForgeUI-One/       ← ESP-IDF runtime target
├── tools/             ← build/flash tooling
└── START_FORGEUI_STUDIO.bat

Current important files include:

* src/forgeui/ForgeUILvglExport.ts
* openchakra/export-server.js
* tools/flash-p4.bat
* ForgeUI-One/main/90_Studio_Export.c
* ForgeUIDeviceConfig.ts
* PreviewContainer.tsx
* WithChildrenPreviewContainer.tsx

---

# CURRENT DEVELOPMENT STATUS

Current architecture is now technically credible as:

* embedded UI editor
* ESP32-P4 designer
* touchscreen HMI designer
* LVGL deployment toolchain
* future embedded visual tooling platform

This project is no longer:

* "build editor from scratch"

The project is now:

* adapting a mature editor engine into a real embedded deployment workflow

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

* embedded workflows
* coordinate-based editing
* ESP32-P4 tooling
* LVGL-oriented workflows
* embedded deployment tooling

The original MIT license and attribution remain preserved in this repository.

---

# LICENSE

ForgeUI Studio includes upstream MIT-licensed components from OpenChakra and other open-source projects.

Please see:

* LICENSE
* THIRD_PARTY_LICENSES.md

---

# CREATED BY

Scott Forster

ForgeUI Project

Contact:
[forgeui.esp32@gmail.com](mailto:forgeui.esp32@gmail.com)
