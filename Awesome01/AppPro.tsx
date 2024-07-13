/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';

import { View, Text, StyleSheet, useColorScheme } from 'react-native'

function AppPro():JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello AppPro
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#00000'
    }
})

export default AppPro

/*

in mobile app,
    alignItems -> left to right
    justifyContent -> top to bottom

explanation:

    Main-axis and Cross-axis of react-native are opposite to what's on web dev

    Web Development	
        Main axis: Left to Right
        Cross axis: Top to Bottom

    Mobile App with React-native
        Main axis: Top to Bottom
        Cross axis: Left to Right

*/

/*
This React Native app defines a component called AppPro that displays a "Hello AppPro" text message. The app uses the useColorScheme hook to determine if the device is in dark mode and adjusts the text color accordingly. The styles object defines two styles: whiteText for dark mode and darkText for light mode, along with a container style to center the content. The main-axis and cross-axis behavior in React Native differs from web development, with the main axis being top-to-bottom and the cross axis being left-to-right. This means that in the app, alignItems aligns children from left to right, and justifyContent aligns children from top to bottom.
*/
