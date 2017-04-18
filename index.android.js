/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 47.6573;
const LONGITUDE = -122.4055;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const SPACE = 0.01;

export default class DiscoveryParkMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      polygon: [
        {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE + SPACE,
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE,
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE + SPACE,
        },
      ],
    };
  }
  render() {
    const { region, polygon } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          mapType={MapView.MAP_TYPES.HYBRID}
          style={styles.map}
          region={region}
        >
          <MapView.Polygon
            coordinates={polygon}
            fillColor="rgba(0, 200, 0, 0.5)"
            strokeColor="rgba(0,0,0,0.5)"
            strokeWidth={2}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

AppRegistry.registerComponent('DiscoveryParkMap', () => DiscoveryParkMap);
