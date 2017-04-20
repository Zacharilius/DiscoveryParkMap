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

import trailsGeojson from './geojson/seattle_park_trails.json';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 47.6573;
const LONGITUDE = -122.4055;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// Convert from geojson to {latitude: ..., longitude: ...}
var trails = [];
var features = trailsGeojson.features;
for (var i in features) {
  var feature = features[i];
  var properties = feature.properties;
  var trailCoordinates = [];
  if (properties.pma_name === 'Discovery Park') {
    for (var j in feature.geometry.coordinates) {
      var coordinates = feature.geometry.coordinates[j];
      if (coordinates.length == 2) {
        trailCoordinates.push({latitude: coordinates[1], longitude: coordinates[0]});
      }
    trails.push(trailCoordinates);
    }
  }
}

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
      trail: trails[0],
    };
  }
  render() {
    const {region, trail} = this.state;
    return (
      <View style={styles.container}>
        <MapView
          mapType={MapView.MAP_TYPES.HYBRID}
          style={styles.map}
          region={region}
        >
          <MapView.Polyline
            coordinates={trail}
            strokeColor="#ff7800"
            strokeWidth={3}
            lineDashPattern={[5, 2, 3, 2]}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
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
