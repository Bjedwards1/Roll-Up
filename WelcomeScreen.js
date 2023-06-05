import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const WelcomeScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { alignItems: 'center', justifyContent: 'center' },
        dimensions.width
      )}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={StyleSheet.applyWidth({ opacity: 1 }, dimensions.width)}>
        {/* SignUp */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('SignUpScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              borderColor: theme.colors['Medium'],
              marginBottom: 10,
            }),
            dimensions.width
          )}
          title={'Sign Up'}
        />
        {/* LogIn */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('LogInScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              backgroundColor: theme.colors['Background'],
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 2,
              borderTopWidth: 2,
              color: theme.colors['Primary'],
              width: 300,
            }),
            dimensions.width
          )}
          title={'Log In'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
