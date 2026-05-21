import React from 'react'
import {
  Avatar,
  AvatarGroup,
  Box,
  AvatarBadge,
  BoxProps,
} from '@chakra-ui/react'
import { useInteractive } from '~hooks/useInteractive'
import { useDropComponent } from '~hooks/useDropComponent'
import ComponentPreview from '~components/editor/ComponentPreview'
import { useSelector } from 'react-redux'
import { getComponents } from '~core/selectors/components'
import { forgeuiPositionProps } from '~forgeui/ForgeUIPositionProps'

const AvatarPreview: React.FC<IPreviewProps & {
  spacing?: BoxProps['marginLeft']
  index?: number
}> = ({ component, spacing, index }) => {
  const { drop, isOver } = useDropComponent(component.id, ['AvatarBadge'])
  const { props, ref } = useInteractive(component)

  let boxProps: any = {
    display: 'inline-block',
    zIndex: index ? 20 - index : null,
  }

  props.p = 0

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box
        ref={drop(ref)}
        {...boxProps}
        {...forgeuiPositionProps(props)}
>
      <Avatar ml={index === 0 ? 0 : spacing} {...props}>
        {component.children.map((key: string) => (
          <ComponentPreview key={key} componentName={key} />
        ))}
      </Avatar>
    </Box>
  )
}

export const AvatarGroupPreview = ({ component }: IPreviewProps) => {
  const { drop, isOver } = useDropComponent(component.id, ['Avatar'])
  const components = useSelector(getComponents)

  return (
    <AvatarGroup
      ref={drop}
      {...component.props}
      width="100%"
      height="100%"
      bg={isOver ? 'teal.50' : component.props?.bg}
    >
      {component.children.map((key: string, i: number) => (
        <AvatarPreview
          key={key}
          index={i + 1}
          spacing={component.props.spacing}
          component={components[key]}
        />
      ))}
    </AvatarGroup>
  )
}

export const AvatarBadgePreview = ({ component }: IPreviewProps) => {
  const { props, ref } = useInteractive(component)
  let boxProps: any = {}

  return (
    <Box {...boxProps} ref={ref}>
      <AvatarBadge {...props} />
    </Box>
  )
}

export default AvatarPreview
