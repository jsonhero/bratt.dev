import { cva } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'

const buttonStyle = cva({
  base: {
    display: 'flex',
    color: 'text.paragraph',
    _hover: {
      cursor: 'pointer',
    },
  },
  variants: {
    visual: {
      ghost: { color: 'black' },
      outline: { borderWidth: '1px', borderColor: 'red.200' }
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' }
    }
  }
})

export const Button = styled('button', buttonStyle)