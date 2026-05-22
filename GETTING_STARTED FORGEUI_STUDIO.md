# ForgeUI Studio — GETTING STARTED.

============================================================
FORGEUI STUDIO
============================================================

ForgeUI Studio is an embedded UI and HMI designer focused on:
- ESP32-P4
- LVGL workflows
- embedded touchscreen UI design
- coordinate-based screen editing
- future LVGL export tooling

Current hardware target:
- Waveshare ESP32-P4-WIFI6-Touch-LCD-7B

Current viewport:
- 1024x600

Current project status:
ALIVE
ACTIVE DEVELOPMENT

ForgeUI Studio is evolving from:
- responsive web builder

toward:
- embedded HMI editor
- LVGL visual editor
- ESP32-P4 UI workflow platform

============================================================
IMPORTANT CURRENT TRUTH
============================================================

ForgeUI Studio is NOT yet a standalone firmware generator.

Current workflow is:

ForgeUI Studio
    ->
ForgeUI-One
    ->
ESP32-P4 Hardware

ForgeUI-One currently acts as:
- runtime shell
- LVGL execution environment
- ESP32-P4 firmware target
- hardware bridge

============================================================
WHAT YOU NEED INSTALLED
============================================================

Required:
- Windows PC
- Node.js
- Git (recommended)

Recommended:
- Visual Studio Code
- ESP-IDF
- ESP32-P4 hardware

============================================================
1. INSTALL NODE.JS
============================================================

ForgeUI Studio requires Node.js.

Download:
https://nodejs.org/

Recommended version:
- Node 20 LTS or newer

Install Node.js normally.

IMPORTANT:
After installation:
- reboot PC
OR
- restart terminal/command prompt

============================================================
2. INSTALL GIT (RECOMMENDED)
============================================================

Download:
https://git-scm.com/

Git is recommended for:
- cloning the repo
- updating Studio
- commits
- version control

============================================================
3. DOWNLOAD FORGEUI STUDIO
============================================================

OPTION A — GIT CLONE

Open terminal or command prompt:

```bash
git clone https://github.com/RTechAI/ForgeUI-Studio.git

OPTION B — DOWNLOAD ZIP

Download ZIP from GitHub:

extract folder somewhere safe

Recommended location:

C:\ForgeUI\

Example:

C:\ForgeUI\ForgeUI-Studio
============================================================
4. OPEN THE PROJECT

Open the ForgeUI Studio folder in:

Visual Studio Code
OR
normal Windows Explorer
============================================================
5. INSTALL PROJECT DEPENDENCIES

FIRST RUN ONLY.

Open terminal inside ForgeUI Studio folder.

Run:

npm install

OR:

double-click:

INSTALL_DEPENDENCIES.bat

This may take several minutes.

This installs:

React packages
Vite
Chakra UI
editor dependencies
OpenChakra dependencies
ForgeUI modifications
============================================================
6. START FORGEUI STUDIO

Inside ForgeUI Studio folder:

Run:

npm run dev

OR:

double-click:

START_FORGEUI_STUDIO.bat
============================================================
7. OPEN THE STUDIO

ForgeUI Studio should open automatically.

If not:

open browser:

http://localhost:3000
============================================================
IMPORTANT

DO NOT:

close the terminal window
close the dev server window

The Studio runs from the local development server.

============================================================
RECOMMENDED FOLDER LAYOUT

Recommended structure:

C:\ForgeUI\
│
├── ForgeUI-Studio
│
├── ForgeUI-One
│
├── Projects
│
├── Exports
│
└── Backups
============================================================
FORGEUI-ONE

ForgeUI-One is currently used as:

hardware runtime target
LVGL runtime shell
ESP32-P4 execution environment

Current export proof flow:

ForgeUI Studio
->
export/generated code
->
ForgeUI-One
->
ESP32-P4 hardware

============================================================
ESP-IDF (OPTIONAL CURRENTLY)

ESP-IDF is currently recommended for:

ESP32-P4 firmware work
hardware flashing
LVGL runtime development

Download:
https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/

============================================================
CURRENT KNOWN-WORKING FEATURES

Working:

embedded viewport
fixed P4 screen sizing
drag/drop components
coordinate positioning
absolute positioning
persistent x/y placement
persistent resize
resize handles
wrapper-owned interaction layer
multiple Chakra component previews
embedded workbench architecture
ForgeUI-One popup export proof
============================================================
KNOWN LIMITATIONS

Current limitations:

active development
not yet packaged as standalone EXE
requires Node.js
local dev environment required
export pipeline still evolving
direct LVGL generation not complete
direct device flashing not complete
============================================================
FUTURE DIRECTION

Planned future goals:

LVGL code generation
direct firmware export
direct ESP32-P4 flashing
standalone desktop app
visual asset manager
screen/page manager
reusable widget library
live hardware preview
project packaging
============================================================
CREATED BY

ForgeUI Studio
Created by Scott Forster

Project:
https://github.com/RTechAI/ForgeUI-Studio