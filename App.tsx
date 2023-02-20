import { NativeBaseProvider, Box, extendTheme } from "native-base";
import useCachedResources from './src/hooks/useCachedResources';

export default function App() {

  const theme = extendTheme({
    colors: {
      gelcargoWhite: '#FFFFFF',
      gelcargoBlack: '#27282E',
      gelcargoGrey:  '#929395',
      gelcargoGreyLight:  '#929395',
      gelcargoBlue:  '#3A69BB',
      gelcargoYellow:  '#F4A124',
    },
    opacity: {
      0: 0,
      5: 0.05,
      10: 0.1,
      15: 0.15,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      90: 0.9,
      95: 0.95,
      100: 1,
    },
    fontConfig: {
      Montserrat: {
        400: {
          normal: 'montserrat-regular',
        },
        500: {
          normal: 'montserrat-medium',
        },
        600: {
          normal: 'montserrat-semibold',
        },
        700: {
          normal: 'montserrat-bold'
        },
        800: {
          normal: 'montserrat-extrabold'
        }
      }
    }
  })

  // Load cached resources before the app starts.
  const isLoadingComplete = useCachedResources();

  // Show nothing ( but the splashscreen ) till cached resources load.
  if (!isLoadingComplete) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">Hello world</Box>
    </NativeBaseProvider>
  );
}

