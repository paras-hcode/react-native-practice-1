import { useState } from "react";
import {
  Button,
  Image,
  ImageBase,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ setCourseGoals, visible, endAddGoalHandler }) => {
  const [enteredText, setEnteredText] = useState("");
  const goalInputHandler = (text) => {
    setEnteredText(text);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
    setEnteredText("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/favicon.png")} />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="your course goal"
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#b180f0" onPress={addGoalHandler} title="Add goal" />
          </View>
          <View style={styles.button}>
            <Button
              color="#f31282"
              onPress={endAddGoalHandler}
              title="Cancel"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
