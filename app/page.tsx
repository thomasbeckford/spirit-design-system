'use client'

import { Jost } from 'next/font/google'
import { Container, Stack } from '@chakra-ui/react'
import ButtonStack from '@/components/ButtonStack'
import InputStack from '@/components/InputStack'
import SwitchStack from '@/components/SwitchStack'
import HomePage from '@/components/home/HomePage'
import SwapPage from '@/components/home/SwapPage'
import FarmingPage from '@/components/home/FarmingPage'

const jost = Jost({ subsets: ['latin'], weight: ['400', '500'] })

export default function Home() {
  return (
    <main className={jost.className}>
      <Container maxW="container.xl">
        <HomePage />
        <SwapPage />

        <Stack spacing={2} mt={10}>
          <ButtonStack />
          <InputStack />
          <SwitchStack />
        </Stack>
        <FarmingPage />
      </Container>
    </main>
  )
}
