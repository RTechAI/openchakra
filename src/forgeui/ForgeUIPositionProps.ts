export function forgeuiPositionProps(props: any) {
  const mode = props?.positionMode || 'flow'

  if (mode !== 'absolute') {
    return {}
  }

  const x = Number(props.x ?? 40)
  const y = Number(props.y ?? 40)
  const w = Number(props.w ?? 240)
  const h = Number(props.h ?? 120)

  return {
    pos: 'absolute',
    left: Number.isFinite(x) ? x : 40,
    top: Number.isFinite(y) ? y : 40,
    width: Number.isFinite(w) ? w : 240,
    height: Number.isFinite(h) ? h : 120,
    zIndex: 1,
  }
}