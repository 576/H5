import HomePageView from './HomePageView';
import ReadPageView from './ReadPageView';
import MinePageView from './MinePageView';
import WeatherPageView from './WeatherPageView';
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TabBarIOS,
} from 'react-native';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
const toilet  = 'toilet';
const read    = 'read';
const weather = 'weather';
const mine    = 'mine';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
class TabBarView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'toilet',
            notifCount:0,
            presses:0,
        };
    }
    render() {
        return (
             <TabBarIOS>
                 <TabBarIOS.Item
                     title='卫生间'
                     icon={{uri:base64Icon,scale:3.5}}
                     selectedIcon={{uri:base64Icon,scale:3.5}}
                     selected={this.state.selectedTab === "toilet"}
                     onPress={() => this.setState({
                         selectedTab: "toilet"
                     })}
                 >
                  {this.configureView("toilet")}
                 </TabBarIOS.Item>

                 <TabBarIOS.Item
                     title='阅读'
                     icon={{uri:base64Icon,scale:3.5}}
                     selectedIcon={{uri:base64Icon,scale:3.5}}
                     selected={this.state.selectedTab === "read"}
                     onPress={() => this.setState({
                         selectedTab: "read"
                     })}
                 >
                     {this.configureView("read")}
                     </TabBarIOS.Item>

                 <TabBarIOS.Item
                     title='天气'
                     icon={{uri:base64Icon,scale:3.5}}
                     selectedIcon={{uri:base64Icon,scale:3.5}}
                     selected={this.state.selectedTab === "weather"}
                     onPress={() => this.setState({
                         selectedTab: "weather"
                         })}
                 >
                     {this.configureView("weather")}
                     </TabBarIOS.Item>

                 <TabBarIOS.Item
                     title='我的'
                     icon={{uri:base64Icon,scale:3.5}}
                     selectedIcon={{uri:base64Icon,scale:3.5}}
                     selected={this.state.selectedTab === "mine"}
                     onPress={() => this.setState({
                         selectedTab: "mine"
                     })}

                 >
                     {this.configureView("mine")}
                     </TabBarIOS.Item>


            </TabBarIOS>
        );
    }

    configureView(index:string)
    {
        var view = <MinePageView/>;
       switch (index) {
           case toilet:
                view = <HomePageView/>;
                break;
           case read:
                view = <ReadPageView/>;
               break;
           case weather:
                view = <WeatherPageView/>;
                break;
           case mine:
                view = <MinePageView/>;
                break;
           default:
               break;
       }
        return view;
    }
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
module.exports = TabBarView;