import { Text, View, } from 'react-native'
import React, { Component } from 'react'
import { FlatList } from "react-native-gesture-handler";
import SportsCard from "../screens/SportsCard"

let SportsData = require("../assets/Temp.json");
export default class SportsPerson extends Component {
  renderItem=({item:content})=>{
  return <SportsCard SportsData={content} navigation={this.props.navigation}/>
  }
  keyExtractor=(Item,index)=>{
    index.toString()
  }
  render() {
    return (
      
        <View style={{flex:1}}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={SportsData}
                renderItem={this.renderItem}
              /></View>
      
    )
  }
}



