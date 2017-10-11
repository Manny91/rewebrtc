import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Image,
} from 'react-native';
import { Button } from 'react-native-elements'
import HomeTitle from './title-component';
import NavigationBarLoggedOut from './shared/navbar-logged-out-component';
import { YellowButtonComponent } from './shared/yellow-button-component';

export default class HomeComponent extends React.Component {
  navigate = (route) => {
      this.props.navigation.navigate(route);
  }
  render() {
    return (
      <View style={styles.container}>
            <NavigationBarLoggedOut
                actionNavigationHome={() => {this.navigate('Home')}}
                actionNavigationDashboard={()=> {this.navigate('Dashboard')}}/>
            <View style={styles.panel}>
                <HomeTitle titleContent='the Home of'/>
                <HomeTitle titleContent='independent'/>
                <HomeTitle titleContent='business talent.'/>
                <Text style={styles.subTitle}>Unlock the power of the world’s finest independent consultants to solve your business challenges.</Text>
                <View style={styles.buttonContent}>
                    <YellowButtonComponent
                        color='black'
                        title='POST A PROJECT'/>
                    <Button
                            backgroundColor='white'
                            buttonStyle= {{
                                borderRadius: 4,
                                paddingTop: 5,
                                paddingLeft: 10,
                                paddingBottom: 5,
                                paddingRight: 10,
                                marginBottom: 5,
                            }}
                            color='black'
                            title='Register'
                        onPress={() => {}}>
                    </Button>
                </View>
            </View>
            <View style={styles.subPanel}>
                <Text style={{color: '#4C4DFF' ,fontSize: 18, fontWeight: 'bold'}}>
                   Discover the power of the mix
                </Text>
                <Text style={{marginTop:10}}>
                    With the right mix of talent, anything is possible. With direct access to world-class insight and experience, Talmix is the smartest way to hire independent business talent.
                </Text>
            </View>
      </View>
    );
  }
}
// AppRegistry.registerComponent('HomeComponent', () => HomeComponent);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topNavBar: {
        paddingLeft: 10,
        paddingRight: 10,
        height: 80,
        backgroundColor: 'lightblue',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    panel: {
        backgroundColor: '#4C4DFF',
        flex: 3,
        padding: 20
    },
    talmixLogo: {
        marginTop: 10,
        width: 80,
        height: 20
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
        textAlign: 'left',
        marginTop: 15
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    register: {
        borderRadius: 4,
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        marginBottom: 5,
        backgroundColor: 'white',
    },
    subPanel: {
        backgroundColor: 'white',
        flex: 2,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
