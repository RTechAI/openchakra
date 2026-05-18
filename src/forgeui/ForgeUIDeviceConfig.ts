export type ForgeUIDeviceTarget = {
  id: string
  name: string
  width: number
  height: number
  gridSize: number
}

export const FORGEUI_DEVICE_TARGETS: ForgeUIDeviceTarget[] = [
  {
    id: 'waveshare-p4-7b-1024x600',
    name: 'Waveshare ESP32-P4 7B 1024x600',
    width: 1024,
    height: 600,
    gridSize: 20,
  },
  {
    id: 'generic-800x600',
    name: 'Generic 800x600',
    width: 800,
    height: 600,
    gridSize: 20,
  },
]

export const FORGEUI_ACTIVE_DEVICE_ID = 'waveshare-p4-7b-1024x600'

export const FORGEUI_ACTIVE_DEVICE =
  FORGEUI_DEVICE_TARGETS.find(
    (device) => device.id === FORGEUI_ACTIVE_DEVICE_ID,
  ) || FORGEUI_DEVICE_TARGETS[0]