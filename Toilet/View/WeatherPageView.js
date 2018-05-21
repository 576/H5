
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const instructions = Platform.select({
    ios: '天气',
    android: '天气',
});
class WeatherPageView extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
        <View style={styles.container}>
             <Text style={styles.welcome}>
                {instructions}
            </Text>
        </View>
    );}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.exports = WeatherPageView;