'use client'

import { Jost } from 'next/font/google'
import { Container, Stack } from '@chakra-ui/react'
import ButtonStack from '@/components/ButtonStack'
import InputStack from '@/components/InputStack'
import SwitchStack from '@/components/SwitchStack'
import HomePage from '@/components/home/HomePage'

const jost = Jost({ subsets: ['latin'], weight: ['400', '500'] })

export default function Home() {
  return (
    <main className={jost.className}>
      <Container maxW="container.xl">
        <HomePage />
        <Stack spacing={2} mt={10}>
          <ButtonStack />
          <InputStack />
          <SwitchStack />
        </Stack>
      </Container>
    </main>
  )
}
