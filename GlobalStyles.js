import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({
    'Image Background': {
      backgroundColor: '"rgb(132, 90, 90)"',
      borderStyle: 'solid',
      height: '100%',
      width: '100%',
    },
  });

export const LinkStyles = theme =>
  StyleSheet.create({ Link: { color: theme.colors.primary } });

export const MapViewStyles = theme =>
  StyleSheet.create({ 'Map View': { flex: 1, height: '100%', width: '100%' } });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({ Text: { color: theme.colors.strong } });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });
