============================================================
FORGEUI STUDIO SPINE
============================================================

Project:
ForgeUI Studio

Base:
OpenChakra

Upstream License:
MIT

Original Upstream Author:
Premier Octet

Primary Goal:
Transform an existing mature visual editor into a
ForgeUI / LVGL / ESP32-P4 visual UI designer.

Status:
ALIVE

Current Stage:
P4 fixed-device viewport architecture proven.
Editor engine mapped far enough to plan embedded/HMI mode safely.

============================================================
NEW SAVE POINT
============================================================

Save point:
FORGEUI_STUDIO_SPECIAL_PREVIEW_NORMALIZATION_WAVE1__WRAPPER_ARCH_PROVEN__2026-05-21

Meaning:
ForgeUI Studio has now successfully proven the wrapper-owned special preview normalization architecture across multiple component families inside the modified OpenChakra engine.

This marks the transition from:
- isolated resize hacks

to:
- a repeatable renderer ownership model.

The architecture direction is now confirmed as viable.

Status:
MAJOR ARCHITECTURE BREAKTHROUGH / SAVE NOW

============================================================
MAJOR ARCHITECTURE TRUTH PROVEN
============================================================

Correct ownership model:

ComponentPreview
->
PreviewContainer / WithChildrenPreviewContainer
->
special preview content

PreviewContainer owns:
- resize
- resize handles
- helper border
- selection
- hover state
- geometry
- wrapper sizing
- react-rnd integration
- position persistence
- width/height persistence

Special preview files own:
- visual rendering only
- component-specific display logic only
- optional child/drop behavior only

Special preview files should NOT own:
- useInteractive()
- geometry
- positioning
- resize
- helper border
- wrapper sizing
- forgeuiPositionProps()

============================================================
MAJOR DISCOVERY
============================================================

The primary source of broken behavior was NOT:
- OpenChakra core
- Redux
- drag/drop engine
- PreviewContainer
- react-rnd

The real issue source was:

OLD SPECIAL PREVIEW BYPASS ARCHITECTURE

Symptoms identified repeatedly:
- stuck top-left
- helper border detached
- resize handle detached
- full-width stretch
- intrinsic inline collapse
- clipping
- resize ignored

Cause:
special preview files owning geometry internally instead of allowing PreviewContainer to own it.

============================================================
CURRENT KNOWN-GOOD NORMALIZED COMPONENTS
============================================================

Confirmed working:
- Button
- CloseButton
- IconButton
- Icon
- Link
- Alert
- AspectRatio
- AvatarGroup
- Badge
- Box
- Center
- Container
- FormControl (raw component)
- Avatar (acceptable baseline)
- Select (acceptable baseline)
- Kbd
- Radio
- Switch
- multiple intrinsic Chakra controls now normalized successfully

Additional proven architecture truth:
Many Chakra primitives previously treated as "simple components"
were actually intrinsic inline renderers that bypassed proper
wrapper-owned geometry behavior.

The correct normalization pattern is now proven:

- remove component from raw/simple bucket
- move component into explicit normalized case
- wrap using PreviewContainer
- force width/height ownership at wrapper layer
- force full-size render behavior in preview layer
- render children explicitly when required

This pattern is now considered:
SAFE / REPEATABLE / PROVEN

============================================================
CURRENT DEFERRED COMPOUND/PRESET CLEANUP BUCKET
============================================================

Intentionally deferred:
- Breadcrumb preset
- Accordion preset family
- Tabs preset family
- FormControl preset
- Highlight
- Alert child helpers
- AvatarBadge
- FormHelperText
- FormErrorMessage

Important:
Many of these are:
- compound-slot components
- child-only helpers
- intrinsic inline controls
- preset composition layouts

These are NOT core architecture failures anymore.

============================================================
IMPORTANT CLASSIFICATION DISCOVERY
============================================================

ForgeUI Studio components now clearly separate into categories:

------------------------------------------------------------
CATEGORY 1 — Stable Wrapper Components
------------------------------------------------------------

Examples:
- Button
- Badge
- Box
- Center
- Container

These already behave correctly using:
- PreviewContainer
- WithChildrenPreviewContainer

------------------------------------------------------------
CATEGORY 2 — Old Special Preview Bypass Components
------------------------------------------------------------

Examples:
- Alert
- AspectRatio
- Icon
- AvatarGroup
- Link

These required normalization.

Pattern now proven:
- wrap in PreviewContainer
- remove useInteractive from preview
- remove internal geometry ownership
- force width/height 100%
- content-only preview rendering

------------------------------------------------------------
CATEGORY 3 — Tiny Inline Visual Components
------------------------------------------------------------

Examples:
- Checkbox
- FormLabel
- Spinner
- CircularProgress

These are visually small relative to wrapper size.

This is now considered:
- visual scaling behavior

NOT:
- architecture failure

------------------------------------------------------------
CATEGORY 4 — Compound/Preset Layout Systems
------------------------------------------------------------

Examples:
- Breadcrumb
- Accordion
- Tabs
- FormControl preset

These are multi-component layout systems and will need a later dedicated preset/layout architecture pass.

============================================================
CURRENT ACTIVE ARCHITECTURE
============================================================

ComponentPreview
->
PreviewContainer / WithChildrenPreviewContainer
->
special preview renderer

NOT:

special preview
->
own geometry
->
own resize
->
own wrapper

============================================================
CURRENT IMPORTANT RUNTIME FILES
============================================================

Core geometry owner:
- PreviewContainer.tsx

Owns:
- react-rnd
- geometry
- resize persistence
- helper border
- wrapper sizing

Complex child wrapper:
- WithChildrenPreviewContainer.tsx

Owns:
- child-capable layouts
- nested drop regions

Renderer router:
- ComponentPreview.tsx

Now becoming:
- renderer ownership switchboard
- normalization routing layer

============================================================
CURRENT STABLE ABSOLUTE POSITIONING TRUTH
============================================================

Absolute positioning system remains alive and proven.

Current runtime path:
- x/y/w/h props alive
- react-rnd alive
- inspector updates alive
- wrapper persistence alive

Current architecture remains:
- embedded coordinate-based workflow
- fixed-device viewport workflow

============================================================
NEW SAVE POINT
============================================================

Save point:
FORGEUI_STUDIO_ASSET_REGISTRY_V1__IMAGE_PIPELINE_OK__LAPTOP_VIEWPORT_FIX__2026-05-22

Meaning:
ForgeUI Studio has now proven the first real asset-aware preview pipeline inside the modified OpenChakra engine.

This save point marks the transition from:
- placeholder Image widget
- manual URL testing only
- raw custom prop testing
- oversized laptop workflow issues

toward:
- real image preview rendering
- registry-driven asset selection
- inspector-controlled visual behavior
- curated ForgeUI asset pipeline
- laptop-usable editor viewport

Status:
MAJOR ASSET PIPELINE BREAKTHROUGH / SAVE NOW

============================================================
CONFIRMED WORKING
============================================================

Image Preview V1:
- Image widget drops onto canvas
- real image renders from URL
- image moves correctly
- image resizes correctly
- resize handle stays attached
- PreviewContainer ownership remains stable
- no detached helper border
- fallback SVG image works
- source URL field works
- preset image dropdown works
- objectFit dropdown works

Object fit modes proven:
- contain
- cover
- fill

Behavior confirmed:
- contain preserves full image and may show bars
- cover fills widget area and crops overflow
- fill stretches image to widget shape

============================================================
FILES ADDED / UPDATED
============================================================

Added:
- src/components/editor/previews/ImagePreview.tsx
- src/forgeui/ForgeUIAssetRegistry.ts
- src/forgeui/ForgeUIIconRegistry.ts

Updated:
- src/components/editor/ComponentPreview.tsx
- src/components/inspector/panels/components/ImagePanel.tsx
- src/components/inspector/panels/components/IconPanel.tsx
- src/components/editor/Editor.tsx

============================================================
IMAGE PREVIEW ARCHITECTURE
============================================================

ComponentPreview now routes:

Image
->
PreviewContainer
->
ImagePreview

ImagePreview owns:
- visual image rendering only
- fallback SVG image
- objectFit behavior
- pointer-safe / drag-safe image display

PreviewContainer still owns:
- geometry
- resize
- selection
- helper border
- drag/move
- width/height persistence

Important rule confirmed:
ImagePreview must NOT own geometry or useInteractive.

============================================================
IMAGE PANEL UPDATE
============================================================

ImagePanel now includes:
- Source
- Preset image
- Fallback Src
- Alt
- Object fit
- Html height
- Html width

Preset image dropdown is driven by:

src/forgeui/ForgeUIAssetRegistry.ts

This proves:
- ForgeUI-owned asset registry
- inspector-driven asset selection
- registry -> inspector -> component props -> preview renderer path

============================================================
ASSET REGISTRY V1
============================================================

ForgeUIAssetRegistry.ts now owns stable image presets.

Current purpose:
- simple hardcoded preset image list
- no upload system yet
- no local filesystem asset browser yet
- no thumbnail browser yet

This is intentionally simple V1.

Current registry role:
- prove curated ForgeUI asset path
- avoid random manual URL testing
- establish pattern for future icons/themes/assets

============================================================
ICON REGISTRY V1
============================================================

ForgeUIIconRegistry.ts added as first ForgeUI-owned icon registry seed.

IconPanel updated to include a Preset icon field above the existing IconControl.

Current purpose:
- prove icon registry pattern
- prepare future icon picker
- prepare future LVGL symbol/icon mapping
- keep existing OpenChakra IconControl alive

Icon registry is started but still needs deeper live testing/polish in the next pass.

============================================================
LAPTOP VIEWPORT FIX
============================================================

Editor viewport usability improved for laptop screens.

Issue:
- bottom horizontal browser/editor scrollbar made it hard to see left sidebar, canvas, and right inspector at the same time.

Fix:
- reduced outer Playground padding in Editor.tsx

Result:
- left sidebar, canvas, and inspector now fit better on laptop
- less need to drag bottom scrollbar left/right
- device viewport remains intact
- image pipeline still works after layout change

Do NOT shrink the active device size unless needed later.
The first fix should remain editor padding/layout, not fake hardware resolution.

============================================================
CURRENT ARCHITECTURE TRUTH
============================================================

ForgeUI Studio now has a proven reusable pattern:

ForgeUI registry
->
Inspector control
->
component props
->
normalized preview renderer
->
PreviewContainer geometry wrapper

This pattern is now proven with:
- Image assets
- objectFit visual behavior
- early Icon registry wiring

This is a major step toward:
- asset-aware UI design
- theme packs
- icon packs
- LVGL image mapping
- embedded HMI screen composition

============================================================
DO NOT REGRESS
============================================================

Do NOT:
- return Image to raw Chakra passthrough
- remove PreviewContainer ownership
- put useInteractive inside ImagePreview
- rely only on Custom Props for common ForgeUI controls
- overbuild upload/browser features yet
- start LVGL export before registry/preview contracts are stable

Do:
- keep ForgeUI-owned registries under src/forgeui/
- keep inspector controls simple
- keep preview files visual-only
- prove each pipeline one step at a time
- maintain frequent save points

============================================================
NEXT RECOMMENDED STEP
============================================================

Next mission:
ICON REGISTRY V1 LIVE TEST + POLISH

Goal:
- drop/select Icon widget
- verify Preset icon field appears
- select registry icons
- confirm icon changes live
- confirm size/color controls still work
- decide if IconPreview needs normalization polish

After that:
- ForgeUI component palette V1
- Asset browser / thumbnail picker V1
- LVGL export mapping investigation

============================================================
HANDOVER NOTE FOR NEXT CHAT
============================================================

Continue from:

FORGEUI_STUDIO_ASSET_REGISTRY_V1__IMAGE_PIPELINE_OK__LAPTOP_VIEWPORT_FIX__2026-05-22

Current known-good state:
- ForgeUI Studio running at localhost:3000
- Image widget renders real URLs
- Image resize/move works
- objectFit dropdown works
- preset image dropdown works
- ForgeUIAssetRegistry.ts is alive
- ForgeUIIconRegistry.ts has been started
- IconPanel has been wired with Preset icon field
- laptop viewport usability improved by reducing editor padding

Immediate next task:
Test Icon Registry V1 live in the UI.

Start by:
1. Drag Icon widget onto canvas.
2. Select Icon widget.
3. Confirm Preset icon appears in inspector.
4. Try registry values.
5. Confirm icon changes live.
6. Check size/color still work.
7. If broken, inspect IconPreview/IconControl path before adding more features.

============================================================
END SAVE UPDATE
============================================================

============================================================
POSITION LAYER INVESTIGATION UPDATE
============================================================

Confirmed files inspected:

- WithChildrenPreviewContainer.tsx
- PreviewContainer.tsx
- utils/defaultProps.ts
- NumberControl.tsx
- NumberInputPanel.tsx
- Panels.tsx

Important confirmed architecture:

OpenChakra already has a clean enough path for ForgeUI embedded positioning.

The safest positioning layer is NOT inside individual component panels.

Do NOT add X/Y/W/H controls separately into ButtonPanel, BoxPanel, TextPanel, etc.

Correct architecture:
Create one shared ForgeUI layout/position inspector panel and mount it globally in Panels.tsx.

Recommended future file:

src/forgeui/ForgeUILayoutPanel.tsx

or:

src/components/inspector/panels/forgeui/ForgeUILayoutPanel.tsx

Purpose:
A global embedded layout panel for selected components.

Initial controls:
- positionMode
- x
- y
- w
- h

Recommended first props:
positionMode: "flow" | "absolute"
x: number
y: number
w: number
h: number

NumberControl is already reusable and can be used for:
- X
- Y
- Width
- Height

Panels.tsx is the correct mount point.

Future pattern:

<>
  <ForgeUILayoutPanel />

  {type === 'Button' && <ButtonPanel />}
  {type === 'Box' && <BoxPanel />}
  ...
</>

Reason:
Positioning is editor/runtime layout metadata.
It is not component-specific behavior.

Preview architecture finding:

There are two preview wrappers:

1.
WithChildrenPreviewContainer.tsx

Used for child-capable components.
It is also a drop target.
It currently forces:

pos: 'relative'

This must not be deleted blindly.

Future absolute mode should override this only when:

positionMode === "absolute"

2.
PreviewContainer.tsx

Used for simple components.
It currently passes props directly into React.createElement.

Both wrappers will need the same ForgeUI positioning behavior later.

Correct future helper:

src/forgeui/ForgeUIPositionProps.ts

Purpose:
Convert ForgeUI embedded layout props into safe Chakra preview props.

Future shape:

export function forgeuiPositionProps(props: any) {
  if (props?.positionMode !== "absolute") {
    return {}
  }

  return {
    pos: "absolute",
    left: Number(props.x || 0),
    top: Number(props.y || 0),
    width: Number(props.w || 160),
    height: Number(props.h || 80),
  }
}

Important:
Do not duplicate position logic in both preview containers.

Use one shared helper later.

DEFAULT_PROPS finding:

utils/defaultProps.ts is the component birth/default prop layer.

It is a safe future place to add default ForgeUI positioning props for ForgeUI-native widgets.

Example future ForgeUI-native defaults:

FGTile: {
  positionMode: "absolute",
  x: 40,
  y: 40,
  w: 240,
  h: 120
}

Do not add embedded defaults globally to every existing Chakra component yet.

First implementation rule:
Manual inspector positioning first.

Do NOT do yet:
- coordinate drag/drop
- grid snapping
- bounds clamp
- LVGL export
- Redux/state rewrite
- rewriting useDropComponent
- changing current tree model

Correct sequence:
1. Add ForgeUILayoutPanel.
2. Mount it globally in Panels.tsx.
3. Add position props manually through inspector.
4. Add shared ForgeUIPositionProps helper.
5. Apply helper to PreviewContainer and WithChildrenPreviewContainer.
6. Only after manual absolute positioning works, add drop coordinate capture.
7. Only after positioning is stable, add LVGL export mapping.

Current conclusion:
ForgeUI Studio can add embedded/HMI positioning as a bolt-on layer beside the existing OpenChakra flow layout engine.

This keeps current Chakra drag/drop alive while opening the path toward LVGL-style fixed-screen design.
============================================================

============================================================
PROJECT LOCATION
============================================================

Current project path:

C:\ForgeUI\Projects\ForgeUI-Studio\openchakra

============================================================
DEV SERVER
============================================================

Run using:

npm run dev

Then open:

http://localhost:3000

============================================================
IMPORTANT INSTALL NOTE
============================================================

Install required:

npm install --legacy-peer-deps

Normal npm install produced dependency conflicts.

Current workaround is acceptable.

============================================================
PROJECT DIRECTION
============================================================

ForgeUI Studio is NOT intended to become another generic web-page builder.

The intended direction is:

ForgeUI Studio
->
ESP32-P4 UI designer
->
LVGL layout designer
->
future LVGL export/code generation system

The editor should eventually allow:

- drag/drop embedded widgets
- fixed-screen HMI layout design
- LVGL-style screen/page design
- ForgeUI component design
- device viewport presets
- screen/page management
- export toward embedded targets

Primary hardware focus:

ESP32-P4
LVGL
Waveshare ESP32-P4 boards

Current active board target:

Waveshare ESP32-P4 7B 1024x600

Critical design rule:
Do NOT drift back into generic website-builder thinking.

ForgeUI Studio should behave more like:

- LVGL designer
- embedded HMI editor
- kiosk/dashboard editor
- industrial touchscreen designer

NOT:
- normal website builder
- responsive web-page editor
- mobile/desktop breakpoint builder

============================================================
IMPORTANT PROJECT TRUTH
============================================================

The project is NO LONGER:

"build editor from scratch"

The project IS NOW:

adapt a mature existing editor engine

This dramatically reduces complexity and risk.

OpenChakra already provides:

- drag/drop
- selection
- hover state
- inspector panel
- component previews
- component tree/state model
- undo/redo hooks
- code export pipeline
- layout system
- React rendering system
- Redux/Rematch state management
- split code panel
- persistence/local storage direction

ForgeUI Studio should build ON TOP of this,
not rewrite the engine.

============================================================
LICENSE / IP STATUS
============================================================

Base project:
OpenChakra

Original author:
Premier Octet

License:
MIT

This allows:

- use
- modification
- commercialization
- redistribution
- forking
- rebranding

Requirement:
Original MIT copyright/license notice must remain.

Do NOT:

- remove upstream MIT license
- pretend original engine was authored from scratch
- hide upstream attribution

Future recommendation:

- keep original LICENSE
- add THIRD_PARTY_LICENSES.md
- clearly separate ForgeUI-owned logic from upstream code
- keep ForgeUI-specific additions mostly under src/forgeui/
- document modified upstream areas

============================================================
FORGEUI-SPECIFIC WORK COMPLETED
============================================================

------------------------------------------------------------
1. Branding pass
------------------------------------------------------------

Header now shows:

ForgeUI Studio

Browser title partially updated.

Engine left untouched.

------------------------------------------------------------
2. ForgeUI workbench theme
------------------------------------------------------------

Editor.tsx updated with:

- dark navy workbench
- cyan grid lines
- embedded UI designer feel
- centered device screen
- isolated viewport frame

This replaced the default light OpenChakra canvas look.

------------------------------------------------------------
3. Device abstraction layer
------------------------------------------------------------

New file created:

src/forgeui/ForgeUIDeviceConfig.ts

Purpose:
Single source of truth for device targets.

Current active device:

Waveshare ESP32-P4 7B 1024x600

Important rule:
NO hardcoded device sizes throughout the engine.

ALL viewport sizing should come from:

FORGEUI_ACTIVE_DEVICE

------------------------------------------------------------
4. Device config expanded
------------------------------------------------------------

Device config should include:

- id
- name
- width
- height
- gridSize

Current intended config direction:

export type ForgeUIDeviceTarget = {
  id: string
  name: string
  width: number
  height: number
  gridSize: number
}

Current active device ID:

waveshare-p4-7b-1024x600

Also keep a generic fallback target such as:

generic-800x600

------------------------------------------------------------
5. P4 viewport implemented
------------------------------------------------------------

Editor.tsx now renders:

outer workbench
->
centered device frame
->
active root drop target
->
rendered components

Current viewport:

1024x600
centered
rounded
subtle glow/shadow
embedded-dashboard aesthetic

Important architecture truth:

Correct structure is:

outer workbench
->
inner device viewport
->
drop target + rendered components

NOT:

infinite fullscreen canvas.

------------------------------------------------------------
6. Grid now follows device config
------------------------------------------------------------

Editor grid now uses:

FORGEUI_ACTIVE_DEVICE.gridSize

via:

const GRID_SIZE = FORGEUI_ACTIVE_DEVICE.gridSize

and:

backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`

This avoids hardcoding 20px grid values inside the editor.

------------------------------------------------------------
7. Viewport sizing lock added
------------------------------------------------------------

Inner device Box should apply deviceProps before the locked dimensions.

Correct order:

{...deviceProps}
ref={drop}
width={FORGEUI_ACTIVE_DEVICE.width}
height={FORGEUI_ACTIVE_DEVICE.height}
minWidth={FORGEUI_ACTIVE_DEVICE.width}
minHeight={FORGEUI_ACTIVE_DEVICE.height}
maxWidth={FORGEUI_ACTIVE_DEVICE.width}
maxHeight={FORGEUI_ACTIVE_DEVICE.height}

Reason:
components.root.props must NOT be allowed to accidentally override the active hardware viewport size.

============================================================
CURRENT ACTIVE DEVICE CONFIG
============================================================

Current config file:

src/forgeui/ForgeUIDeviceConfig.ts

Current intended structure:

export type ForgeUIDeviceTarget = {
  id: string
  name: string
  width: number
  height: number
  gridSize: number
}

Current intended active target:

id:
waveshare-p4-7b-1024x600

name:
Waveshare ESP32-P4 7B 1024x600

width:
1024

height:
600

gridSize:
20

Future expansion planned:

- 800x480
- 800x600
- 1024x600
- portrait targets
- square screens
- future ESP32-S3 targets
- future ESP32-P4 targets
- simulator/browser targets

Future device profile fields may include:

- rotation
- safeArea
- lvgl.hor_res
- lvgl.ver_res
- lvgl color depth
- previewScale
- exportProfile

============================================================
CURRENT ARCHITECTURE DISCOVERIES
============================================================

The project architecture is cleaner than expected.

Important runtime ownership:

src/components/editor/Editor.tsx
owns:
- workbench
- canvas/playground
- device viewport
- root drop target placement

src/forgeui/ForgeUIDeviceConfig.ts
owns:
- hardware target truth
- viewport size truth
- grid size truth
- future export target truth

src/components/editor/ComponentPreview.tsx
owns:
- component preview routing
- type switch
- render dispatcher

src/components/editor/PreviewContainer.tsx
owns:
- simple component preview wrapper
- useInteractive connection

src/components/editor/WithChildrenPreviewContainer.tsx
likely owns:
- child-capable component preview wrapper
- nested drop behavior
- visual helper behavior

src/components/editor/previews/
owns:
- specific complex widget previews

src/hooks/useInteractive.ts
owns:
- selection
- hover
- double-click text edit trigger
- drag source
- visual helper borders/shadows

src/hooks/useDropComponent.ts
owns:
- drop target logic
- add component
- move component
- add meta component

src/hooks/useForm.ts
owns:
- inspector/property update pipe

src/core/models/components.ts
owns:
- editor component state
- addComponent
- moveComponent
- updateProps
- deleteProps
- select
- hover
- duplicate
- delete

src/core/models/composer/composer.ts
owns:
- composer node creation helper
- generated component IDs
- default props injection

src/components/inspector/controls/NumberControl.tsx
owns:
- reusable numeric prop editor

src/components/inspector/CustomPropsPanel.tsx
owns:
- manual custom prop entry/edit/delete

============================================================
CURRENT ENGINE TRUTH
============================================================

Current editor state model is tree/layout based.

State shape is effectively:

component:
- id
- type
- parent
- children[]
- props
- rootParentType

This means OpenChakra is currently:

React/Chakra layout composer

NOT YET:

absolute-position embedded HMI designer

This is acceptable for now.

Reason:
The state system is props-driven and clean enough to extend.

============================================================
CRITICAL ARCHITECTURE FINDING
============================================================

The editor already stores component settings in:

component.props

The inspector writes through:

Inspector Control
->
useForm()
->
dispatch.components.updateProps()
->
component.props[name] = value

This means future embedded layout properties can be added without rewriting the state engine.

Future props can include:

x
y
w
h
positionMode

Example:

props: {
  x: 120,
  y: 60,
  w: 300,
  h: 120,
  positionMode: "absolute"
}

This is a major win.

============================================================
COMPONENT PREVIEW ARCHITECTURE
============================================================

ComponentPreview.tsx uses a type switch.

This is a major ForgeUI opportunity.

Current pattern:

switch (type)

Current Chakra routing:

type={Chakra[type]}

This means current runtime preview is React/Chakra based.

Future ForgeUI-native components can be added cleanly as new cases.

Future examples:

FGButton
FGTile
FGLabel
FGGauge
FGStatusTile
FGTopBar
FGSidebar
FGTelemetryCard
FGMapCard
FGPreOpCard
FGGpsRibbon

Critical rule:
Chakra should eventually become preview/runtime convenience only.

Long-term architecture should separate:

ForgeUI Component Definition
->
Editor State
->
Preview Renderer
->
Export Renderer

============================================================
RENDERER SPLIT RULE
============================================================

Current:

Editor State
->
React/Chakra Preview

Future:

Editor State
->
ForgeUI Component Definition
->
React/Chakra Preview Renderer
->
LVGL C Export Renderer

Important:
Do NOT let Chakra-specific assumptions pollute the future LVGL export model.

============================================================
DRAG/DROP DISCOVERY
============================================================

Current drag/drop model:

useInteractive:
- makes components draggable
- item includes id, type, isMoved

useDropComponent:
- accepts drops
- if moved: moveComponent(parentId, componentId)
- if meta: addMetaComponent(...)
- else: addComponent(parentName, type, rootParentType)

Current drop model does NOT yet store:

- x position
- y position
- width
- height
- device coordinates

It only adds or moves components inside a parent tree.

This means:
ForgeUI Studio is not yet coordinate-based.

Do not panic.
Do not rewrite it yet.

Correct next direction:
add optional embedded/HMI coordinate mode later.

============================================================
INSPECTOR DISCOVERY
============================================================

useForm.ts confirms all inspector controls write to selected component props.

NumberControl.tsx confirms a reusable numeric editor already exists.

This means future ForgeUI Studio can add a Position/Layout panel using existing controls.

Future PositionPanel idea:

NumberControl name="x" label="X"
NumberControl name="y" label="Y"
NumberControl name="w" label="Width"
NumberControl name="h" label="Height"

This is likely the safest path to add embedded layout editing.

============================================================
IMPORTANT STRATEGIC DECISION
============================================================

ForgeUI Studio has two possible futures:

OPTION A:
Layout Builder

- Chakra/Flex/Grid driven
- responsive-ish
- easier
- more React-like
- less LVGL accurate

OPTION B:
Embedded HMI Designer

- fixed screen
- x/y coordinates
- draggable widgets
- real screen bounds
- closer to LVGL
- closer to industrial HMI tools
- better for ESP32-P4

Decision:
OPTION B is the correct long-term direction.

But:
Do NOT rewrite the engine now.

Correct path:
Add optional embedded positioning mode beside the current layout model.

============================================================
PHASED DEVELOPMENT PLAN
============================================================

------------------------------------------------------------
PHASE 1 — Stabilize current editor shell
------------------------------------------------------------

Keep current architecture alive.

Current goals:
- stable ForgeUI branding
- fixed device viewport
- device config
- grid from config
- root viewport lock
- no broken drag/drop
- no broken inspector

Status:
Mostly achieved.

------------------------------------------------------------
PHASE 2 — Map remaining engine
------------------------------------------------------------

Still inspect:

WithChildrenPreviewContainer.tsx
property panel wrapper
sidebar component list / registry
export/code generation path
template system
undo/local persistence path

Do not modify heavily yet.

------------------------------------------------------------
PHASE 3 — Add ForgeUI embedded layout props
------------------------------------------------------------

Add optional props:

x
y
w
h
positionMode

Do this safely through props, not by rewriting state.

Possible new file:

src/components/inspector/panels/ForgeUILayoutPanel.tsx

or:

src/forgeui/ForgeUILayoutPanel.tsx

------------------------------------------------------------
PHASE 4 — Add embedded preview wrapper
------------------------------------------------------------

Preview wrappers should eventually support:

positionMode === "absolute"

by rendering:

position: absolute
left: x
top: y
width: w
height: h

inside the fixed viewport.

Flow layout can still exist for legacy Chakra mode.

------------------------------------------------------------
PHASE 5 — Add proper drop coordinates
------------------------------------------------------------

useDropComponent can later read monitor offsets and convert to viewport-local x/y.

Needed later:
- root viewport ref
- client offset
- viewport bounding rect
- grid snap
- bounds clamp

Do NOT do this until Phase 3/4 are stable.

------------------------------------------------------------
PHASE 6 — Add ForgeUI-native widgets
------------------------------------------------------------

Create ForgeUI components such as:

FGTile
FGButton
FGLabel
FGGauge
FGStatusCard
FGTelemetryCard

Add to:
- sidebar registry
- ComponentPreview switch
- default props
- future LVGL export map

------------------------------------------------------------
PHASE 7 — Add LVGL export path
------------------------------------------------------------

Long-term export output examples:

lv_obj_t * tile = lv_obj_create(parent);
lv_obj_set_pos(tile, 120, 60);
lv_obj_set_size(tile, 300, 120);
lv_obj_set_style_bg_color(tile, lv_color_hex(0x101826), 0);

Do NOT attempt export rewrite yet.

============================================================
CURRENT NEXT STEPS
============================================================

Immediate next files to inspect:

1.
WithChildrenPreviewContainer.tsx

Reason:
Likely owns nested drop target behavior and child rendering.

2.
Main inspector/property panel wrapper

Reason:
Need to know where to insert future ForgeUI layout panel.

3.
Sidebar/component registry

Reason:
Need to know where ForgeUI components will appear.

4.
Export/code generation path

Reason:
Need to understand future LVGL export insertion point.

5.
templates/default props

Reason:
Need to understand where default component props are born.

============================================================
CURRENT DEVELOPMENT RULES
============================================================

Do NOT rewrite the editor engine.

Do NOT hardcode device sizes everywhere.

Do NOT randomly modify Redux/state internals.

Do NOT start LVGL export yet.

Do NOT start absolute drag/drop yet.

Do NOT break existing Chakra drag/drop while exploring.

Build ForgeUI-specific logic in:

src/forgeui/

Where upstream files must be modified:
- keep changes small
- document them
- avoid hiding original attribution

Keep:
- upstream engine
- ForgeUI layer
- future export layer

cleanly separated.

Small safe changes only.

No giant uncontrolled rewrites.

Maintain stable revert points frequently.

============================================================
CURRENT ASSESSMENT
============================================================

This is the first ForgeUI Studio direction that appears:

- technically viable
- scalable
- maintainable
- realistic
- not insane to build alone
- not a blank-page editor nightmare

The current direction is GOOD.

The project now has a credible path:

OpenChakra engine
->
ForgeUI fixed viewport workbench
->
ForgeUI component set
->
embedded coordinate mode
->
LVGL export generator

============================================================
END OF SPINE
============================================================