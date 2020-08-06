import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Audio } from 'expo-av';

const listBackgroundColors ={
  1:"#74B9FF",
  2:"#F18F01",
  3:"#FF3E4D",
  4:"#BB2CD9",
  5:"#E39774",
  6:"#07A0C3",
  7:"#A24936",
  8:"#FFF222",
  9:"#84E296",
  10:"#FF3031"
}

const soundList ={
  one:require("./assets/one.wav"),
  two:require("./assets/two.wav"),
  three:require("./assets/three.wav"),
  four:require("./assets/four.wav"),
  five:require("./assets/five.wav"),
  six:require("./assets/six.wav"),
  seven:require("./assets/seven.wav"),
  eight:require("./assets/eight.wav"),
  nine:require("./assets/nine.wav"),
  ten:require("./assets/ten.wav")
}

export default class App extends React.Component {

  //TODO: function to play sound
  playSound= async number =>{
    const soundObject = new Audio.Sound();
    try {
      let path=soundList[number]
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()

      .then( async playbackStatus => {
        setTimeout(() => {
          soundObject.unloadAsync();
        },playbackStatus.playableDurationMillis)
      })
      .catch(error => {  console.log(error);})
     
    }catch(error){
      console.log(error);
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.gridcontainer}>
      <Image source={require('./assets/logo.png')}  style={styles.logo}/>
      <Text style={{fontSize:30, color:"#fff", alignItems:"center", justifyContent:"center", marginLeft:75}}>Spanish Number!!</Text>
    
        <TouchableOpacity onPress={()=> {
          this.playSound("one")
        }}style={[{backgroundColor:listBackgroundColors[1]},styles.button]}>
          <Text style={styles.itemText}>One</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {
          this.playSound("two")
        }}style={[{backgroundColor:listBackgroundColors[2]},styles.button]}>
          <Text style={styles.itemText}>Two</Text>
        </TouchableOpacity>
      
     
        <TouchableOpacity onPress={()=> {
          this.playSound("three")
        }}style={[{backgroundColor:listBackgroundColors[3]},styles.button]}>
          <Text style={styles.itemText}>Three</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {
          this.playSound("four")
        }}style={[{backgroundColor:listBackgroundColors[4]},styles.button]}>
          <Text style={styles.itemText}>Four</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={()=> {
          this.playSound("five")
        }}style={[{backgroundColor:listBackgroundColors[5]},styles.button]}>
          <Text style={styles.itemText}>Five</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {
          this.playSound("six")
        }}style={[{backgroundColor:listBackgroundColors[6]},styles.button]}>
          <Text style={styles.itemText}>Six</Text>
        </TouchableOpacity>
    
   
        <TouchableOpacity onPress={()=> {
          this.playSound("seven")
        }}style={[{backgroundColor:listBackgroundColors[7]},styles.button]}>
          <Text style={styles.itemText}>Seven</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {
          this.playSound("eight")
        }}style={[{backgroundColor:listBackgroundColors[8]},styles.button]}>
          <Text style={styles.itemText}>Eight</Text>
        </TouchableOpacity>
      
     
        <TouchableOpacity onPress={()=> {
          this.playSound("nine")
        }}style={[{backgroundColor:listBackgroundColors[9]},styles.button]}>
          <Text style={styles.itemText}>Nine</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {
          this.playSound("ten")
        }}style={[{backgroundColor:listBackgroundColors[10]},styles.button]}>
          <Text style={styles.itemText}>Ten</Text>
        </TouchableOpacity>
    
      
      </View>
      
  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  },
  gridcontainer:{
    flex:1,
    margin:5
  },
  logo:{
    alignSelf:"center",
    marginTop:10
  },
  rowContainer:{
    flexDirection:"row"
  },
  itemText:{
    color:"#fff",
    fontSize:20
  },
  button:{
    flex:1,
    height:110,
    alignItems:"center",
    justifyContent:"center",
    margin:2
  }

});
