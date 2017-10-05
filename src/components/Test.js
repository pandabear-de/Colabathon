import React, { Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Test extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}>This is my first hello world!
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    title: {
        color: '#FFF',
        marginTop: 100
    }
});
