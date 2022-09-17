import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const GoalItem = (props) => {
  return (
    <View style={styles.golaItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
  golaItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
