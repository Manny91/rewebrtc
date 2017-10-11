import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';


export default class HomeTitle extends React.Component {
    render() {
        return (
            <Text style={styles.title}>
                {this.props.titleContent.toUpperCase()}
            </Text>
        );
    };
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
    },
});