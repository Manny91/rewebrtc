import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Image
} from 'react-native';
import { Button } from 'react-native-elements'
import { YellowButtonComponent } from './yellow-button-component';

export default class NavigationBarLoggedOut extends React.Component {

  render() {
    return (
        <View style={styles.topNavBar}>
                <View style={styles.imageContainer}>
                <Image style={styles.talmixLogo}
                    resizeMode="stretch"
                    source={require('../../../assets/rebrand--blue.png')}
                    onPress={this.props.actionNavigationHome}></Image>
                </View>
                <YellowButtonComponent
                    color="black"
                    title="Login"
                    onPress={this.props.actionNavigationDashboard}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    topNavBar: {
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 10,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 2,
    },
    talmixLogo: {
        width: 80,
        height: 20,


    }
});
