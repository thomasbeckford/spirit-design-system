// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
// 2. Extend the theme to include custom colors, fonts, etc
import Button from './styles/Button'
import Input from './styles/Input'
import Switch from './styles/Switch'
import colors from './colors'

const lineHeightSm = '16px'
const lineHeightBase = '20px'
const lineHeightLg = '28px'
const lineHeightXl = '36px'
const lineHeight2xl = '48px'
const lineHeight3xl = '64px'

const letterSpacingNormal = '0em'
const letterSpacingTight = '-2px'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      'html, body': {
        bg: colors.blue900,
      },
    },
  },
  colors,
  fonts: {
    heading: 'var(--font-jost)',
    body: {
      fontFamily: 'var(--font-jost)',
      fontWeight: 500,
    },
  },
  components: {
    Button,
    Input,
    Switch,
    Text: {
      variants: {
        p: {
          fontSize: '18px',
          lineHeight: lineHeightBase,
          fontWeight: 400,
          letterSpacing: letterSpacingNormal,
        },
      },
    },
    Heading: {
      variants: {
        h1: {
          fontSize: '24px',
          lineHeight: lineHeightXl,
          fontWeight: 500,
        },
        h2: {
          fontSize: '20px',
          lineHeight: lineHeightXl,
          fontWeight: 500,
        },
        h3: {
          fontSize: '18px',
          lineHeight: lineHeightLg,
          fontWeight: 500,
        },
        h4: {
          fontSize: '16px',
          lineHeight: lineHeightBase,
          fontWeight: 500,
        },
        h5: {
          fontSize: '14px',
          lineHeight: lineHeightBase,
          fontWeight: 500,
        },
        title: {
          fontSize: '56px',
          fontWeight: 500,
          lineHeight: lineHeight3xl,
          letterSpacing: letterSpacingNormal,
        },
      },
    },
  },
})
