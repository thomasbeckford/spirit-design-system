import { Stack, Button } from '@chakra-ui/react'
import { StarIcon, ArrowForwardIcon } from '@chakra-ui/icons'

export default function ButtonStack() {
  return (
    <Stack direction="row" spacing={2} align="center">
      <Stack w="full">
        <Button size="lg" variant="primary">
          Show Portfolio
        </Button>
        <Button rightIcon={<ArrowForwardIcon />} variant="primary">
          Show Portfolio
        </Button>
        <Button variant="primary" isDisabled>
          Disabled Primary Button
        </Button>
        <Button variant="primary" size="sm" isLoading loadingText="Submitting">
          Primary Small Button
        </Button>
        <Button rightIcon={<ArrowForwardIcon />} variant="primary" size="sm">
          Show Portfolio
        </Button>
      </Stack>
      <Stack>
        <Button leftIcon={<StarIcon />} size="lg" variant="secondary">
          Secondary Big Button
        </Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="secondary" isDisabled>
          Disabled Secondary Button
        </Button>
        <Button variant="secondary" size="sm">
          Secondary Button
        </Button>
        <Button variant="secondary" size="sm">
          Dashboard
        </Button>
      </Stack>
      <Stack>
        <Button leftIcon={<StarIcon />} size="lg" variant="inverted">
          Inverted Big Button
        </Button>
        <Button variant="inverted">Inverted Button</Button>
        <Button variant="inverted" isDisabled>
          Disabled Inverted Button
        </Button>
        <Button variant="inverted" size="sm">
          Inverted Small Button
        </Button>
        <Button variant="inverted" size="sm">
          Learn More
        </Button>
      </Stack>

      <Stack>
        <Button leftIcon={<StarIcon />} size="lg" variant="danger">
          Danger Big Button
        </Button>
        <Button variant="danger">Danger Button</Button>
        <Button variant="danger" isDisabled>
          Disabled Danger Button
        </Button>
        <Button variant="danger" size="sm">
          Danger Small Button
        </Button>
        <Button variant="danger" size="sm">
          Cancel
        </Button>
      </Stack>
    </Stack>
  )
}
