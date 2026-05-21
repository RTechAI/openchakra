import React, { FunctionComponent, ComponentClass } from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { Box } from '@chakra-ui/react'
import { Rnd } from 'react-rnd'
import { forgeuiPositionProps } from '~forgeui/ForgeUIPositionProps'
import useDispatch from '~hooks/useDispatch'

const PreviewContainer: React.FC<{
  component: IComponent
  type?: string | FunctionComponent<any> | ComponentClass<any, any>
  children?: React.ReactNode
  enableVisualHelper?: boolean
  isBoxWrapped?: boolean
}> = ({
  component,
  type,
  children: customChildren,
  enableVisualHelper,
  isBoxWrapped,
  ...forwardedProps
}) => {
  const { props, ref } = useInteractive(component, enableVisualHelper)
  const dispatch = useDispatch()

  const childProps =
    props.positionMode === 'absolute'
      ? {
          ...props,
          ...forwardedProps,
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
        }
      : {
          ...props,
          ...forwardedProps,
          ...forgeuiPositionProps(props),
        }

  const children = customChildren ? (
  <Box
    width="100%"
    height="100%"
    display="flex"
    alignItems="stretch"
    justifyContent="stretch"
  >
    {customChildren}
  </Box>
) : type ? (
  React.createElement(type, childProps)
) : null

  if (props.positionMode === 'absolute') {
    return (
      <Rnd
        size={{
          width: Number(props.w ?? 240),
          height: Number(props.h ?? 120),
        }}
        position={{
          x: Number(props.x ?? 40),
          y: Number(props.y ?? 40),
        }}
        bounds="parent"
        disableDragging={true}
        enableResizing={true}
        resizeHandleStyles={{
  bottomRight: {
    width: '18px',
    height: '18px',
    right: '-9px',
    bottom: '-9px',
    background: '#38bdf8',
    border: '2px solid #ffffff',
    boxShadow: '0 0 0 1px #0f172a, 0 0 8px #38bdf8',
    borderRadius: '4px',
    boxSizing: 'border-box',
    zIndex: 99999,
  },
}}
        style={{
        border: enableVisualHelper ? '2px solid #67e8f9' : 'none',
        boxSizing: 'border-box',
}}
        onResizeStop={(_, __, element, ___, position) => {
          dispatch.components.updateProps({
            id: component.id,
            name: 'w',
            value: parseInt(element.style.width, 10),
          })

          dispatch.components.updateProps({
            id: component.id,
            name: 'h',
            value: parseInt(element.style.height, 10),
          })

          dispatch.components.updateProps({
            id: component.id,
            name: 'x',
            value: position.x,
          })

          dispatch.components.updateProps({
            id: component.id,
            name: 'y',
            value: position.y,
          })
        }}
      >
        <Box
          ref={ref}
          position="relative"
          width="100%"
          height="100%"
          overflow="visible"
        >
          {children}
        </Box>
      </Rnd>
    )
  }

     return (
    <Box
      ref={ref}
      position="relative"
      width="100%"
      height="100%"
      overflow="visible"
    >
      {children}
    </Box>
  )
}

export default PreviewContainer