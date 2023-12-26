import { Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HeadingWithIcon } from '@/components/Headings'
import { Text } from '@chakra-ui/react'

const Video = styled.video`
  max-height: 450px;
`

export default function FarmingPage() {
  return (
    <Stack
      direction={['column', 'column', 'column', 'row']}
      spacing={[4, 4, 6]}
      align="center"
      minH={['auto', 'auto', 'auto', '450px']}
    >
      <Video autoPlay muted loop>
        <source src="/videos/farm.webm" type="video/mp4" />
      </Video>
      <Stack>
        <HeadingWithIcon
          icon="/icons/landing-farm.png"
          title="Earn passive income by Farming "
        >
          <Stack
            display="flex"
            flexDirection="column"
            fontSize={['14px', '14px', '16px']}
          >
            <Text>
              Farming is the process of lending your assets to our AMM. These
              assets are used to build liquidity pools, which facilitates the
              ability for people to swap and trade.
            </Text>
            <Text>
              In return for lending SpiritSwap your assets to be used as
              liquidity, we reward you in SPIRIT tokens, which can be used for
              further investment, governance and boosting your farm rewards.
            </Text>
          </Stack>
        </HeadingWithIcon>
      </Stack>
    </Stack>
  )
}
