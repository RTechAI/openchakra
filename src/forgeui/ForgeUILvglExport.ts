const lv = (v: any, d: any = 0) =>
  v !== undefined && v !== null && v !== '' ? v : d

const esc = (v: string = '') =>
  String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"')

const buildLvglBlock = (
  component: IComponent,
  components: IComponents,
  parentVar: string,
  lines: string[],
  counter: { value: number }
) => {
  component.children.forEach((key: string) => {
    const child = components[key]
    if (!child) return

    counter.value++
    const varName = `obj${counter.value}`

    const x = lv(child.props.x, 0)
    const y = lv(child.props.y, 0)
    const w = lv(child.props.w, 120)
    const h = lv(child.props.h, 40)

    switch (child.type) {

      case 'Text': {
  const text = esc(
    child.props.children ||
    child.props.text ||
    child.props.value ||
    'Text'
  )

  const color = child.props.color || '#FFFFFF'
  const fontSize = lv(child.props.fontSize, 24)

  lines.push(`lv_obj_t * ${varName} = lv_label_create(${parentVar});`)
  lines.push(`lv_label_set_text(${varName}, "${text}");`)
  lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
  lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(0x${String(color).replace('#', '')}), 0);`)
  lines.push(`lv_obj_set_style_text_font(${varName}, &lv_font_montserrat_${fontSize}, 0);`)
  lines.push(``)

  break
}

      case 'Box':
        lines.push(`lv_obj_t * ${varName} = lv_obj_create(${parentVar});`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_obj_set_style_radius(${varName}, 12, 0);`)
        lines.push(`lv_obj_set_style_bg_opa(${varName}, LV_OPA_60, 0);`)
        lines.push(``)
        break

      case 'Progress':
        lines.push(`lv_obj_t * ${varName} = lv_bar_create(${parentVar});`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_bar_set_value(${varName}, ${lv(child.props.value, 65)}, LV_ANIM_OFF);`)
        lines.push(``)
        break

      case 'Radio':
        lines.push(`lv_obj_t * ${varName} = lv_checkbox_create(${parentVar});`)
        lines.push(`lv_checkbox_set_text(${varName}, "${esc(child.props.children || 'Radio')}");`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(``)
        break

      default:
        break
    }

    if (child.children?.length) {
      buildLvglBlock(
        child,
        components,
        varName,
        lines,
        counter
      )
    }
  })
}

export const generateForgeUILvglCode = (components: IComponents) => {
  const lines: string[] = []

  lines.push(`#include "90_Studio_Export.h"`)
  lines.push(`#include "lvgl.h"`)
  lines.push(``)
  lines.push(`// ForgeUI LVGL Export Proof V1`)
  lines.push(`// Generated from ForgeUI Studio`)
  lines.push(``)
  lines.push(`void fg_studio_export_create(lv_obj_t *parent)`)
  lines.push(`{`)

  const body: string[] = []

  buildLvglBlock(
    components.root,
    components,
    'parent',
    body,
    { value: 0 }
  )

  body.forEach(line => {
    lines.push(line ? `    ${line}` : ``)
  })

  lines.push(`}`)

  return lines.join('\n')
}