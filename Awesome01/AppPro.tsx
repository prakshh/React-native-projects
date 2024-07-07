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