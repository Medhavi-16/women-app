import React, { useState } from 'react';
import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { colors } from '../constants/theme';
import PersonCard from '../components/PersonCard'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

const myInterests=['Coding','Gardening', 'Cooking','Singing','Sketching']

const data=[
    {
        id:'1',
        name:'Medhavi Srivastava',
        img_uri:'https://cdn5.vectorstock.com/i/1000x1000/73/04/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg',
        interests:[{name:'Sports'},{name:'Sketching'},{name:'Singing'},{name:'Coding'}]
    },
    {
        id:'2',
        name:'Utkarsha Srivastava',
        img_uri:'https://cdn1.vectorstock.com/i/1000x1000/73/15/female-avatar-profile-icon-round-woman-face-vector-18307315.jpg',
        interests:[{name:'Cooking'},{name:'Gardening'},{name:'Singing'},{name:'Coding'}]
    },
    {
        id:'3',
        name:'Seema Srivastava',
        img_uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCekagxHdpZ9bkHrz0nN0tO_f4r-pzU1S-Q&usqp=CAU',
        interests:[{name:'DIY'},{name:'Biking'},{name:'Travel'},{name:'Blogging'}]
    },
    {
        id:'4',
        name:'Gargi Srivastava',
        img_uri:'https://cdn3.vectorstock.com/i/1000x1000/72/82/female-avatar-profile-icon-round-woman-face-vector-18307282.jpg',
        interests:[{name:'DIY'},{name:'Biking'},{name:'Travel'},{name:'Blogging'}]
    },

]

const renderPerson=({item})=>{
    return(
            <PersonCard item={item}/>)
}

const FirstRoute = () => {
    const[list,setList]=useState(data)
    return(
    <View style={[styles.scene, { backgroundColor: colors.white,flex: 1 }]} >
        <FlatList
        data={list}
        renderItem={renderPerson}
        keyExtractor={(item)=>item.id}/>
        <TouchableOpacity style={{elevation:5, justifyContent:'center', alignSelf:'flex-end', backgroundColor:colors.accent, height:50, width:50, borderRadius:25, marginBottom:5, marginEnd:5}}>
        <Ionicons name='filter-outline' size={30} color={colors.white} style={{alignSelf:'center', }} />
        </TouchableOpacity>
        </View>
    )
    };
   
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: colors.white, flex:1 }]} />
  );
   
  const initialLayout = { width: Dimensions.get('window').width };
  const tabBar={activeColor:colors.accent}
   
  export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const[list,setList]=useState(data)

    const [routes] = React.useState([
      { key: 'first', title: 'Find People' },
      { key: 'second', title: 'Find Job Opportunities' },
    ]);
   
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });
   
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        lazy={true}
        renderTabBar={props => <TabBar {...props} activeColor={colors.black}  inactiveColor={colors.tertiary} 
        tabStyle={{  minHeight: 70,marginTop:30 }} style={{backgroundColor:colors.primary}} indicatorStyle={{backgroundColor:colors.black,height:4}} 
        indicatorContainerStyle={{height:40,backgroundColor:colors.secondary}} 
        renderLabel={({ route,focused }) => (
            focused==true?(
<Text style={{color:colors.black, fontWeight:'bold',  padding: 5 }}>
                {route.title}
            </Text>
            ):
            (<Text style={{color:colors.secondary, margin: 3 }}>
                {route.title}
            </Text>)
            
        )}/>}
      />
    );
  }
   
  const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });