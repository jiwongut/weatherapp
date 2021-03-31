import React from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient: ["#4B79A1","#283E51"],
        title:"Haze",
        subtitle:"just don't go outside."
    },
    Thunderstorm:{
        iconName: "weather-lightning-rainy",
        gradient: ["#304352","#d7d2cc"],
        title: "Thunderstorm",
        subtitle: "자고싶다"
    },
    Drizzle:{
        iconName: "weather-hazy",
        gradient: ["#6A9113","#141517"],
        title: "Drizzle",
        subtitle: "drizzle"
    },
    Rain:{
        iconName: "weather-pouring",
        gradient: ["#5D4157","#A8CABA"],
        title: "Rain",
        subtitle: "잠온다"
    },
    Snow:{
        iconName: "weather-snowy-heavy",
        gradient: ["#83A4D4","#B6FBFF"],
        title: "Snow",
        subtitle: "snow"
    },
    Atmosphere:{
        iconName: "weather-tornado",
        gradient: ["#FFA17F","#00223E"],
        title: "Atmosphere",
        subtitle: "atmosphere"
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#c2e59c","#64b3f4"],
        title: "Sunny",
        subtitle: "배고파....."
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "Clouds",
        subtitle: "구름 많음"
    },
    Mist:{
        iconName: "weather-fog",
        gradient: ["#E8CBC0","#636FA4"],
        title: "Mist",
        subtitle: "mist"
    },
    Dust:{
        iconName: "weather-cloudy-alert",
        gradient: ["#ADA996","#F2F2F2"],
        title: "Dust",
        subtitle: "fucking china.."
    }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient} 
        style={styles.container}
        >
        <StatusBar barStyle="light-content"/>
    <View style={styles.halfcontainer}>
    <MaterialCommunityIcons 
    name={weatherOptions[condition].iconName || "weather-sunset"} 
    size={80} 
    color="white" />
    <Text style={styles.temp}>{temp}°</Text>
    </View>
    <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
    </View>
    </LinearGradient>
    );
    }

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    temp:{
        fontSize: 36,
        color: "white"
    },
    halfcontainer:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle:{
        color:"white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
    }
    });