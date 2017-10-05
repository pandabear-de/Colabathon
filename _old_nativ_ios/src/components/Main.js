import React, { Component} from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}>Main!
                    </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
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
