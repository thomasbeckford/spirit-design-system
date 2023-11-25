import colors from '../colors'

const Switch = {
  baseStyle: {
    track: {
      padding: '4px',
      borderRadius: '8px',
      background: colors.teal40015,
      border: `1px solid ${colors.gray600}`,

      _disabled: {
        _hover: {
          border: `1px solid ${colors.gray500}`,
        },
      },
    },

    thumb: {
      borderRadius: '4px',
      background: 'white',
      _checked: {
        background: colors.teal400,
      },
    },
  },
}

export default Switch
