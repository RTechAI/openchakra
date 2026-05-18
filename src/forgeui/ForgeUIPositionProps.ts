export function forgeuiPositionProps(props: any) {
  if (props?.positionMode !== 'absolute') {
    return {}
  }

  return {
    pos: 'absolute',
    left: Number(props.x || 0),
    top: Number(props.y || 0),
    width: Number(props.w || 160),
    height: Number(props.h || 80),
  }
}