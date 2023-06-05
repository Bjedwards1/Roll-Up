import { systemWeights } from 'react-native-typography';
export default {
  disabledOpacity: 0.5,
  roundness: 6,
  colors: {
    Background: 'rgb(202, 202, 209)',
    Divider: 'rgba(234, 237, 242, 1)',
    Error: 'rgba(255, 69, 100, 1)',
    Light: 'rgba(165, 173, 183, 1)',
    'Light Inverse': 'rgba(255, 255, 255, 0.68)',
    Medium: 'rgb(255, 255, 255)',
    'Medium Inverse': 'rgba(255, 255, 255, 0.87)',
    Primary: 'rgb(0, 0, 0)',
    Secondary: 'rgba(59, 201, 234, 1)',
    Strong: 'rgba(18, 20, 44, 1)',
    'Strong Inverse': 'rgba(255, 255, 255, 1)',
    Surface: 'rgba(255, 255, 255, 1)',
    background: 'rgb(202, 202, 209)',
    divider: 'rgba(234, 237, 242, 1)',
    error: 'rgba(255, 69, 100, 1)',
    light: 'rgba(165, 173, 183, 1)',
    lightInverse: 'rgba(255, 255, 255, 0.68)',
    medium: 'rgb(255, 255, 255)',
    mediumInverse: 'rgba(255, 255, 255, 0.87)',
    primary: 'rgb(0, 0, 0)',
    secondary: 'rgba(59, 201, 234, 1)',
    strong: 'rgba(18, 20, 44, 1)',
    strongInverse: 'rgba(255, 255, 255, 1)',
    surface: 'rgba(255, 255, 255, 1)',
  },
  typography: {
    body1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 26,
    },
    body2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
    button: {
      ...systemWeights.bold,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 16,
    },
    caption: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 0,
      lineHeight: 16,
    },
    headline1: {
      ...systemWeights.bold,
      fontSize: 60,
      letterSpacing: 0,
      lineHeight: 71,
    },
    headline2: {
      ...systemWeights.bold,
      fontSize: 48,
      letterSpacing: 0,
      lineHeight: 58,
    },
    headline3: {
      ...systemWeights.bold,
      fontSize: 34,
      letterSpacing: 0,
      lineHeight: 40,
    },
    headline4: {
      ...systemWeights.bold,
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 34,
    },
    headline5: {
      ...systemWeights.bold,
      fontSize: 20,
      letterSpacing: 0,
      lineHeight: 26,
    },
    headline6: {
      ...systemWeights.bold,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 24,
    },
    overline: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 2,
      lineHeight: 16,
    },
    subtitle1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 26,
    },
    subtitle2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
  },
};