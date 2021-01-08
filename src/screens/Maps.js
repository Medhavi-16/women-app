import React,{useState,useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import axios from 'axios';
import MapReviews from '../components/MapReviews'
import RBSheet from "react-native-raw-bottom-sheet";

const Maps=props=> {
  const [permissionStatus, setPermissionStatus]=useState(false)
  const [currentCo, setCurrentCo]=useState(null)
  const [mapRegion,setMapRegion]=useState(null)
  const [poi,setPoi]=useState([])
  const [poiImage,setPoiImage]=useState('')
  const [selectedMarker, setSelectedMarker]=useState(null)
  const refRBSheet = useRef()
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
     setMapRegion({ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.04, longitudeDelta: 0.04 })
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

  const markerClick=(item)=>{
    console.log("Marker was clicked")
    setSelectedMarker(item)
    refRBSheet.current.open()
  }


  const mapMarkers=()=>{
    if(props.route.params.id=='toilet')
    {
      return poi.map((item) => <MapView.Marker
      key={item['id']}
      coordinate={{ latitude: item['position']['lat'], longitude: item['position']['lon'] }}
      title={item['name']}
      description={item['name']}
      image={require("../../assets/toilet.png")}
      style={{width:50, height:50}}
      onPress={(e) => {e.stopPropagation(); markerClick(item)}}
       >
 
    </MapView.Marker >)
    }
    else{
      return poi.map((item) => <MapView.Marker
      key={item['id']}
      coordinate={{ latitude: item['position']['lat'], longitude: item['position']['lon'] }}
      title={item['name']}
      description={item['name']}
      image={require("../../assets/police.png")}
      style={{width:50, height:50}}
      onPress={(e) => {e.stopPropagation(); markerClick(item)}}
    >
    </MapView.Marker >)
    }  

  }
  

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{...mapRegion}}
      showsPointsOfInterest={true}
      showsUserLocation={true}>
      {mapMarkers()}
      </MapView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <MapReviews
        marker={selectedMarker}
        id={props.route.params.id}/>
      </RBSheet>
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