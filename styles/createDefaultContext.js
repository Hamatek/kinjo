import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createPalette from 'material-ui/styles/palette'
import createMuiTheme from 'material-ui/styles/theme'
// import { purple400, green400 } from 'material-ui/styles/colors'

const createDefaultContext = () =>

  MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
      overrides: {
        MuiTextField: {
          // Name of the styleSheet
          root: {
            // Name of the rule
            margin: '1em'
          },
        },
      },
    })
  })

// Singleton hack as there is no way to pass variables from _document.js to pages yet.
let context = null

export function setDefaultContext() {
  context = createDefaultContext()
}

export function getDefaultContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return context
  }

  // Reuse store on the client-side
  if (!context) {
    context = createDefaultContext()
  }

  return context
}

export default createDefaultContext
