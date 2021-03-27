import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze:{
        iconname: "weather-hail",
        gradient: ["#616161","#9BC5C3"],
        title:"haze",
        subtitle:"just don't go outside"
    },
    Thunderstorm:{
        iconname: "weather-lightning",
        gradient: ["#283048","#859398"],
        title: "thunderstorm",
        subtitle: "stay at home.how about watching movie?"
    },
    Drizzle:{
        iconname: "weather-rainy",
        gradient: ["#DBD4B4","7AA1D2"],
        title: "drizzle",
        subtitle: "take your rainbow, maybe!"
    },
    Rain:{
        iconname: "weather-rainy",
        gradient: ["#314755","#26A0DA"],
        title: "rain",
        subtitle: "꼭 나가야 할까요.."
    },
    Snow:{
        iconname: "weather-snowy",
        gradient: ["#076585","#FFF"],
        title: "snow",
        subtitle: "do you wanna build a snowman~"
    },
    Atmosphere:{
        iconname: "weather-night",
        gradient: ["#9796F0","FBC7D4"],
        title: "atmosphere",
        subtitle: "today is good day!"
    },
    Clear:{
        iconname: "weather-sunny",
        gradient: ["#C6FFDD","#FBD786"],
        title: "sunny sunny sunny",
        subtitle: "perfect day!"
    },
    Clouds:{
        iconname: "weather-cloudy",
        gradient: ["#BDC3C7","#2C3E50"],
        title: "clouds",
        subtitle: "but i'm fine"
    },
    Dust:{
        iconname: "grain",
        gradient: ["#6B6B83","#3B8D99"],
        title: "dust, take your mask!",
        subtitle: "fucking China"
    },
    Mist:{
        iconname: "weather-fog",
        gradient: ["#757F9A","#D7DDE8"],
        title : "mist",
        subtitle : "it will get better"
    }
};

export default function Weather({temp, condition}){
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
        <Statusbar barStyle="light-content"/>
    <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={85} 
        name={weatherOptions[condition].iconname} 
        color="white"/>
        <Text styles={styles.temp}>{temp}˚</Text>
    </View>
    <View style={styles.textContainer}>
    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
    </View>
    </LinearGradient>
    );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds","Dust","Haze","Mist"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize:36,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle:{
        fontWeight: "600",
        color:"white",
        fontSize: 24
    },
    textContainer: {
        paddingVertical:20,
        alignItems: "flex-start"
    }
});