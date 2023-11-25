import colors from '../colors'

const Input = {
  variants: {
    outline: {
      field: {
        borderRadius: '8px',
        background: `linear-gradient(0deg, ${colors.gray600}, ${colors.gray600}),linear-gradient(0deg, ${colors.gray500}, ${colors.gray500})`,
        border: `1px solid ${colors.gray600}`,
        _focus: {
          boxShadow: `none`,
          background: `linear-gradient(0deg, ${colors.gray600}, ${colors.gray600}),linear-gradient(0deg, ${colors.teal600}, ${colors.teal600})`,
          border: `1px solid ${colors.teal600}`,
        },
        _disabled: {
          background: `linear-gradient(0deg, ${colors.gray600}, ${colors.gray600}),linear-gradient(0deg, ${colors.gray500}, ${colors.gray500})`,
          _hover: {
            border: `1px solid ${colors.gray500}`,
          },
        },
      },
    },
  },
}

export default Input
