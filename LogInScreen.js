import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as RollUpApi from '../apis/RollUpApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, Link, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, TextInput, View, useWindowDimensions } from 'react-native';

const LogInScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInput3Value, setTextInput3Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { alignItems: 'center', paddingBottom: 50, paddingTop: 50 },
        dimensions.width
      )}
      scrollable={false}
      hasSafeArea={false}
    >
      {/* Log In */}
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            alignSelf: 'center',
            fontFamily: 'OpenSans_800ExtraBold',
            fontSize: 65,
            marginBottom: 50,
          }),
          dimensions.width
        )}
      >
        {'Log In'}
      </Text>
      {/* Error Message */}
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            alignSelf: 'flex-start',
            color: theme.colors['Error'],
            fontFamily: 'OpenSans_400Regular',
            paddingLeft: 47,
          }),
          dimensions.width
        )}
      >
        {Constants['XANO_ERROR_MESSAGE']}
      </Text>

      <View style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}>
        {/* Email */}
        <TextInput
          onChangeText={newEmailValue => {
            try {
              setTextInput2Value(newEmailValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'],
              { marginBottom: 15, width: 300 }
            ),
            dimensions.width
          )}
          placeholder={'Email'}
          value={textInput2Value}
          autoCapitalize={'none'}
        />
        {/* Password */}
        <TextInput
          onChangeText={newPasswordValue => {
            const textInputValue = newPasswordValue;
            try {
              setTextInput3Value(newPasswordValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'],
              { marginBottom: 15 }
            ),
            dimensions.width
          )}
          placeholder={'Password'}
          value={textInput3Value}
          autoCapitalize={'none'}
        />
        {/* Log in */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                setGlobalVariableValue({
                  key: 'XANO_ERROR_MESSAGE',
                  value: '',
                });
                const LogInResponse = await RollUpApi.logInPOST(Constants, {
                  email: textInput2Value,
                  password: textInput3Value,
                });
                const authToken = LogInResponse?.authToken;
                const XanoErrorMessage = LogInResponse?.message;
                setGlobalVariableValue({
                  key: 'XANO_ERROR_MESSAGE',
                  value: XanoErrorMessage,
                });
                if (!authToken) {
                  return;
                }
                setGlobalVariableValue({
                  key: 'XANO_AUTHORIZATION_HEADER',
                  value: 'Bearer ' + authToken,
                });
                navigation.navigate('UserHomeScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Log In'}
        />
        {/* Cancel */}
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
              alignSelf: 'center',
              fontFamily: 'OpenSans_400Regular',
              marginTop: 10,
            }),
            dimensions.width
          )}
          title={'Cancel'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LogInScreen);
