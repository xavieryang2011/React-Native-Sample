import React,{
  Component,
 } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
    {title: '标题', year: '2017', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];


export default class sampleAppMovies extends Component{
 render(){
  var movie=MOCKED_MOVIES_DATA[0];
  return (
    <View style={styles.container}>
      <Text>{movie.title}</Text>
      <Text>{movie.year}</Text>
      <Image source={{uri: movie.posters.thumbnail}}
             style={styles.thumbnail}/>
    </View>
    );
 }
}

var styles=StyleSheet.create({
   container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5FCFF',
   },
   thumbnail:{
    width:53,
    height: 81,
   },
});

AppRegistry.registerComponent('sampleAppMovies',()=>sampleAppMovies);



