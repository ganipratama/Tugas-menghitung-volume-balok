
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';
export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      alas:0,
      tinggi:0,
      luas:0
    };
  }
  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>
        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Volume Balok
          </Text>
         </View>
        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang"
              onChangeText={(Panjang)=>this.setState({Panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Lebar"
              onChangeText={(Lebar)=>this.setState({Lebar})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(Tinggi)=>this.setState({Tinggi})}
              keyboardType = 'numeric'
            />
            <Button
              onPress={()=>this.setState({
                Volume: (this.state.Panjang*this.state.Lebar*this.state.Tinggi)
              })}s
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Panjang =  {this.state.Panjang} {"\n"}
              Lebar =  {this.state.Lebar} {"\n"}
              Tinggi = {this.state.Tinggi} {"\n"}
              Volume = {this.state.Volume}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungLuasBalok);