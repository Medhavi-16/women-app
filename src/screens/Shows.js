import React, { useEffect, Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from 'react-native';
import axios from 'axios';
import base64 from 'react-native-base64';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Constant from 'expo-constants';
import { colors } from '../constants/theme';

const Shows = props => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    //console.log(props.route.params.id);
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          base64.encode(
            '85acc1ba7c3a4349b1abca61d53e2b26' +
              ':' +
              'ae1de5a2ad0c4ab4983f3d0a3b22ae68'
          )
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(tokenResponse => {
      axios(
        //`https://api.spotify.com/v1/playlists/${props.route.params.id}/tracks?limit=10`,
        `https://api.spotify.com/v1/shows/${props.route.params.id}?market=GB`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + tokenResponse.data.access_token
          }
        }
      ).then(episodesResponse => {
          console.log("episode",episodesResponse.data['episodes']['items'])
       setEpisodes(episodesResponse.data['episodes']['items']);
      });
    });
    console.log(props.route.params.title+" "+props.route.params.id);
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{props.route.params.title}</Text>
        {episodes.map(item => {
          return (
            item.audio_preview_url && (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Episode', {
                    audio: item.audio_preview_url,
                    track: item.uri,
                    image: item.images[0].url
                  });
                }}
                key={item.id}
              >
                <View style={styles.trackContainer}>
                  <Image
                    source={{ uri: item.images[0].url }}
                    style={{ width: 150, height: 150, borderRadius: 10 }}
                  />
                </View>
              </TouchableOpacity>
            )
          );
        })}
        {/* <FlatList
          renderItem={renderItem}
          data={tracks}
          keyExtractor={item => item.track.id}s
        /> */}
      </View>
    </ScrollView>
  );
};

export default Shows;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    paddingBottom: Constant.statusBarHeight,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.primary
  },
  trackContainer: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    width: '100%',
    padding: 10,
    paddingTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: colors.tertiary,
    color: colors.white,
    textAlign: 'center'
  }
});