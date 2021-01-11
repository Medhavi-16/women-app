import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, Dimensions,Modal,Image,ScrollView } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import Carousel from 'react-native-snap-carousel';
import { colors } from '../constants/theme';
import {Ionicons} from '@expo/vector-icons';
import { ProgressBar, Colors, RadioButton } from 'react-native-paper';
import SnackBar from 'react-native-snackbar-component'
import CheckboxGroup from 'react-native-checkbox-group'


  

const PadStats=props=>{
    const[items,setItems] = useState([{name:'Stayfree',progress:0.5,color:Colors.blue900},{name:'Whisper',progress:0.1,color:Colors.green500},
    {name:'Pari',progress:0.1,color:Colors.pink100},{name:'Sofy',progress:0.2,color:Colors.pink500},{name:'Other',progress:0.1,color:Colors.amber300}])
    const[visibility,setVisibilty]=useState()
    const [sbModalVisible,setSbModalVisible]=useState(false)
    const[brand,setBrand]=useState(null)
    const brandColour=useRef(null);
    const[modalVisible,setModalVisible]=useState(false)
    const[modal2Visible,setModal2Visible]=useState(false)
    const [value, setValue] = React.useState('Stayfree');
    const [value2, setValue2] = React.useState('Size');
    const[division,setDivision]=useState([{name:'Price',progress:0.1},{name:'Size',progress:0.4},{name:'Absorbtion',progress:0.2},
    {name:'Odour',progress:0.3},{name:'Suitability to skin',progress:0.3},{name:'Overall',progress:0}])

    const renderProgress=({item})=>{
        return(
        <View style={{marginBottom:12}}>
            <Text style={{fontWeight:'700'}}>{item.name}</Text>
            <TouchableOpacity onPress={()=>{setBrand(item.name); brandColour.current=item.color}}>
        <ProgressBar progress={item.progress} color={item.color} style={{height:23,borderRadius:10}} />
        </TouchableOpacity>
        </View>)}

    const renderDivisionProgress=({item})=>{
        return(
        <View style={{marginBottom:7}}>
            <Text style={{fontWeight:'700'}}>{item.name}</Text>
            <TouchableOpacity >
        <ProgressBar progress={item.progress} color={brandColour.current} style={{height:17,borderRadius:10}} />
        </TouchableOpacity>
        </View>)}
        const valueChanged=(newValue)=>{
            setValue(newValue)}
        const value2Changed=(newValue)=>{
            setValue2(newValue)}
        const onModalPress=()=>{
            setModalVisible(false);
            if(value!='Other')
            {
                setModal2Visible(true)
            }}   
        return(
        <View style={styles.container}>
            <ScrollView>
            <Modal animationType='slide' transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{fontWeight:'700',textAlign:'center',marginBottom:7}}>Which sanitary napkin do you use?</Text>
                    <ScrollView  contentContainerStyle={{alignItems:'center'}}>
                        <RadioButton.Group  onValueChange={newValue => valueChanged(newValue)} value={value}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row', marginEnd:5}}>
                                <Text style={{textAlignVertical:'center'}}>Stayfree</Text>
                                <RadioButton value="Stayfree" color={colors.accent} uncheckedColor={colors.tertiary}/>
                            </View>
                            <View style={{flexDirection:'row', marginEnd:5}}>
                                <Text style={{textAlignVertical:'center'}}>Whisper</Text>
                                <RadioButton value="Whisper" color={colors.accent} uncheckedColor={colors.tertiary}/>
                            </View>
                            <View style={{flexDirection:'row', marginEnd:5}}>
                                <Text style={{textAlignVertical:'center'}}>Pari</Text>
                                <RadioButton value="Pari" color={colors.accent} uncheckedColor={colors.tertiary}/>
                            </View>
                            <View style={{flexDirection:'row', marginEnd:5}}>
                                <Text style={{textAlignVertical:'center'}}>Sofy</Text>
                                <RadioButton value="Sofy" color={colors.accent} uncheckedColor={colors.tertiary}/>
                            </View>
                            <View style={{flexDirection:'row', marginEnd:5}}>
                                <Text style={{textAlignVertical:'center'}}>Other</Text>
                                <RadioButton value="Other" color={colors.accent} uncheckedColor={colors.tertiary}/>
                            </View>
                            </View>
                            </RadioButton.Group>
                                    <TouchableOpacity onPress={()=>{onModalPress()}} style={{marginStart:10, borderColor:colors.tertiary,backgroundColor:colors.white,borderWidth:2, borderRadius:40, padding:7, elevation:3,width:120}}><Text style={{color:colors.secondary,textAlign:'center'}}>Done</Text>
                                    </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        <Modal animationType='slide' transparent={true} visible={modal2Visible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={{fontWeight:'700',textAlign:'center',marginBottom:7}}>{`What do you like best about ${value}`}?</Text>
                <ScrollView  contentContainerStyle={{alignItems:'center'}}>
                <RadioButton.Group  onValueChange={newValue => value2Changed(newValue)} value={value2}>
                  <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row', marginEnd:5}}>
                        <Text style={{textAlignVertical:'center'}}>Price</Text>
                        <RadioButton value="Stayfree" color={colors.accent} uncheckedColor={colors.tertiary}/>
                    </View>
                    <View style={{flexDirection:'row', marginEnd:5}}>
                        <Text style={{textAlignVertical:'center'}}>Size</Text>
                        <RadioButton value="Whisper" color={colors.accent} uncheckedColor={colors.tertiary}/>
                    </View>
                    <View style={{flexDirection:'row', marginEnd:5}}>
                        <Text style={{textAlignVertical:'center'}}>Absorbtion</Text>
                        <RadioButton value="Pari" color={colors.accent} uncheckedColor={colors.tertiary}/>
                    </View>
                    <View style={{flexDirection:'row', marginEnd:5}}>
                        <Text style={{textAlignVertical:'center'}}>Suitability to skin</Text>
                        <RadioButton value="Sofy" color={colors.accent} uncheckedColor={colors.tertiary}/>
                    </View>
                    <View style={{flexDirection:'row', marginEnd:5}}>
                        <Text style={{textAlignVertical:'center'}}>Overall</Text>
                        <RadioButton value="Other" color={colors.accent} uncheckedColor={colors.tertiary}/>
                    </View>
                    </View>
                    </RadioButton.Group>
                            <TouchableOpacity onPress={()=>{setModal2Visible(false); setSbModalVisible(true)}} style={{marginStart:10, borderColor:colors.tertiary,backgroundColor:colors.white,borderWidth:2, borderRadius:40, padding:7, elevation:3,width:120}}><Text style={{color:colors.secondary,textAlign:'center'}}>Done</Text>
                            </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    </Modal>
    <SnackBar visible={sbModalVisible} textMessage="You just helped your sisters! Thank You!" autoHidingTime={5000}  position='top' containerStyle={{paddingVertical:20}}/>

            <Text style={{marginTop:50,marginHorizontal:10, textAlign:'center', fontWeight:'700', fontSize:34}}>Sanitary Napkins Statistics in India</Text>
            <FlatList
            data={items}
            style={{marginHorizontal:10, marginTop:20}}
            renderItem={renderProgress}
            nestedScrollEnabled={true}
            />
              <TouchableOpacity onPress={()=>setModalVisible(true)}
                style={{elevation:5, justifyContent:'center', alignSelf:'flex-end', backgroundColor:colors.accent, height:50, width:50, borderRadius:25, marginBottom:5, marginEnd:5}}>
                <Ionicons name='hand-left-outline' size={30} color={colors.white} style={{alignSelf:'center', }} />
                </TouchableOpacity>
            {brand &&
            <View>
                <Text style={{marginTop:0,marginHorizontal:10, textAlign:'center', fontWeight:'bold', fontSize:20}}>{brand}</Text>
            <FlatList
                data={division}
                style={{marginHorizontal:10, marginTop:10}}
                renderItem={renderDivisionProgress}
                nestedScrollEnabled={true}
                />
                </View>}   
            </ScrollView>
            

        </View>

    )
}

export default PadStats;

const styles = StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: '#ffff',
            justifyContent:'center'
        
          },
          centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
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
    })