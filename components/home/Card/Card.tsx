import { Button, Stack, Text } from '@chakra-ui/react'

type CardProps = {
  title: string
  amount: string
  buttonText: string
}

export default function Card(props: CardProps) {
  const { title, amount, buttonText } = props
  return (
    <Stack
      bg="gray800"
      border="1px solid"
      borderColor="gray500"
      rounded="4px"
      padding="12px"
      w="full"
      spacing={2}
    >
      <Text
        variant="p"
        color="gray200"
        fontSize="14px"
        fontWeight="400"
        lineHeight="18px"
      >
        {title}
      </Text>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Text fontSize="24px" fontWeight="500" lineHeight="34px">
          {amount}
        </Text>
        <Button variant="inverted" size="sm">
          {buttonText}
        </Button>
      </Stack>
    </Stack>
  )
}
