import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as RollUpApi from '../apis/RollUpApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, Link, ScreenContainer, Switch, withTheme } from '@draftbit/ui';
import { Text, TextInput, View, useWindowDimensions } from 'react-native';

const SignUpScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [SignUpName, setSignUpName] = React.useState(textInputValue);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [switchValue2, setSwitchValue2] = React.useState(false);
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
      {/* Sign Up */}
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
        {'Sign Up\n'}
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
        {/* Name */}
        <TextInput
          onChangeText={newNameValue => {
            try {
              setTextInputValue(newNameValue);
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
          placeholder={'name'}
          value={textInputValue}
          autoCapitalize={'none'}
        />
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
              { marginBottom: 15 }
            ),
            dimensions.width
          )}
          placeholder={'email'}
          value={textInput2Value}
          autoCapitalize={'none'}
        />
        {/* Password */}
        <TextInput
          onChangeText={newPasswordValue => {
            try {
              setTextInput3Value(newPasswordValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'],
              { marginBottom: 30 }
            ),
            dimensions.width
          )}
          placeholder={'password'}
          value={textInput3Value}
          autoCapitalize={'none'}
          secureTextEntry={true}
          textContentType={'password'}
        />
        <Switch
          onValueChange={newSwitchValue => {
            const switchValue = newSwitchValue;
            try {
              setSwitchValue2(newSwitchValue);
            } catch (err) {
              console.error(err);
            }
          }}
          value={switchValue2}
        />
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              alignSelf: 'center',
              marginTop: -20,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Do you have parking to sell?'}
        </Text>
        {/* Sign Up */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                setGlobalVariableValue({
                  key: 'XANO_ERROR_MESSAGE',
                  value: '',
                });
                const SignUpResponse = await RollUpApi.signUpPOST(Constants, {
                  email: textInput2Value,
                  name: textInputValue,
                  password: textInput3Value,
                });
                const authtoken = SignUpResponse?.authToken;
                const XanoErrorMessage = SignUpResponse?.message;
                setGlobalVariableValue({
                  key: 'XANO_ERROR_MESSAGE',
                  value: XanoErrorMessage,
                });
                if (!authtoken) {
                  return;
                }
                setGlobalVariableValue({
                  key: 'XANO_AUTHORIZATION_HEADER',
                  value: 'Bearer ' + authtoken,
                });
                if (switchValue2) {
                  navigation.navigate('SellParkingScreen');
                }
                if (switchValue2) {
                  return;
                }
                navigation.navigate('UserHomeScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              marginTop: 30,
            }),
            dimensions.width
          )}
          title={'Sign Up'}
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
              color: theme.colors['Primary'],
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

export default withTheme(SignUpScreen);
