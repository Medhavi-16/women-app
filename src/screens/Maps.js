import React,{useState,useEffect} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import axios from 'axios';

const Maps=props=> {
  const [permissionStatus, setPermissionStatus]=useState(false)
  const [currentCo, setCurrentCo]=useState(null)
  const [mapRegion,setMapRegion]=useState(null)
  const [poi,setPoi]=useState([])
  useEffect(()=>{
    const getPermission = async()=>{
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     setPermissionStatus(true)}   }
    getPermission();
  },[]);
  useEffect(()=>{
    const getLocation = async()=>{
   let location = await Location.getCurrentPositionAsync({});
     setCurrentCo(JSON.stringify(location));
     setMapRegion({ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.05, longitudeDelta: 0.05 })
     if(mapRegion!=null)
     {
      console.log('MapRegion',mapRegion)
     }
    }
    getLocation(); 
  },[]);
  useEffect(()=>{
    const getPoi = async()=>{
   
      axios(`https://api.tomtom.com/search/2/poiSearch/${props.route.params.id}.json?lat=${mapRegion['latitude']}&lon=${mapRegion['longitude']}&key=hzrtjCQydCAfYutKyg6U5HSW1vGZQsu9`
     ).then(response=>{
       setPoi(response.data['results']);
       console.log("poi",poi[0])
     })
     }
    getPoi(); 
  },[]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{...mapRegion}}
      showsPointsOfInterest={true}/>
    </View>
  );
}
export default Maps

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});