import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync();   // if you miss parenthesis here, the page will be blank
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;

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