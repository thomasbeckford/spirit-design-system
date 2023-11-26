import {
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import { Search2Icon, CheckIcon, CloseIcon } from '@chakra-ui/icons'

export default function InputStack() {
  return (
    <Stack>
      <Input
        size="lg"
        variant="outline"
        placeholder="Search by name or paste address"
      />
      <Input
        size="lg"
        variant="outline"
        placeholder="Search by name or paste address"
        isDisabled
      />

      <Stack direction={['column', 'column', 'column', 'row']}>
        <Input
          value="Hello"
          readOnly
          variant="outline"
          placeholder="Search by name or paste address"
        />
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            $
          </InputLeftElement>
          <Input placeholder="Enter amount" />
          <InputRightElement>
            <CheckIcon color="green.500" />
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Enter amount" />
          <InputRightElement>
            <CloseIcon color="red.500" />
          </InputRightElement>
        </InputGroup>
      </Stack>
    </Stack>
  )
}
