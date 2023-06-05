import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Link, ScreenContainer, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const UserHomeScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <Link
        onPress={() => {
          try {
            navigation.navigate('WelcomeScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
            fontSize: 70,
            textAlign: 'center',
          }),
          dimensions.width
        )}
        title={'Back'}
      />
    </ScreenContainer>
  );
};

export default withTheme(UserHomeScreen);
