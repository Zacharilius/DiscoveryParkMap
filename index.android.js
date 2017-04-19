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

const southBeachTrail = [{latitude:47.65812981009859,longitude:-122.42365451444181},{latitude:47.65814297777502,longitude:-122.42371173688507},{latitude:47.65816970603837,longitude:-122.42376125561427},{latitude:47.65822322176154,longitude:-122.42385624305038},{latitude:47.658247039017986,longitude:-122.42391785413542},{latitude:47.65828998861587,longitude:-122.42398410401454},{latitude:47.65829993133981,longitude:-122.42405746664518},{latitude:47.65830696404089,longitude:-122.42414291488282},{latitude:47.658302806494625,longitude:-122.4242442499767},{latitude:47.658309782382325,longitude:-122.42433375516315},{latitude:47.65832280582838,longitude:-122.42438286025866},{latitude:47.658357815838954,longitude:-122.42442857566498},{latitude:47.65840635668914,longitude:-122.42448687993137},{latitude:47.658419270304826,longitude:-122.42454409912074},{latitude:47.65843492124487,longitude:-122.42460139813443},{latitude:47.65839335342708,longitude:-122.42463259768596},{latitude:47.65832517025269,longitude:-122.42460615996103},{latitude:47.65828857593209,longitude:-122.42467403422643},{latitude:47.65827990067935,longitude:-122.42470623654411},{latitude:47.65826054435941,longitude:-122.42471781995842},{latitude:47.658254609932676,longitude:-122.42475011015095},{latitude:47.65825627376368,longitude:-122.42482727276459},{latitude:47.65828545799744,longitude:-122.42489716596643},{latitude:47.65832897395698,longitude:-122.42492284883846},{latitude:47.65834216729225,longitude:-122.4249597793447},{latitude:47.65835530476202,longitude:-122.42500077081198},{latitude:47.65840675898916,longitude:-122.42504699016959},{latitude:47.65846386238796,longitude:-122.42508120659599},{latitude:47.65854648608394,longitude:-122.42505532710446},{latitude:47.65861986738406,longitude:-122.42510222208398},{latitude:47.658649395317795,longitude:-122.42514777037967},{latitude:47.658692794216606,longitude:-122.4251815674266},{latitude:47.65873048803898,longitude:-122.4252314285722},{latitude:47.658746648974336,longitude:-122.42525221690016},{latitude:47.658797987004,longitude:-122.42530654935261},{latitude:47.65898283928446,longitude:-122.42542179667936},{latitude:47.65926539580135,longitude:-122.42560903709736},{latitude:47.659690368679115,longitude:-122.42580875451256},{latitude:47.659707227638556,longitude:-122.42582246461684},{latitude:47.659793387158174,longitude:-122.42589308713711},{latitude:47.65993118800804,longitude:-122.42603936613345},{latitude:47.66002979916712,longitude:-122.42607434908365},{latitude:47.66014509023696,longitude:-122.42603780223163},{latitude:47.66032489531437,longitude:-122.42592560568744},{latitude:47.660385319451706,longitude:-122.42589397297444},{latitude:47.66044215710579,longitude:-122.42587389676275},{latitude:47.66048778705679,longitude:-122.42586463892374},{latitude:47.66053206758859,longitude:-122.42586599548474}]

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
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE,
        },
        {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE - SPACE,
        },
        {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE + SPACE,
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE + SPACE,
        },
      ],
      southBeachTrail: southBeachTrail,
    };
  }
  render() {
    const { region, polygon, southBeachTrail } = this.state;
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
          <MapView.Polyline
            coordinates={southBeachTrail}
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
