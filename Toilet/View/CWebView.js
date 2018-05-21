import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    WebView,
} from 'react-native';

const instructions = Platform.select({
    ios: '卫生间',
    android:'卫生间',
});
class CWebView extends Component {

    constructor(props) {
        super(props);
        this.state={
            url:this.props.url,
            isError:false
        };
    }
    render() {
        return (
            <View style={styles.container}>
            {
                this.state.isError ? this.showErrorView():this.showWebView()
            }
            </View>   
        );}


    showErrorView()
    {
        return <Text style={styles.errorStyle}> 网络有问题,请检查网络情况。</Text> ;
    }
    showWebView()
    {
     return <WebView 
                onError={this.showError.bind(this)}
                startInLoadingState={this.state.startInLoadingState}
                scalesPageToFit={this.state.scalesPageToFit}
                source={{uri:this.props.url}}
                style = {{marginTop:-20}}
            />;
  }

    showError()
    {
        this.setState ({
            isError:true
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    errorStyle: {
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        margin: 10,
    },
});
module.exports = CWebView;