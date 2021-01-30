import React,{useState,useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions,Image,TouchableHighlight,FlatList,TouchableOpacity, ScrollView, Modal,TextInput } from 'react-native';
import { colors } from '../constants/theme';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { RadioButton} from 'react-native-paper';
import SnackBar from 'react-native-snackbar-component'
//import {  } from 'react-native-gesture-handler';



var radiogroup_options = [
    {id: 1, label: 'Yes' },
    {id: 2, label: 'No' },
  ];
const reviews=[{id:'1',review:'Nice'}, {id:'2', review:'Excellent'}, {id:'3',review:'Very Clean'}]
const queries=[{q:'Does it have dustbins?',review:'Yes'}, {q:'Does it have pad vending machine?', review:'No'}, {q:'Does it have pad incinerator?',review:'Yes'},{q:'Does it have liquid handwash?',review:'Yes'},{q:'Does it have locks from inside?',review:'Yes'},{q:'Does it feel safe overall?',review:'Yes'}]
const MapReviews=({marker,id})=>{
    console.log('marker',marker)
    const [modalVisible,setModalVisible]=useState(false)
    const [sbModalVisible,setSbModalVisible]=useState(false)
    const [value, setValue] = React.useState('idk');
    const [firstvalue, setFirstValue] = React.useState('idk');
    const [firstvalue2, setFirstValue2] = React.useState('no');
    const renderReviews=({item})=>{
        return(
            <Text style={{marginStart:10,textAlign:'left', alignSelf:'flex-start',justifyContent:'flex-start', borderColor:colors.gray,borderWidth:1, borderRadius:20, padding:5, marginVertical:3}}>{item.review}</Text>
        ) }
    const renderQueries=({item})=>{
            return(
                <View style={{marginStart:10}}>
                    <Text style={{textAlign:'left', alignSelf:'flex-start',justifyContent:'flex-start', 
                    color:colors.accent, paddingHorizontal:5, marginTop:3}}>{item.q}</Text>
                    <Text style={{textAlign:'left', alignSelf:'flex-start',justifyContent:'flex-start', 
                    color:colors.secondary, paddingHorizontal:5, marginBottom:3}}>{item.review}</Text>
                </View>
            ) }
    const displaySnackbar=()=>{
        setModalVisible(false)
        setSbModalVisible(true)
    }
    
    return(
        <View style={styles.container}>
            <SnackBar visible={sbModalVisible} textMessage="You just helped your sisters! Thank You!" autoHidingTime={5000}  />
            <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <Text>Does it have dustbins?</Text>
              <RadioButton.Group  onValueChange={newValue => setFirstValue(newValue)} value={firstvalue}>
                  <View style={{flexDirection:'row'}}>

                  
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>Yes</Text>
        <RadioButton value="yes" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>No</Text>
        <RadioButton color={colors.accent} value="no" uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>I don't know</Text>
        <RadioButton value="idk" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      </View>
    </RadioButton.Group>
          
            <Text style={{marginTop:7}}>Does it have pad vending machine?</Text>
            <RadioButton.Group  onValueChange={newValue => setValue(newValue)} value={value}>
                  <View style={{flexDirection:'row'}}>

                  
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>Yes</Text>
        <RadioButton value="yes" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>No</Text>
        <RadioButton color={colors.accent} value="no" uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>I don't know</Text>
        <RadioButton value="idk" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      </View>
    </RadioButton.Group>
          
            <Text style={{marginTop:7}}>Does it have pad incinerator?</Text>
            <RadioButton.Group  onValueChange={newValue => setValue(newValue)} value={value}>
                  <View style={{flexDirection:'row'}}>

                  
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>Yes</Text>
        <RadioButton value="yes" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>No</Text>
        <RadioButton color={colors.accent} value="no" uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>I don't know</Text>
        <RadioButton value="idk" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      </View>
    </RadioButton.Group>
        
            <Text style={{marginTop:7}}>Does it have liquid handwash?</Text>
            <RadioButton.Group  onValueChange={newValue => setValue(newValue)} value={value}>
                  <View style={{flexDirection:'row'}}>

                  
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>Yes</Text>
        <RadioButton value="yes" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>No</Text>
        <RadioButton color={colors.accent} value="no" uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>I don't know</Text>
        <RadioButton value="idk" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      </View>
    </RadioButton.Group>
    <Text>Does it have a fee?</Text>
              <RadioButton.Group  onValueChange={newValue => setFirstValue2(newValue)} value={firstvalue2}>
                  <View style={{flexDirection:'row'}}>

                  
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>Yes</Text>
        <RadioButton value="yes" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>No</Text>
        <RadioButton color={colors.accent} value="no" uncheckedColor={colors.tertiary}/>
      </View>
      </View>
    </RadioButton.Group>
    <Text>Does it have locks from inside?</Text>
              <RadioButton.Group  onValueChange={newValue => setFirstValue2(newValue)} value={firstvalue2}>
                  <View style={{flexDirection:'row'}}>

                  
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>Yes</Text>
        <RadioButton value="yes" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>No</Text>
        <RadioButton color={colors.accent} value="no" uncheckedColor={colors.tertiary}/>
      </View>
      </View>
    </RadioButton.Group>
    <Text>Does it feel safe overall?</Text>
              <RadioButton.Group  onValueChange={newValue => setFirstValue2(newValue)} value={firstvalue2}>
                  <View style={{flexDirection:'row'}}>

                  
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>Yes</Text>
        <RadioButton value="yes" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>No</Text>
        <RadioButton color={colors.accent} value="no" uncheckedColor={colors.tertiary}/>
      </View>
      <View style={{flexDirection:'row', marginEnd:5}}>
        <Text style={{textAlignVertical:'center'}}>I don't know</Text>
        <RadioButton value="idk" color={colors.accent} uncheckedColor={colors.tertiary}/>
      </View>
      </View>
    </RadioButton.Group>
    <Rating
        type='heart'
        ratingCount={5}
        imageSize={30}
        showRating
        fractions={1}
        //onFinishRating={this.ratingCompleted}
        />
        <TextInput placeholder='Comments'
        style={styles.textInput}
        multiline={true}
        numberOfLines={1}
        underlineColorAndroid="transparent"
        />
        <View style={{flexDirection:'row', width:Dimensions.get('window').width-10, marginHorizontal:10, marginTop:10, justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>setModalVisible(false)} style={{marginStart:10, borderColor:colors.tertiary,backgroundColor:colors.white,borderWidth:2, borderRadius:40, padding:7, elevation:3,width:120}}><Text style={{color:colors.secondary,textAlign:'center'}}>Cancel</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>displaySnackbar()} style={{marginEnd:10, borderColor:colors.tertiary,borderWidth:2, backgroundColor:colors.primary, borderRadius:40, padding:7, elevation:3,width:120}}><Text style={{color:colors.secondary,textAlign:'center'}}>Submit</Text></TouchableOpacity>
            </View>
          
            </View>
            </View>
            </Modal>
            
            { id=='toilet'?(
              <ScrollView>
              <Text style={{color:colors.secondary,fontWeight:'bold', textAlign:'center'}}>{marker['poi']['name']}</Text>
              <Text style={{color:colors.secondary, textAlign:'center'}}>{marker['address']['freeformAddress']}</Text>
              <View style={{flexDirection:'row', width:Dimensions.get('window').width-10, marginHorizontal:10, marginTop:10, justifyContent:'space-between'}}>
            <Text style={{textAlign:'left', alignSelf:'flex-start', fontSize:20}}>Rating: 3.8/5</Text>
            <TouchableOpacity onPress={()=>setModalVisible(true)} style={{alignSelf:'flex-end', backgroundColor:colors.primary, borderRadius:10, padding:10, elevation:3}}><Text style={{color:colors.secondary}}>Add Review</Text></TouchableOpacity>
            </View>
            <View>
                <Text style={{marginStart:10, color:colors.accent, fontWeight:'bold',fontSize:16}}>General Information</Text>
            <FlatList
            data={queries}
            renderItem={renderQueries}
            keyExtractor={(item)=>item.q}
            contentContainerStyle={{alignItems:'flex-start'}}
            style={{flexDirection:'column'}}
            nestedScrollEnabled={true}/>
            </View>
            <View>
            <Text style={{marginTop:10,marginStart:10, color:colors.tertiary, fontWeight:'bold',fontSize:16}}>Reviews</Text>
            <FlatList
            data={reviews}
            renderItem={renderReviews}
            keyExtractor={(item)=>item.id}
            contentContainerStyle={{alignItems:'flex-start'}}
            style={{flexDirection:'column'}}
            nestedScrollEnabled={true}/>
            </View>
            </ScrollView>
            ):(
              <ScrollView>
            <Text style={{color:colors.secondary,fontWeight:'bold', textAlign:'center'}}>{marker['poi']['name']}</Text>
            <Text style={{color:colors.secondary, textAlign:'center'}}>{marker['address']['freeformAddress']}</Text>
            </ScrollView>
            )

            }
            
        </View>
    )
}
export default MapReviews;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
        alignItems: 'center',
        shadowColor: '#000',
        
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        flexDirection: 'column',
        width: Dimensions.get('window').width - 20
      },
      textInput:{
       
        borderColor:colors.tertiary,
        borderRadius: 20,
        width: Dimensions.get('window').width-40,
        alignSelf:'center',
        borderWidth:1,
        marginTop:7,
        
        textAlignVertical: 'center',
        //backgroundColor: '#4e5169',
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: colors.black,   
      },

    
})
