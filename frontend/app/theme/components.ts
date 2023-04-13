import colors from '../config/colors';

const components = {
  Heading: {
    baseStyle: {
      textAlign: 'center',
      my: 4,
    },
  },
  Text: {
    variants:{
      disabled: {
        color: colors.light ,
      }
    }
  },
};

export default components;
