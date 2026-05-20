import React, { FunctionComponent, ComponentClass } from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { Box } from '@chakra-ui/react'
import { Rnd } from 'react-rnd'
import { forgeuiPositionProps } from '~forgeui/ForgeUIPositionProps'
import { useForm } from '~hooks/useForm'

const PreviewContainer: React.FC<{
  component: IComponent
  type: string | FunctionComponent<any> | ComponentClass<any, any>
  enableVisualHelper?: boolean
  isBoxWrapped?: boolean
}> = ({
  component,
  type,
  enableVisualHelper,
  isBoxWrapped,
  ...forwardedProps
}) => {
  const { props, ref } = useInteractive(component, enableVisualHelper)
  const { setValue } = useForm()

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

  const children = React.createElement(type, childProps)

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
            width: '14px',
            height: '14px',
            right: '0px',
            bottom: '0px',
            background: '#38bdf8',
            zIndex: 9999,
          },
        }}
        style={{
          border: enableVisualHelper ? '1px dashed #38bdf8' : 'none',
        }}
        onResizeStop={(_, __, element, ___, position) => {
          setValue('w', parseInt(element.style.width, 10))
          setValue('h', parseInt(element.style.height, 10))
          setValue('x', position.x)
          setValue('y', position.y)
        }}
      >
        <Box ref={ref} position="relative" width="100%" height="100%">
          {children}
        </Box>
      </Rnd>
    )
  }

  return (
    <Box ref={ref} position="relative">
      {children}
    </Box>
  )
}

export default PreviewContainer