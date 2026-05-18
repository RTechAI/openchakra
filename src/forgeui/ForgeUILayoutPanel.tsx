import React from 'react'

import NumberControl from '~components/inspector/controls/NumberControl'
import SizeControl from '~components/inspector/controls/SizeControl'
import usePropsSelector from '~hooks/usePropsSelector'

const ForgeUILayoutPanel = () => {
  const positionMode = usePropsSelector('positionMode')

  return (
    <>
      <SizeControl
        name="positionMode"
        label="Position Mode"
        value={positionMode || 'flow'}
        options={['flow', 'absolute']}
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