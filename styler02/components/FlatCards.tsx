import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red2</Text>
        </View>
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
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    card: {
        // flex: 1,     // had to remove this, check below to understand the issue resolution
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100, 
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    }
})

/*

issue:
    The original code displays four boxes (Red, Green, Blue, and Red2) horizontally, with the fourth box (Red2) off-screen, requiring horizontal scrolling. Changing the width from 100 to '20%' made all four boxes visible. However, changing the width back to 100 did not revert to the initial layout, where only three boxes were visible and the fourth box was off-screen.

fix:
    - The reason the boxes shrinked or ignored the width is because we have flex 1 for the card. Remove the flex 1 from the card style which will resolve the issue.
    - flex: 1 will make the card expand to fill available space, which can override the width property. Removing flex: 1 allows the specified width to be respected.


flex concept:

flex
- basically does nothing (not actually, check below for full understanding)
- but allows the other 2 properties
- justifyContent and alignItems
- flexDirection -> default value is 'column'

    Above understanding of flex is partially correct but needs a bit of refinement. Here's a more accurate explanation:

    flex
        flex is a shorthand property that sets the flexGrow, flexShrink, and flexBasis properties. It defines how a component should grow, shrink, and take up space within a flex container.
    justifyContent
        justifyContent: Defines how space is distributed along the main axis (usually horizontal) of the flex container. It affects the alignment of children within the container.
    alignItems
        Defines how space is distributed along the cross axis (usually vertical) of the flex container. It affects the alignment of children within the container.

    Key Points
        flex:
            flexGrow: Specifies how much the component should grow relative to others.
            flexShrink: Specifies how much the component should shrink relative to others.
            flexBasis: The default size of the component before any growing or shrinking occurs.

    justifyContent and alignItems are independent of flex but work within a flex container to align children.

        If you remove the flex: 1 line from the container style, the behavior of your layout will change as follows:

            Without flex: 1: The container will not expand to fill the available space of its parent. Instead, it will only take up as much space as its children need. This can cause the container to shrink, potentially making the layout appear differently, especially if the parent view is large and the children are small.

*/
