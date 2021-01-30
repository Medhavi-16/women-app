import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList, Dimensions } from 'react-native';
import {colors} from '../constants/theme'
import Constant from 'expo-constants';
import axios from 'axios';
import base64 from 'react-native-base64';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const carousalItems=[
  {uri:'https://i.pinimg.com/564x/24/4c/11/244c110b0505fc65fbc55070fbf2abbc.jpg'},
  {uri:'https://i.pinimg.com/564x/1b/a2/44/1ba2449fe29e62de01c4ec969e1e86e3.jpg'},
  {uri:'https://i.pinimg.com/236x/91/1b/0e/911b0ede774cf4b22d7aa21cdb5d131a.jpg'},
  {uri:'https://i.pinimg.com/564x/42/cc/18/42cc18bb5baee5baee7dc497e6d0d7a3.jpg'}

]

const HomeScreen=props=>{
    const [playlist, setPlaylist] = useState([]);
    const myInterests=[{name:'Gardening'}, {name:'Cooking'},{name:'Singing'},{name:'Coding'}]
    const socialMedia={insta:'medhavi_17', linked:null, git:'Medhavi-16', twitter:'MedhaviSrivas11',email:'medhavi.srivastava16@gmail.com'}
    const location={country:'India',city:'Lucknow'}
    const item={id:5,name:'Clara Dev', interests:myInterests,socialMedia:socialMedia, location:location,img_uri:'https://cdn5.vectorstock.com/i/1000x1000/73/04/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg'}

    useEffect(()=>{
      const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(item)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
          //console.log(jsonValue)
        } catch (e) {
          // saving error
        }
      }
      storeData()
    },[])
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
       
      const renderCarousalItem=({item,index})=>{
                return (
                  <View style={{
                      backgroundColor:'floralwhite',
                      borderRadius: 5,
                      height: 180,
                      width:200,
                      marginStart:100,
                      marginTop:10,
                      elevation:5
                      
                     }}>
                    <Image
                    source={{uri:item.uri}}
                    style={{borderRadius: 5,
                      height: 180,
                      width:200,}}/>
                  </View>

                )
            }




    return(
        <View style={styles.container}>
          <ScrollView>

          
        <View style={styles.header}>
          <View>
            <Text style={styles.helloText}>Hello!</Text>
            <Text style={styles.nameText}>Clara Dev</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Profile',{item:item});
            }}
          >
            <View style={styles.avatar}>
              <Image
                source={{uri:item.img_uri.toString()}}
                style={{ width: 60, height: 60, borderRadius:30 }}
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
              id: 'toilet',
            });
          }}
          style={styles.wc}>
            <Image
                source={require('../../assets/wc.jpg')}
                style={{ width: 60, height: 60, borderRadius:30, marginStart:-5, marginTop:-7 }}
              />
              <Text style={{alignSelf:'center',marginStart:10, fontSize:17}}>Find Washrooms</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Maps', {
              id: 'police station',
            });
          }}
          style={styles.police}>
            <Image
                source={require('../../assets/vector-police-station.png')}
                style={{ width: 60, height: 60, borderRadius:30, marginStart:-5,marginTop:-7 }}
              />
              <Text style={{alignSelf:'center',marginStart:10, fontSize:17}}>Find Police Stations</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Maps', {
              id: 'wc',
            });
          }}
          style={styles.whm}>
            <Image
                source={require('../../assets/whm.jpeg')}
                style={{ width: 60, height: 60, borderRadius:30, marginStart:-5,marginTop:-7 }}
              />
              <Text style={{alignSelf:'center',marginStart:10, fontSize:17}}>Find Women Support Centres</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize:15, alignSelf:'center', marginTop:25, textDecorationLine:'underline'}}>The week's topic: Self Defense</Text>
        <Carousel
                  layout={'stack'}
                  //ref={ref => this.carousel = ref}
                  data={carousalItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={renderCarousalItem}
                  //onSnapToItem = { index => this.setState({activeIndex:index}) } 
                  />
                  </ScrollView>
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
        width:Dimensions.get('window').width-15,
        height:40,
        backgroundColor:colors.lightPink,
        borderRadius:80,
        flexDirection:'row'
      },
      police:{
        marginStart:10,
        elevation:10,
        width:Dimensions.get('window').width-15,
        height:40,
        backgroundColor:'#D4F1F4',
        borderRadius:80,
        flexDirection:'row',
        marginTop:7
      },
      whm:{
        marginStart:10,
        elevation:10,
        width:Dimensions.get('window').width-15,
        height:40,
        backgroundColor:colors.cream,
        borderRadius:80,
        flexDirection:'row',
        marginTop:7
      }
})