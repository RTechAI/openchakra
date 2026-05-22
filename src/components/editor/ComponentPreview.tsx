import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import AlertPreview from '~components/editor/previews/AlertPreview'
import AvatarPreview, {
  AvatarBadgePreview,
  AvatarGroupPreview,
} from '~components/editor/previews/AvatarPreview'
import AccordionPreview, {
  AccordionButtonPreview,
  AccordionItemPreview,
  AccordionPanelPreview,
} from '~components/editor/previews/AccordionPreview'
import * as Chakra from '@chakra-ui/react'
import { getComponentBy } from '~core/selectors/components'
import { InputRightElementPreview } from '~components/editor/previews/InputRightElement'
import { InputLeftElementPreview } from '~components/editor/previews/InputLeftElement'
import AspectRatioPreview from '~components/editor/previews/AspectRatioBoxPreview'
import ButtonPreview from '~components/editor/previews/ButtonPreview'
import PreviewContainer from '~components/editor/PreviewContainer'
import WithChildrenPreviewContainer from '~components/editor/WithChildrenPreviewContainer'
import IconPreview from './previews/IconPreview'
import IconButtonPreview from './previews/IconButtonPreview'
import SelectPreview from '~components/editor/previews/SelectPreview'
import NumberInputPreview from '~components/editor/previews/NumberInputPreview'
import BreadcrumbPreview from './previews/BreadcrumbPreview'
import BreadcrumbItemPreview from './previews/BreadcrumbItemPreview'
import HighlightPreview from './previews/HighlightPreview'
import SliderPreview from '~components/editor/previews/SliderPreview'
import ProgressPreview from '~components/editor/previews/ProgressPreview'
import CircularProgressPreview from '~components/editor/previews/CircularProgressPreview'
import StatGroupPreview, {
  StatHelpTextPreview,
  StatPreview,
} from './previews/StatPreview'
import SkeletonPreview, {
  SkeletonCirclePreview,
  SkeletonTextPreview,
} from './previews/SkeletonPreview'

const ComponentPreview: React.FC<{
  componentName: string
}> = ({ componentName, ...forwardedProps }) => {
  const component = useSelector(getComponentBy(componentName))
  if (!component) {
    console.error(`ComponentPreview unavailable for component ${componentName}`)
  }

  const type = (component && component.type) || null

  switch (type) {
    // Simple components
    case 'Kbd':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <Chakra.Kbd
      {...component.props}
       w="100%"
       h="100%"
       minW="100%"
       minH="100%"
       display="flex"
       alignItems="center"
       justifyContent="center"
       boxSizing="border-box"
>
  {component.props.children || 'shift'}
</Chakra.Kbd>
    </PreviewContainer>
  )

  case 'Radio':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <Chakra.Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="10px"
        color="white"
      >
        <Chakra.Radio {...component.props} />
        <Chakra.Text color="white">
          {component.props.children || 'Radio'}
        </Chakra.Text>
      </Chakra.Box>
    </PreviewContainer>
  )

case 'Switch':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <Chakra.Switch
        color="white"
        w="100%"
        h="100%"
        minW="100%"
        minH="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSizing="border-box"
      >
        {component.props.children || 'Switch'}
      </Chakra.Switch>
    </PreviewContainer>
  )
  
    case 'Badge':
    // case 'Image':
    // case 'Text':
    // case 'Link':
    case 'Spinner':
    //case 'Checkbox':
    // case 'Textarea':
    //case 'CircularProgress':
    case 'Heading':
    // case 'Switch':
    case 'FormLabel':
    case 'FormHelperText':
    case 'FormErrorMessage':
    case 'TabPanel':
    case 'Tab':
    //case 'Input':
    //case 'Radio':
    case 'ListItem':
    case 'BreadcrumbLink':
    // case 'Kbd':
    case 'StatLabel':
    case 'StatNumber':
    case 'StatArrow':
      return (
        <PreviewContainer
          component={component}
          type={Chakra[type]}
          {...forwardedProps}
        />
      )
    // Wrapped functional components (forward ref issue)
    case 'AlertIcon':
// case 'CloseButton':
    case 'AccordionIcon':
    case 'Code':
    case 'ListIcon':
    case 'Divider':
    case 'AlertDescription':
    case 'AlertTitle':
    case 'InputRightAddon':
    case 'InputLeftAddon':
    case 'Tag':
      return (
        <PreviewContainer
          component={component}
          type={Chakra[type]}
          {...forwardedProps}
          isBoxWrapped
        />
      )
    // Components with childrens
    // case 'Box':
    case 'SimpleGrid':
    case 'Flex':
    case 'FormControl':
    case 'Tabs':
    case 'List':
    case 'TabList':
    case 'TabPanels':
    case 'Grid':
    case 'Center':
    case 'Container':
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={Chakra[type]}
          {...forwardedProps}
        />
      )
    case 'RadioGroup':
    case 'Stack':
    case 'InputGroup':
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={Chakra[type]}
          {...forwardedProps}
          isBoxWrapped
        />
      )
    // More complex components
case 'InputRightElement':
  return <InputRightElementPreview component={component} />

case 'InputLeftElement':
  return <InputLeftElementPreview component={component} />

case 'Avatar':
  return <AvatarPreview component={component} />

case 'AvatarBadge':
  return <AvatarBadgePreview component={component} />

case 'AvatarGroup':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <AvatarGroupPreview component={component} />
    </PreviewContainer>
  )

case 'Alert':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <AlertPreview component={component} />
    </PreviewContainer>
  )

case 'Accordion':
  return <AccordionPreview component={component} />

case 'AccordionButton':
  return <AccordionButtonPreview component={component} />

case 'AccordionItem':
  return <AccordionItemPreview component={component} />

case 'AccordionPanel':
  return <AccordionPanelPreview component={component} />

case 'AspectRatio':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <AspectRatioPreview component={component} />
    </PreviewContainer>
  )

case 'Button':
  return (
    <PreviewContainer
      component={component}
      {...forwardedProps}
    >
      <ButtonPreview component={component} />
    </PreviewContainer>
  )

case 'CloseButton':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
    <Chakra.CloseButton
  {...component.props}
  width="100%"
  height="100%"
  fontSize="48px"
/>
    </PreviewContainer>
  )


    case 'Breadcrumb':
      return <BreadcrumbPreview component={component} />
    case 'BreadcrumbItem':
      return <BreadcrumbItemPreview component={component} />
    
      case 'Icon':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <IconPreview component={component} />
    </PreviewContainer>
  )
  
    case 'IconButton':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <IconButtonPreview component={component} />
    </PreviewContainer>
  )

  case 'Slider':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <SliderPreview component={component} />
    </PreviewContainer>
  )

  case 'NumberInput':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <NumberInputPreview component={component} />
    </PreviewContainer>
  )

case 'CircularProgress':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <CircularProgressPreview component={component} />
    </PreviewContainer>
  )

case 'Progress':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <ProgressPreview component={component} />
    </PreviewContainer>
  )

case 'Select':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <Chakra.Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="6px"
      >
        <Chakra.Text color="white" fontSize="sm">
          Select
        </Chakra.Text>

        <Chakra.Select
          {...component.props}
          width="100%"
          color="white"
          bg="transparent"
          borderColor="gray.500"
        >
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Chakra.Select>
      </Chakra.Box>
    </PreviewContainer>
  )

  case 'Input':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <Chakra.Input
        {...component.props}
        width="100%"
        height="100%"
        placeholder="Input value"
      />
    </PreviewContainer>
  )

  case 'Box':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <Chakra.Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px dashed #666"
        color="gray.400"
        fontSize="sm"
      >
        Box
      </Chakra.Box>
    </PreviewContainer>
  )
  
case 'Image':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <Chakra.Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px dashed #666"
        color="gray.400"
        fontSize="sm"
      >
        Image
      </Chakra.Box>
    </PreviewContainer>
  )

  case 'Checkbox':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <Chakra.Checkbox
        {...component.props}
        color="white"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {component.props.children || 'Checkbox'}
      </Chakra.Checkbox>
    </PreviewContainer>
  )

case 'Textarea':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <Chakra.Textarea
        {...component.props}
        width="100%"
        height="100%"
        placeholder="Textarea value"
      />
    </PreviewContainer>
  )

  case 'Text':
    return (
      <PreviewContainer
        component={component}
        enableVisualHelper
        {...forwardedProps}
    >
      <Chakra.Text
        {...component.props}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        {component.props.children || 'Text'}
      </Chakra.Text>
    </PreviewContainer>
  )


case 'Link':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <Chakra.Link
        {...component.props}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      />
    </PreviewContainer>
  )
  
    case 'Highlight':
      return <HighlightPreview component={component} />

    case 'Skeleton':
  return (
    <PreviewContainer
      component={component}
      enableVisualHelper
      {...forwardedProps}
    >
      <SkeletonPreview component={component} />
    </PreviewContainer>
  )

    case 'SkeletonText':
      return <SkeletonTextPreview component={component} />
    case 'SkeletonCircle':
      return <SkeletonCirclePreview component={component} />

    default:
      return null
  }
}

export default memo(ComponentPreview)
