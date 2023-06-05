import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapCallout, MapMarker, MapView } from '@draftbit/maps';
import { Link, ScreenContainer, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const AddressCheckScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      {/* Map */}
      <MapView
        style={StyleSheet.applyWidth(
          GlobalStyles.MapViewStyles(theme)['Map View'],
          dimensions.width
        )}
        latitude={37.40241}
        longitude={-122.12125}
        zoom={8}
        zoomEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        loadingEnabled={true}
        showsPointsOfInterest={true}
        customMapStyle={'Beautiful West Coast Villa'}
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        showsUserLocation={true}
        followsUserLocation={true}
        mapType={'standard'}
      >
        <MapMarker pinImageSize={50}>
          <MapCallout showTooltip={true}>
            <Link
              style={StyleSheet.applyWidth(
                GlobalStyles.LinkStyles(theme)['Link'],
                dimensions.width
              )}
              title={'Get Started'}
            />
          </MapCallout>
        </MapMarker>
      </MapView>
    </ScreenContainer>
  );
};

export default withTheme(AddressCheckScreen);
