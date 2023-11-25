import colors from '../colors'

const defaultBackground = `linear-gradient(0deg, ${colors.teal600}, ${colors.teal600}), linear-gradient(0deg, ${colors.teal40015}, ${colors.teal40015})`
const defaultBorder = `1px solid ${colors.teal40015}`

const defaultDangerBackground = `linear-gradient(0deg, ${colors.red500}, ${colors.red500}),linear-gradient(0deg, ${colors.red400}, ${colors.red400})`
const defaultDangerBorder = `1px solid ${colors.red400}`

const Button = {
  baseStyle: {
    borderRadius: '4px',
    color: 'white',
    fontWeight: '400',
    boxShadow: `0px 2px 8px 0px ${colors.gray600}`,
    '&:hover': {
      animationTimingFunction: 'ease-out',
      animationDuration: '100ms',
      opacity: '0.8',
      animationName: 'smart-animate',
    },
    '&:disabled': {
      opacity: '0.6',
      cursor: 'not-allowed',
      border: 'none',
      '&:hover': {
        boxShadow: 'none',
        opacity: '0.6',
      },
      '&:active': {
        border: 'none',
      },
    },
  },

  sm: {
    lineHeight: '20px',
    size: '14px',
  },
  md: {
    lineHeight: '20px',
    size: '14px',
  },
  lg: {
    lineHeight: '24px',
    size: '18px',
  },

  variants: {
    secondary: {
      background: colors.gray500,
      border: `1px solid ${colors.gray500}`,
      '&:active': {
        background: `linear-gradient(0deg, ${colors.gray500}, ${colors.gray500}),linear-gradient(0deg, ${colors.gray200}, ${colors.gray200})`,
        border: `1px solid ${colors.gray200}`,
      },
      '&:disabled': {
        background: colors.gray500,
        '&:hover': {
          background: colors.gray500,
        },
      },
    },

    danger: {
      background: defaultDangerBackground,
      border: defaultDangerBorder,

      '&:active': {
        background: `linear-gradient(0deg, ${colors.red500}, ${colors.red500}),linear-gradient(0deg, ${colors.red200}, ${colors.red200})`,
        border: `1px solid ${colors.red200}`,
      },
      '&:disabled': {
        background: defaultDangerBackground,
        '&:hover': {
          background: defaultDangerBackground,
        },
      },
    },

    inverted: {
      color: colors.teal400,
      background: colors.teal40015,
      border: `1px solid transparent`,
      '&:active': {
        border: `1px solid ${colors.teal400}`,
      },
      '&:disabled': {
        background: 'transparent',
        '&:hover': {
          background: 'transparent',
        },
      },
    },
    primary: {
      background: defaultBackground,
      border: defaultBorder,
      '&:active': {
        border: `1px solid ${colors.teal400}`,
      },
      '&:disabled': {
        background: defaultBackground,
        '&:hover': {
          background: defaultBackground,
        },
      },
    },
  },
}

export default Button
