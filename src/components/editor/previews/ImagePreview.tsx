import React from 'react'
import * as Chakra from '@chakra-ui/react'

interface IProps {
  component: IComponent
}

const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180'%3E%3Crect width='100%25' height='100%25' fill='%230ea5e9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24'%3EForgeUI Image%3C/text%3E%3C/svg%3E"

const ImagePreview = ({ component }: IProps) => {
  const src = component.props.src || FALLBACK_IMAGE

  return (
    <Chakra.Box
      width="100%"
      height="100%"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#0b1220"
    >
      <Chakra.Image
        src={src}
        width="100%"
        height="100%"
        objectFit={component.props.objectFit || 'contain'}
        draggable={false}
        pointerEvents="none"
      />
    </Chakra.Box>
  )
}

export default ImagePreview