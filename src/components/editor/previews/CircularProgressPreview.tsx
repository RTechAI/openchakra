import React, { useState } from 'react'
import * as Chakra from '@chakra-ui/react'

interface IProps {
  component: IComponent
}

const CircularProgressPreview = ({ component }: IProps) => {
  const [value] = useState(72)

  return (
    <Chakra.Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      padding="8px"
      gap="10px"
    >
      <Chakra.Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Chakra.CircularProgress
          {...component.props}
          value={value}
          size="96px"
        />
      </Chakra.Box>

      <Chakra.Text
        color="white"
        fontSize="sm"
        textAlign="center"
        noOfLines={1}
      >
        Circular {value}%
      </Chakra.Text>
    </Chakra.Box>
  )
}

export default CircularProgressPreview