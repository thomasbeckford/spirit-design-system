import { Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HeadingWithIcon } from '@/components/Headings'
import { Text } from '@chakra-ui/react'

const Video = styled.video`
  max-height: 450px;
`

export default function SwapPage() {
  return (
    <Stack
      direction={['column', 'column', 'column', 'row']}
      spacing={[4, 4, 6]}
      align="center"
      minH={['auto', 'auto', 'auto', '450px']}
    >
      <Stack>
        <HeadingWithIcon
          icon="/icons/landing-swap.png"
          title="Swap your favourite tokens"
        >
          <Stack
            display="flex"
            flexDirection="column"
            fontSize={['14px', '14px', '16px']}
          >
            <Text>
              SpiritSwap is a decentralized exchange (DEX) on the Fantom Opera
              Chain.
            </Text>
            <Text>
              Our current AMM architecture is proprietary, utilizing a
              combination of Stable Swap, Concentrated liquidity and Elastic
              AMM’s. This combination delivers the unique ability to achieve
              lightning quick swaps at the best rates the market has to offer.
            </Text>
          </Stack>
        </HeadingWithIcon>
      </Stack>
      <Video autoPlay muted loop>
        <source src="/videos/swap.webm" type="video/mp4" />
      </Video>
    </Stack>
  )
}
