import { Text, Stack, Box } from '@chakra-ui/react'
import Image from 'next/image'

type HeadingWithIconProps = {
  icon: string
  title: string
  children: React.ReactNode
}

export const HeadingWithIcon = (props: HeadingWithIconProps) => {
  const { icon, title, children } = props
  return (
    <Stack>
      <Stack direction="row" align="center">
        <Box
          position="relative"
          width="20px"
          height="20px"
          sx={{
            '@media (min-width: 768px)': {
              width: '40px',
              height: '40px',
            },
          }}
        >
          <Image src={icon} alt="icon" fill objectFit="cover" />
        </Box>
        <Text
          fontSize={[
            '20px', // base
            '20px', // 480px upwards
            '40px', // 768px upwards
          ]}
          lineHeight="64px"
        >
          {title}
        </Text>
      </Stack>
      {children}
    </Stack>
  )
}
