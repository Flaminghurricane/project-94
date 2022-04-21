import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font"

let customFonts={'bubblegum-sans':require("../assets/font/BubblegumSans-Regular.ttf")}

export default class TTCard extends Component{
    constructor(props){
        super(props)
        this.state={
            fontsLoaded:false
        }
    }

 async loadFont(){
     await Font.loadAsync(customFonts)
     this.setState({
         fontsLoaded:true
        });
 }
 componentDidMount(){
     this.loadFont()
 }
    render(){
        
          if(!this.state.fontsLoaded){
              return <AppLoading/>
          }
          else{
           return(
            <View>
               
                <View>
                    <Text style={styles.name}>{this.props.TTData.Title}</Text>
                    <TouchableOpacity><Text>{this.props.TTData.Tip1}</Text></TouchableOpacity>
                    <TouchableOpacity><Text>{this.props.TTData.Tip2}</Text></TouchableOpacity>
                    <TouchableOpacity><Text>{this.props.TTData.Tip3}</Text></TouchableOpacity>
                    <TouchableOpacity><Text>{this.props.TTData.Tip4}</Text></TouchableOpacity>
                    <TouchableOpacity><Text>{this.props.TTData.Tip5}</Text></TouchableOpacity>
                    <TouchableOpacity><Text>{this.props.TTData.Tip6}</Text></TouchableOpacity>

                    
                  
                </View>
            </View>
        )
          }
    }
}

const styles=StyleSheet.create({
    name:{
        fontSize:RFValue(15),
        alignItems:"center",
        justifyContent:"center",
        fontWeight:'bold',
        fontFamily:'bubblegum-sans'
    }
})