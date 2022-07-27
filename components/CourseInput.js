import { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  TextInput,
  Modal,
  Image,
} from "react-native";

function CourseInput(props) {
  const [enteredCourseText, setEnteredCourseText] = useState("");
  function courseInputHandler(enteredText) {
    setEnteredCourseText(enteredText);
  }
  function addCourseHandler() {
    props.onAddCourse(enteredCourseText);
    setEnteredCourseText("");
  }
  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/favicon.png")} style={styles.image} />
        <TextInput
          placeholder="Type here"
          style={styles.textInput}
          onChangeText={courseInputHandler}
          value={enteredCourseText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Course"
              onPress={addCourseHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CourseInput;

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    flex: 1,
    flexDirection: "column",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31162b",
  },
  textInput: {
    // padding: 10,
    // width: "70%",
    width: "100%",
    borderColor: "#e4d0ff",
    borderWidth: 1,
    // marginRight: 15,
    marginTop: 16,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 3,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
    marginHorizontal: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
});
