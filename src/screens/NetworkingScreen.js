import React, { useState,useRef, useEffect } from 'react';
import { StyleSheet, Text, View,Dimensions,FlatList,Modal,ScrollView,TouchableOpacity,TextInput } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { colors } from '../constants/theme';
import PersonCard from '../components/PersonCard'
import JobsCard from '../components/JobsCard'
import {Ionicons} from '@expo/vector-icons';
import { RadioButton, Checkbox} from 'react-native-paper';
import CheckboxGroup from 'react-native-checkbox-group'
import BrickList from 'react-native-masonry-brick-list';
import AsyncStorage from '@react-native-async-storage/async-storage';


const myInterests=['Gardening', 'Cooking','Singing','Coding']


const data=[
    {
        id:'1',
        name:'Medhavi Srivastava',
        img_uri:'https://cdn5.vectorstock.com/i/1000x1000/73/04/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg',
        interests:[{name:'Sports'},{name:'Sketching'},{name:'Coding'},{name:'Singing'}],
        location:{city:'Allahabad', country:'India'},
        socialMedia:{insta:'medhavi_17', linked:null, git:'Medhavi-16', twitter:'MedhaviSrivas11',email:'medhavi.srivastava16@gmail.com'}
    },
    {
        id:'2',
        name:'Utkarsha Srivastava',
        img_uri:'https://cdn1.vectorstock.com/i/1000x1000/73/15/female-avatar-profile-icon-round-woman-face-vector-18307315.jpg',
        interests:[{name:'Cooking'},{name:'Gardening'},{name:'Singing'},{name:'Coding'}],
        location:{city:'Allahabad', country:'India'},
        socialMedia:{insta:'medhavi_17', linked:null, git:'Medhavi-16', twitter:'MedhaviSrivas11',email:'ashutosh.kumars2617@gmail.com'}

    },
    {
        id:'3',
        name:'Seema Srivastava',
        img_uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCekagxHdpZ9bkHrz0nN0tO_f4r-pzU1S-Q&usqp=CAU',
        interests:[{name:'DIY'},{name:'Biking'},{name:'Blogging'}],
        location:{city:'Allahabad', country:'India'},
        socialMedia:{insta:'medhavi_17', linked:null, git:'Medhavi-16', twitter:'MedhaviSrivas11',email:'medhavi.srivastava16@gmail.com'}
    },
    {
        id:'4',
        name:'Gargi Srivastava',
        img_uri:'https://cdn3.vectorstock.com/i/1000x1000/72/82/female-avatar-profile-icon-round-woman-face-vector-18307282.jpg',
        interests:[{name:'DIY'},{name:'Biking'},{name:'Travel'},{name:'Blogging'}],
        location:{city:'Allahabad', country:'India'},
        socialMedia:{insta:'medhavi_17', linked:null, git:'Medhavi-16', twitter:'MedhaviSrivas11',email:'medhavi.srivastava16@gmail.com'}
    },
]



const postings=[
  {
      id:'1',
      name:'Medhavi Srivastava',
      author_id:1,
      img_uri:'https://cdn5.vectorstock.com/i/1000x1000/73/04/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg',
      interests:[{name:'Software Development'},{name:'Coding'},{name:'UI'}],
      title: 'Need a person to collaborate for a hackathon'
  },
  {
      id:'2',
      name:'Utkarsha Srivastava',
      author_id:2,
      img_uri:'https://cdn1.vectorstock.com/i/1000x1000/73/15/female-avatar-profile-icon-round-woman-face-vector-18307315.jpg',
      interests:[{name:'Java'},{name:'Software Engineering'},{name:'SDE'},{name:'Internship'}],
      title:'ABC company is looking for a Java Developer'
  },
]




const FirstRoute = props => {
    const[list,setList]=useState(data)
    const[modalVisible,setModalVisible]=useState(false)
    //const[selectedItems,setSelectedItems]=useState([])
    const [value, setValue] = React.useState('all');
    const selectedItems=useRef()
    const renderPerson=({item})=>{
      return(
              <PersonCard item={item}/>)
  }

    const filterList=()=>{
        //setList([])
        var arr=[];
        for(var i=0;i<data.length;i++)
        {
            
            for(var j=0;j<data[i].interests.length;j++)
            {
                var found=selectedItems.current.includes(data[i].interests[j].name)
                if(found)
                {
                    console.log(data[i].name)
                    arr.push(data[i])
                    //console.log(list[0])
                    break;
                }
            }
            setModalVisible(false)
            setList(arr)
            
        }
    }

    const valueChanged=(newValue)=>{
        setValue(newValue)
        if(newValue=='all')
        {
            setList(data)
            setModalVisible(false)
        }
        else if(newValue=='match')
        {
            selectedItems.current=myInterests
            filterList()
        }
        else if(newValue=='categories')
        {
            selectedItems.current=[]
        }
        
    }

    const onDone=()=>{
        setModalVisible(false)
        filterList()
    }
  
    return(
    <View style={[styles.scene, { backgroundColor: colors.white,flex: 1 }]} >
        <Modal animationType='slide' transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <ScrollView  contentContainerStyle={{alignItems:'center'}}>
                <RadioButton.Group  onValueChange={newValue => valueChanged(newValue)} value={value}>
                  <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row', marginEnd:5}}>
                        <Text style={{textAlignVertical:'center'}}>All</Text>
                        <RadioButton value="all" color={colors.accent} uncheckedColor={colors.tertiary}/>
                    </View>
                    <View style={{flexDirection:'row', marginEnd:5}}>
                        <Text style={{textAlignVertical:'center'}}>Match with you</Text>
                        <RadioButton value="match" color={colors.accent} uncheckedColor={colors.tertiary}/>
                    </View>
                    <View style={{flexDirection:'row', marginEnd:5}}>
                        <RadioButton value="categories" color={colors.accent} uncheckedColor={colors.tertiary}/>
                        <View style={{flexDirection:'column'}}>
                        <Text style={{textAlignVertical:'center'}}>Select Categories</Text>
                        {value=='categories'?(
                            <View>
                            <CheckboxGroup
                              callback={(selected) => { console.log(selected); selectedItems.current=selected }}
                              iconColor={"#00a2dd"}
                              iconSize={30}
                              checkedIcon="ios-checkbox-outline"
                              uncheckedIcon="ios-square-outline"
                              iconColor={colors.accent}
                              checkboxes={[
                                {
                                  label: "Coding", // label for checkbox item
                                  value: "Coding", // selected value for item, if selected, what value should be sent?
                                  selected: true // if the item is selected by default or not.
                                },
                                {
                                    label: "Cooking", // label for checkbox item
                                    value: "Cooking",
                                },
                                {
                                    label: "Sketching", // label for checkbox item
                                    value: "Sketching",
                                },
                                {
                                    label: "Travel", // label for checkbox item
                                    value: "Travel",
                                },
                                {
                                    label: "Blogging", // label for checkbox item
                                    value: "Blogging",
                                },
                                {
                                    label: "Singing", // label for checkbox item
                                    value: "Singing",
                                },
                                {
                                    label: "Gardening", // label for checkbox item
                                    value: "Gardening",
                                },
                              ]}
                              labelStyle={{
                                color: '#333'
                              }}
                              rowStyle={{
                                flexDirection: 'row'
                              }}
                              rowDirection={"column"}
                            />
                            <TouchableOpacity onPress={()=>onDone()} style={{marginStart:10, borderColor:colors.tertiary,backgroundColor:colors.white,borderWidth:2, borderRadius:40, padding:7, elevation:3,width:120}}><Text style={{color:colors.secondary,textAlign:'center'}}>Done</Text></TouchableOpacity>
                                            </View>
                                        ):(null)}
                        
                        </View>
                    </View>
                  </View>
                </RadioButton.Group>
            </ScrollView>
            </View>
            </View>
        </Modal>
        <FlatList
        data={list}
        renderItem={renderPerson}
        keyExtractor={(item)=>item.id}/>
        <TouchableOpacity onPress={()=>setModalVisible(true)}
        style={{elevation:5, justifyContent:'center', alignSelf:'flex-end', backgroundColor:colors.accent, height:50, width:50, borderRadius:25, marginBottom:5, marginEnd:5}}>
        <Ionicons name='filter-outline' size={30} color={colors.white} style={{alignSelf:'center', }} />
        </TouchableOpacity>
        </View>
    )
    };
   
  const SecondRoute = () => {
    const user = useRef(null)
    useEffect(()=>{
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key')
          user.current=jsonValue != null ? JSON.parse(jsonValue) : null;
          console.log(user.current)
        } catch(e) {
          // error reading value
        }
      }
      getData()
    },[])

    const [posts,setPosts]=useState(postings)
    //posts.current=postings
    const renderJobs=({item})=>{
      return(
              <JobsCard item={item} user={findUser(item.author_id)}/>)
    }
    const[modalVisible,setModalVisible]=useState(false)
    const findUser=(id)=>{
      for(var i=0;i<data.length;i++)
      {
        if(data[i].id==id)
        {
          return data[i]
        }
      }
    }
    const tags=useRef(new Array())
    const currentTag=useRef()
    const title=useRef()
    const[tagInput,setTagInput] = useState(false)

    return(
      <View style={[styles.scene, { backgroundColor: colors.white,flex: 1 }]} >
        <Modal animationType='slide' transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
            <TouchableOpacity onPress={()=>setModalVisible(false)}>
                        <Ionicons name='close-outline' size={45} color={colors.black}/>
                    </TouchableOpacity>
                <View style={styles.modalView}>
                  <TextInput placeholder='Title' style={{borderWidth:1,borderRadius:3, padding:3, borderColor:colors.secondary}} onChangeText={(tit)=>title.current=tit}/>
                  <TextInput placeholder='Description' numberOfLines={3} style={{borderWidth:1,borderRadius:3, padding:3, borderColor:colors.secondary, marginVertical:3}}/>
                  <TouchableOpacity onPress={()=>{setTagInput(true);}} style={{marginTop:5, marginVertical:3,justifyContent:'space-between',backgroundColor:colors.accent,borderRadius:20,flexDirection:'row',width:110,height:30, paddingHorizontal:5,paddingVertical:4}}>
                  <Text style={{textAlign:'center', textAlignVertical:'center', color:colors.white,marginStart:5}}>Add a tag</Text>
                  <Ionicons name='add-circle-outline' color={colors.white} size={20} style={{justifyContent:'center', alignSelf:'center'}}/>
                  </TouchableOpacity>
                  {tagInput!=false?(
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TextInput
                    placeholder='Add tag name'
                    onChangeText={(tag)=>currentTag.current=tag}
                    style={{borderColor:colors.accent,borderRadius:20,borderWidth:1,paddingHorizontal:7,marginBottom:5}}/>
                    <TouchableOpacity onPress={()=>{setTagInput(false); tags.current=[...tags.current,{name:currentTag.current}]}} style={{justifyContent:'center',borderColor:colors.secondary,borderWidth:1,width:30,height:30,borderRadius:25}}>
                      <Ionicons name='checkmark' size={25} color={colors.secondary} style={{alignSelf:'center'}}/>
                    </TouchableOpacity>
                    </View>
                  ):(null)}
                  {tags.current.length>0?(
                    <BrickList
                    data={tags.current}
                    renderItem={prop => {
                      return (
                          <View
                            key={prop.name}
                            style={styles.preferencesItem} >
                            <Text style={styles.preferenceText}>{prop.name}</Text>
                          </View>
                      );
                    }}
                    columns={3}
                    rowHeight={45}/>
                  ):(null)}
                  <TouchableOpacity onPress={()=>{const arr=[...posts,{id:3,author_id:user.current['id'],name:user.current['name'],img_uri:user.current['img_uri'],title:title.current,interests:tags.current}]; setModalVisible(false); setPosts(arr)}} style={{alignSelf:'center',width:100,paddingVertical:5,backgroundColor:colors.primary,borderColor:colors.secondary,borderWidth:1, borderRadius:40,elevation:5, justifyContent:'center',}}>
                        <Text style={{textAlign:'center',fontSize:15,color:colors.secondary}}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        <FlatList
            data={posts}
            renderItem={renderJobs}
            keyExtractor={(item)=>item.id}/>
          <TouchableOpacity onPress={()=>{setModalVisible(true); tags.current=[]}}
            style={{elevation:5, justifyContent:'center', alignSelf:'flex-end', backgroundColor:colors.accent, height:50, width:50, borderRadius:25, marginBottom:5, marginEnd:5}}>
            <Ionicons name='add-outline' size={30} color={colors.white} style={{alignSelf:'center', }} />
          </TouchableOpacity>
      </View>
    )
  };
   
  const initialLayout = { width: Dimensions.get('window').width };
  const tabBar={activeColor:colors.accent}
   
  export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const[list,setList]=useState(data)

    const [routes] = React.useState([
      { key: 'first', title: 'Find People' },
      { key: 'second', title: 'Find Job/Collaboration Opportunities' },
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        flexDirection: 'column',
        width: Dimensions.get('window').width - 20
      },
      preferencesItem: {
        marginHorizontal: 2,
        borderRadius: 20,
        borderColor: colors.secondary,
        borderWidth: 1,
        backgroundColor: colors.white,
        
      },
      preferenceText: {
        color: colors.secondary,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 3,
        fontSize:12
      },
  });