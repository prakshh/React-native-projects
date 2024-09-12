import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    // <Slot />
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}} />
    </Stack>
  )
}

export default RootLayout

/*
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>RootLayout</Text>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
*/

/*

In the example, the use of Slot from expo-router significantly simplifies the routing structure in the app. By using Slot, you can dynamically render different components or screens based on the navigation structure without manually defining each route or screen.

index.jsx defines the main content of your app, displaying text and a status bar.

_layout.tsx simplifies the layout by replacing the manual View and Text setup with Slot, allowing Expo to manage the navigation structure automatically.

This reduces the amount of boilerplate code required for navigation and dynamically handles rendering of nested routes or screens, improving code efficiency and readability.

*/

/*
Comparison of Slot vs Stack.Screen from expo-router, the key difference lies in navigation control and user experience.

Slot: It simplifies routing by dynamically loading the correct component based on the route. However, when navigating between pages (like from Home to Profile), it lacks the built-in navigation UI (like a back button). Users can't go back to the previous page easily.

Stack.Screen: It provides a navigation stack, offering more control over transitions between screens. When a user navigates to the Profile page, a back button is automatically included, allowing them to easily return to the previous screen.

In summary, using Stack.Screen enhances the user experience by offering built-in navigation controls, such as a back button, which makes navigating between pages smoother and more intuitive.

*/