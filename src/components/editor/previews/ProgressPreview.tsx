import React, { useState } from 'react'
import * as Chakra from '@chakra-ui/react'

interface IProps {
  component: IComponent
}

const ProgressPreview = ({ component }: IProps) => {
  const [value] = useState(65)

  return (
    <Chakra.Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap="10px"
      padding="10px"
    >
      <Chakra.Text color="white" fontSize="sm">
        Progress {value}%
      </Chakra.Text>

      <Chakra.Progress
        {...component.props}
        value={value}
        width="100%"
        borderRadius="md"
      />
    </Chakra.Box>
  )
}

export default ProgressPreview