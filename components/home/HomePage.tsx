import { Stack } from '@chakra-ui/react'
import { Text, Heading, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Card from '@/components/home/Card/Card'
import styled from '@emotion/styled'

const Video = styled.video`
  max-height: 450px;
`

export default function HomePage() {
  return (
    <Stack
      direction={['column', 'column', 'column', 'row']}
      spacing={6}
      align="center"
    >
      <Stack>
        <Heading variant="title">
          Design for{' '}
          <Text as="span" color="teal400">
            DeFi SPIRIT
          </Text>
        </Heading>

        <Stack spacing={12}>
          <Stack spacing={6}>
            <Text variant="p">
              The SpiritSwap protocol captures the essence of everything Defi
              2.0 on the Fantom network, delievering a complete hub for{' '}
              <b>trading</b>, <b>lending</b> and <b>borrowing</b>,
              <b>reward sharing</b>, <b>staking delegations</b>, and{' '}
              <b>farming</b>.
            </Text>
            <Text variant="p">
              Scroll below and click on “Learn more” to learn more about
              SpiritSwap’s unique features and lucrative investment options.
            </Text>
          </Stack>

          <Stack direction="row">
            <Button
              variant="primary"
              size="sm"
              rightIcon={<ArrowForwardIcon />}
            >
              Show Portfolio
            </Button>
            <Button size="sm" variant="inverted">
              Learn More
            </Button>
          </Stack>

          <Stack direction="row" alignItems="center" w="100%" spacing={1}>
            <Card
              title="Wallet balance"
              amount="$0.00"
              buttonText="Bridge Tokens"
            />
            <Card title="Farm rewards" amount="$0.00" buttonText="Show Farms" />
          </Stack>
        </Stack>
      </Stack>

      <Video autoPlay muted loop>
        <source src="/videos/spirit.webm" type="video/mp4" />
      </Video>
    </Stack>
  )
}
