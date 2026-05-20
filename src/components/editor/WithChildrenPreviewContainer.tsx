import React, { FunctionComponent, ComponentClass } from 'react'
import { useInteractive } from '~hooks/useInteractive'
import { useDropComponent } from '~hooks/useDropComponent'
import ComponentPreview from '~components/editor/ComponentPreview'
import { Box } from '@chakra-ui/react'
import { forgeuiPositionProps } from '~forgeui/ForgeUIPositionProps'

const WithChildrenPreviewContainer: React.FC<{
  component: IComponent
  type: string | FunctionComponent<any> | ComponentClass<any, any>
  enableVisualHelper?: boolean
  isBoxWrapped?: boolean
}> = ({
  component,
  type,
  enableVisualHelper = false,
  isBoxWrapped,
  ...forwardedProps
}) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, enableVisualHelper)

  const children = React.createElement(
    type,
    {
      ...props,
      ...forwardedProps,
      pos: 'relative',
      width: '100%',
      height: '100%',
    },
    component.children.map((key: string) => (
      <ComponentPreview key={key} componentName={key} />
    )),
  )

  return (
    <Box
      ref={drop(ref)}
      {...forgeuiPositionProps(props)}
      bg={isOver ? 'teal.50' : undefined}
      position={props.positionMode === 'absolute' ? 'absolute' : 'relative'}
    >
      {children}
    </Box>
  )
}

export default WithChildrenPreviewContainer