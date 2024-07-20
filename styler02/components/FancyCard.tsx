import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: 'https://lh3.googleusercontent.com/p/AF1QipOpFNgRHUT6ozw3hMpfUQtezrBT8-DB7YJoethZ=s1360-w1360-h1020'
        }}
        style={styles.cardImage}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>The Rang Ghar</Text>
        <Text style={styles.cardLabel}>3 km from Sibsagar, Assam 785697</Text>
        <Text style={styles.cardDescription}>The name translates to 'House of Entertainment' and dates back to 1746 A.D. when the Ahoms used to rule present-day Assam.</Text>
        <Text style={styles.cardFooter}>Contact us</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    card: {
      width: 390,
      height: 180,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 12
    },
    cardElevated: {
      backgroundColor: '#FFFFFF',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1
      }
    },
    cardImage: {
        height: 180,
        // width: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12
    },
    cardTitle: {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 1
    },
    cardLabel: {
      color: '#000000',
      fontSize: 14,
      marginBottom: 1
    },
    cardDescription: {
      color: '#242B2E',
      fontSize: 12,
      marginBottom: 4,
      marginTop: 6,
      flexShrink: 1
    },
    cardFooter: {
      color: '#000000'
    }
})