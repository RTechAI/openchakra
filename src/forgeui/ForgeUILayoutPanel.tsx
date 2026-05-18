import React from 'react'

import NumberControl from '~components/inspector/controls/NumberControl'
import TextControl from '~components/inspector/controls/TextControl'

const ForgeUILayoutPanel = () => {
  return (
    <>
      <TextControl
        name="positionMode"
        label="Position Mode"
      />

      <NumberControl
        name="x"
        label="X"
      />

      <NumberControl
        name="y"
        label="Y"
      />

      <NumberControl
        name="w"
        label="Width"
      />

      <NumberControl
        name="h"
        label="Height"
      />
    </>
  )
}

export default ForgeUILayoutPanel