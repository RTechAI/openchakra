import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import ComponentPreview from '~components/editor/ComponentPreview'
import { Alert } from '@chakra-ui/react'

const AlertPreview: React.FC<IPreviewProps> = ({ component }) => {
  const acceptedTypes = [
    'AlertIcon',
    'AlertTitle',
    'AlertDescription',
  ] as ComponentType[]

  const { drop, isOver } = useDropComponent(component.id, acceptedTypes)

  return (
    <Alert
      ref={drop}
      {...component.props}
      width="100%"
      height="100%"
      overflow="visible"
      bg={isOver ? 'teal.50' : component.props?.bg}
    >
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </Alert>
  )
}

export default AlertPreview