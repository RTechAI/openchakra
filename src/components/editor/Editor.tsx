import React, { memo, useRef } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useDropComponent } from '~hooks/useDropComponent'
import SplitPane from 'react-split-pane'
import CodePanel from '~components/CodePanel'
import { useSelector } from 'react-redux'
import useDispatch from '~hooks/useDispatch'
import { getComponents } from '~core/selectors/components'
import { getShowLayout, getShowCode } from '~core/selectors/app'
import ComponentPreview from '~components/editor/ComponentPreview'
import { FORGEUI_ACTIVE_DEVICE } from '~forgeui/ForgeUIDeviceConfig'

const GRID_SIZE = FORGEUI_ACTIVE_DEVICE.gridSize

export const gridStyles = {
  backgroundImage:
    'linear-gradient(to right, rgba(56, 189, 248, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.12) 1px, transparent 1px)',
  backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
  bgColor: '#07111f',
}

const Editor: React.FC = () => {
  const showCode = useSelector(getShowCode)
  const showLayout = useSelector(getShowLayout)
  const components = useSelector(getComponents)
  const dispatch = useDispatch()

  const viewportRef = useRef<HTMLDivElement | null>(null)
  const { drop } = useDropComponent('root', undefined, true, viewportRef)

  const isEmpty = !components.root.children.length
  const rootProps = components.root.props

  let editorBackgroundProps = {}

  const onSelectBackground = () => {
    dispatch.components.unselect()
  }

  if (showLayout) {
    editorBackgroundProps = gridStyles
  }

  const deviceProps = {
    ...rootProps,
  }

  const Playground = (
    <Box
      {...editorBackgroundProps}
      height="100%"
      width="100%"
      minWidth="10rem"
      overflow="auto"
      position="relative"
      p={3}
      onClick={onSelectBackground}
    >
      <Box
        bg="#101826"
        border="1px solid rgba(56, 189, 248, 0.45)"
        boxShadow="0 0 0 1px rgba(255,255,255,0.04), 0 24px 80px rgba(0,0,0,0.45)"
        borderRadius="14px"
        overflow="hidden"
        position="relative"
        mx="auto"
        my={4}
        {...deviceProps}
        ref={(node: HTMLDivElement | null) => {
         viewportRef.current = node
         drop(node)
        }}
        width={`${FORGEUI_ACTIVE_DEVICE.width}px`}
        height={`${FORGEUI_ACTIVE_DEVICE.height}px`}
        minWidth={`${FORGEUI_ACTIVE_DEVICE.width}px`}
        minHeight={`${FORGEUI_ACTIVE_DEVICE.height}px`}
        maxWidth={`${FORGEUI_ACTIVE_DEVICE.width}px`}
        maxHeight={`${FORGEUI_ACTIVE_DEVICE.height}px`}
        display={isEmpty ? 'flex' : 'block'}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {isEmpty && (
          <Text maxWidth="md" color="gray.400" fontSize="xl" textAlign="center">
            Drag ForgeUI components onto the ESP32-P4 screen.
            <br />
            Active target: {FORGEUI_ACTIVE_DEVICE.name}
          </Text>
        )}

        {components.root.children.map((name: string) => (
          <ComponentPreview key={name} componentName={name} />
        ))}
      </Box>
    </Box>
  )

  if (!showCode) {
    return Playground
  }

  return (
    // @ts-ignore
    <SplitPane
      style={{ overflow: 'auto' }}
      defaultSize="50%"
      resizerStyle={{
        border: '3px solid rgba(1, 22, 39, 0.21)',
        zIndex: 20,
        cursor: 'row-resize',
      }}
      split="horizontal"
    >
      {Playground}
      <CodePanel />
    </SplitPane>
  )
}

export default memo(Editor)