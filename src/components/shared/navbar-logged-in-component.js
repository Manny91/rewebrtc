import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Image,
    Button
} from 'react-native';

export default class NavigationBarLoggedIn extends React.Component {
  render() {
    return (
        <View style={styles.topNavBar}>
            <Image style={styles.talmixLogo}
            resizeMode="stretch"
            source={require('../../../assets/talmix-whitelogo.png')}
            onPress={this.props.actionNavigationHome}
            ></Image>

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
        backgroundColor: '#474850',
    },
    talmixLogo: {
        width: 80,
        height: 20
    }
});
