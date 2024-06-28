import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, onDeleteHandler, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
