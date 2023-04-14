import { extendTheme } from 'native-base';
import components from './components';
import { fontConfig, fonts } from './font';

const newTheme = extendTheme({
  colors: {
    primary: {
      50: '#fdf1e7',
      100: '#e6d5cb',
      200: '#d2b9ac',
      300: '#bfa18c',
      400: '#ac8a6c',
      500: '#937553',
      600: '#735e40',
      700: '#53462d',
      800: '#332c19',
      900: '#181202',
    },
  },
  fontConfig: fontConfig,
  fonts: fonts,
  components: components,
});

const theme = extendTheme(newTheme);

export default theme;
