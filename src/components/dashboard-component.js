import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Button
} from 'react-native';
import NavigationBarLoggedIn from './shared/navbar-logged-in-component';
import projectsData from '../data/projects.json';
import { ProjectListComponent } from './shared/project-list-component';
import App from '../App';

export default class DashboardComponent extends React.Component {
    navigate = (route) => {
      this.props.navigation.navigate(route);
    }



    render() {
        return (
            <View>
                <NavigationBarLoggedIn
                    actionNavigationHome={()=> {this.navigate('Home')}}/>
                <View style={styles.subNav}>
                    <App />
                </View>


            </View>
        );
  }
}
const styles = StyleSheet.create({
    subNav: {
        // paddingTop: 25,
        // paddingLeft: 10,
        // paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        flex: 1
    }


});
