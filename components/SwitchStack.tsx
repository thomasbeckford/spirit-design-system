import * as React from 'react'
import {
  Stack,
  Switch,
  FormControl,
  FormLabel,
  SimpleGrid,
} from '@chakra-ui/react'

export default function SwitchStack() {
  const [isChecked, setIsChecked] = React.useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked(event.target.checked)

  return (
    <Stack direction="row">
      <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }} spacing={1}>
        <FormLabel htmlFor="labeled-switch">
          {isChecked ? 'Expert' : 'Basic'}
        </FormLabel>
        <Switch
          id="labeled-switch"
          checked={isChecked}
          onChange={handleChange}
          size="lg"
        />

        <FormLabel htmlFor="isDisabled">isDisabled</FormLabel>
        <Switch id="isDisabled" isDisabled defaultChecked size="lg" />

        <FormLabel htmlFor="isReadOnly">isReadOnly:</FormLabel>
        <Switch id="isReadOnly" isReadOnly size="lg" />

        <FormLabel htmlFor="isRequired">isRequired:</FormLabel>
        <Switch id="isRequired" isRequired size="lg" />

        <FormLabel htmlFor="isReadOnly">isReadOnly:</FormLabel>
        <Switch id="isReadOnly" isReadOnly size="lg" />

        <FormLabel htmlFor="isRequired">isRequired:</FormLabel>
        <Switch id="isRequired" isRequired size="lg" />
      </FormControl>
    </Stack>
  )
}
