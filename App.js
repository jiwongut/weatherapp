import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "d13d8a3f7f05b5cd8e81ec2f9587b860";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const{data: {main :{temp},
  weather}
  } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading:false,
        condition: weather[0].main, 
        temp
      })
  };
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
    const {coords: {latitude, longitude}
  } = await Location.getCurrentPositionAsync();
  this.getWeather(latitude, longitude);
    
    } catch(error){
      Alert.alert("can't find you.","so sad.");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, condition, temp} = this.state;
  return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
}
}


