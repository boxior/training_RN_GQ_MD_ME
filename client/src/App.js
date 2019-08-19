import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, YellowBox} from 'react-native';
import "react-devtools";
//for devtools
YellowBox.ignoreWarnings([`Warning: ...`]);

const instructions = Platform.select({
    ios: `Press Cmd+R to reload, Cmd+D or shake for dev menu`,
    android:
        `Double tap R on your keyboard to reload,\n` +
        `Shake or press menu button for dev menu`
});

export default class App extends Component {
    render() {
        console.log(`dsr`, styles.container.backgroundColor);

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>My first App</Text>
                <Text style={styles.instructions}>Will be here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: `center`,
        backgroundColor: `blue`,
        flex: 1,
        justifyContent: `center`
    },
    instructions: {
        marginBottom: 5,
        color: `pink`,
        textAlign: `center`
    },
    welcome: {
        color: `red`,
        fontSize: 20,
        margin: 10,
        textAlign: `center`
    }
});

