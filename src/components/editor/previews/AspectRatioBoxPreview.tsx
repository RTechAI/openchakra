import React from 'react'
import { Box, AspectRatio } from '@chakra-ui/react'
import { useDropComponent } from '~hooks/useDropComponent'
import ComponentPreview from '~components/editor/ComponentPreview'

const AspectRatioPreview: React.FC<{ component: IComponent }> = ({
  component,
}) => {
  const { drop, isOver } = useDropComponent(
    component.id,
    undefined,
    component.children.length === 0,
  )

  const children = component.children

  return (
    <AspectRatio
      ref={drop}
      {...component.props}
      width="100%"
      height="100%"
      bg={isOver ? 'teal.50' : component.props?.bg}
    >
      {!children.length ? (
        <Box width="100%" height="100%" />
      ) : (
        <Box width="100%" height="100%">
          <ComponentPreview componentName={children[0]} />
        </Box>
      )}
    </AspectRatio>
  )
}

export default AspectRatioPreview