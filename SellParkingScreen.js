import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Link,
  NumberInput,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Text, TextInput, View, useWindowDimensions } from 'react-native';

const SellParkingScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [numberInput2Value, setNumberInput2Value] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInput3Value, setTextInput3Value] = React.useState('');
  const [textInput4Value, setTextInput4Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            alignSelf: 'center',
            fontFamily: 'OpenSans_800ExtraBold',
            fontSize: 30,
            marginTop: 30,
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Great, we need a little more information...'}
      </Text>

      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', marginTop: 20 },
          dimensions.width
        )}
      >
        {/* Street Address */}
        <TextInput
          onChangeText={newStreetAddressValue => {
            const textInputValue = newStreetAddressValue;
            try {
              setTextInputValue(newStreetAddressValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'],
              { marginBottom: 20, marginTop: 20, width: 300 }
            ),
            dimensions.width
          )}
          placeholder={'Street Adress'}
          value={textInputValue}
          autoCapitalize={'none'}
        />
        {/* City */}
        <TextInput
          onChangeText={newCityValue => {
            const textInputValue = newCityValue;
            try {
              setTextInput2Value(newCityValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'],
              { marginBottom: 20, marginTop: 20, width: 300 }
            ),
            dimensions.width
          )}
          placeholder={'City'}
          value={textInput2Value}
          autoCapitalize={'none'}
        />
        {/* State */}
        <TextInput
          onChangeText={newStateValue => {
            const textInputValue = newStateValue;
            try {
              setTextInput3Value(newStateValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'],
              { marginBottom: 20, marginTop: 20, width: 300 }
            ),
            dimensions.width
          )}
          placeholder={'State'}
          value={textInput3Value}
          autoCapitalize={'none'}
        />
        {/* Zip */}
        <NumberInput
          onChangeText={newZipValue => {
            const numberInputValue = newZipValue;
            try {
              setNumberInputValue(newZipValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.NumberInputStyles(theme)['Number Input'],
              { marginBottom: 20, marginTop: 20, width: 300 }
            ),
            dimensions.width
          )}
          value={numberInputValue}
          editable={true}
          placeholder={'Zip Code'}
        />
        {/* Spots */}
        <NumberInput
          onChangeText={newSpotsValue => {
            const numberInputValue = newSpotsValue;
            try {
              setNumberInput2Value(newSpotsValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.NumberInputStyles(theme)['Number Input'],
              { marginBottom: 20, marginTop: 20, width: 300 }
            ),
            dimensions.width
          )}
          value={numberInput2Value}
          editable={true}
          placeholder={'Number of parking spots available'}
        />
        {/* Submit */}
        <Button
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              marginBottom: 10,
              width: 300,
            }),
            dimensions.width
          )}
          title={'Get Started'}
        />
        {/* Skip */}
        <Link
          onPress={() => {
            try {
              navigation.navigate('UserHomeScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.LinkStyles(theme)['Link'],
            dimensions.width
          )}
          title={'Skip for now'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SellParkingScreen);
