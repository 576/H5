import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    WebView,
} from 'react-native';
import CWebView from './CWebView';
const instructions = Platform.select({
    ios: '卫生间',
    android:'卫生间',
});
class HomePageView extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
        <View style={styles.container}>
          <CWebView url='https://www.ba999idu.com'/>
        </View>
    );}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
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
module.exports = HomePageView;