import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Rubik, sans-serif',
    body: 'Rubik, sans-serif',
  },
  components: {
    Container: {
      variants: {
        task: {
          h: '56px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'gray.200',
        },
      },
    },
  },
})

export default theme
