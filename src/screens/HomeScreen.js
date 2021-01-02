import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList, Dimensions } from 'react-native';
import {colors} from '../constants/theme'
import Constant from 'expo-constants';
import axios from 'axios';
import base64 from 'react-native-base64';

const HomeScreen=props=>{
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
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
            //`https://api.spotify.com/v1/search?q=taylor&type=album`,
            `https://api.spotify.com/v1/search?q=women%2Cempowerment%2Cinspiration&type=show&market=GB`,
            //`https://api.spotify.com/v1/search?q=women&type=show&market=EN`,
            //`https://api.spotify.com/v1/browse/categories/${'wellness'}/playlists?limit=10`,
            {
              method: 'GET',
              headers: {
                Authorization: 'Bearer ' + tokenResponse.data.access_token
              }
            }
          ).then(playlistResponse => {
            //console.log('playlist', playlistResponse.data.playlists.items);
            //console.log('response',playlistResponse.data['shows']['items'])
           setPlaylist(playlistResponse.data['shows']['items'])
            //setPlaylist(playlistResponse.data.playlists.items);
          });
        });
      }, []);





      const renderItem = ({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Shows', {
                id: item.id,
                title: item.name
              });
            }}
          >
            <View style={styles.track}>
              <View style={styles.trackImage}>
                <Image
                  source={{ uri: item['images'][0]['url'] }}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 10
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      };





    return(
        <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.helloText}>Hello!</Text>
            <Text style={styles.nameText}>Clara Dev</Text>
          </View>
          <TouchableOpacity
            // onPress={() => {
            //   props.navigation.navigate('Profile');
            // }}
          >
            <View style={styles.avatar}>
              <Image
                source={require('../../assets/avatar.png')}
                style={{ width: 60, height: 60 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tracksContainer}>
            <Text style={{textAlign:'center'}}>Podcasts for you</Text>
            <FlatList
              renderItem={renderItem}
              data={playlist}
              horizontal={true}
              keyExtractor={item => item.id}
            />
        </View>
        
        <View>
          <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Maps', {
              id: 'wc',
            });
          }}
          style={styles.wc}>
            <Image
                source={require('../../assets/wc.jpg')}
                style={{ width: 60, height: 60, borderRadius:30, marginStart:-5, marginTop:-7 }}
              />
              <Text style={{alignSelf:'center',marginStart:10, fontSize:20}}>Find Toilets</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Maps', {
              id: 'wc',
            });
          }}
          style={styles.police}>
            <Image
                source={require('../../assets/vector-police-station.png')}
                style={{ width: 60, height: 60, borderRadius:30, marginStart:-5,marginTop:-7 }}
              />
              <Text style={{alignSelf:'center',marginStart:10, fontSize:20}}>Find Police Stations</Text>
          </TouchableOpacity>
        </View>
        </View>
       
        
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: colors.secondary,
        paddingBottom: 20,
        borderBottomLeftRadius: 135,
        elevation: 10
      },
      helloText: {
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'column',
        color: colors.white,
        marginTop:30
      },
      nameText: {
        fontSize: 30,
        fontWeight: 'bold',
        flexDirection: 'column',
        color: colors.white
      },
      avatar: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 10,
        width: 70,
        height: 70,
        borderRadius: 90,
        marginRight: 10,
        marginTop: Constant.statusBarHeight + 20,
        marginLeft: 20
      },
      tracksContainer: {
        marginVertical:10,
        padding: 10,
        paddingTop: 0,
        paddingLeft: 20,
        position: 'relative'
      },
      trackTitle: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
      },
      track: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
        position: 'relative'
      },
      trackContent: {
        width: 150,
        height: 150,
        backgroundColor: 'black',
        borderRadius: 10,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingLeft: 10,
        paddingBottom: 10
      },
      trackImage: {
        opacity: 1
      },
      wc:{
        marginStart:10,
        elevation:10,
        width:Dimensions.get('window').width-10,
        height:45,
        backgroundColor:colors.lightPink,
        borderRadius:80,
        flexDirection:'row'
      },
      police:{
        marginStart:10,
        elevation:10,
        width:Dimensions.get('window').width-10,
        height:45,
        backgroundColor:'#D4F1F4',
        borderRadius:80,
        flexDirection:'row',
        marginTop:7
      }
})