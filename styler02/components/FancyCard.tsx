import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: 'https://images.unsplash.com/photo-1553808991-e39e7611442c'
        }}
        style={styles.cardImage}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>The Great Wall of China</Text>
        <Text style={styles.cardLabel}>Am I Reacting?</Text>
        <Text style={styles.cardDescription}>Am I Reacting?</Text>
        <Text style={styles.cardFooter}>Am I Reacting?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    cardElevated: {},
    cardImage: {
        height: 180,
        width: 180
    },
    cardBody: {},
    cardTitle: {},
    cardLabel: {},
    cardDescription: {},
    cardFooter: {}
})