import React, { useState } from 'react'
import * as Chakra from '@chakra-ui/react'

const SliderPreview: React.FC<IPreviewProps> = ({ component }) => {
  const [value, setValue] = useState(50)

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
        Slider {value}%
      </Chakra.Text>

      <Chakra.Slider
        value={value}
        min={0}
        max={100}
        onChange={setValue}
      >
        <Chakra.SliderTrack>
          <Chakra.SliderFilledTrack />
        </Chakra.SliderTrack>

        <Chakra.SliderThumb />
      </Chakra.Slider>
    </Chakra.Box>
  )
}

export default SliderPreview