import colors from '../config/colors';

const components = {
  Heading: {
    baseStyle: {
      textAlign: 'center',
      my: 4,
    },
  },
  Text: {
    variants: {
      disabled: {
        color: colors.light,
      },
      h6: {
        color: 'gray.500',
        fontSize: 'md',
      }
    },
  },
};

export default components;
