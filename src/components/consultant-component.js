import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBarLoggedIn from './shared/navbar-logged-in-component';
import projectsData from '../data/projects.json';
import ConsultantListComponent from './shared/consultant-list-component';

export default class ConsultantComponent extends React.Component {
    navigate = (route) => {
      this.props.navigation.navigate(route);
    }



    render() {
        return (
            <View>
                <NavigationBarLoggedIn
                    actionNavigationHome={()=> {this.navigate('Home')}}/>
                <Text style={styles.title}>
                    Consultants
                </Text>
                <ConsultantListComponent />
        </View>
        );
  }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        padding: 20,
        paddingBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }

});
