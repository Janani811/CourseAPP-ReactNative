import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import CourseItem from "./components/CourseItem";
import CourseInput from "./components/CourseInput";

export default function App() {
  // const [enteredCourseText, setEnteredCourseText] = useState("");
  const [course, setCourse] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  // function courseInputHandler(enteredText) {
  //   setEnteredCourseText(enteredText);
  // }
  function addCourseHandler(enteredCourseText) {
    // setCourse((currentCourse) => [...currentCourse, enteredCourseText]);
    setCourse((currentCourse) => [
      ...currentCourse,
      { text: enteredCourseText, id: Math.random().toString() },
    ]);
    // setModalVisible(false);
    modalClose();
  }
  function deleteCourse(id) {
    // setCourse((currentCourse) => [...currentCourse, enteredCourseText]);
    setCourse((currentCourse) => {
      return currentCourse.filter((courseItem) => courseItem.id !== id);
    });
  }
  function setAddCourseHandler(id) {
    setModalVisible(true);
  }

  function modalClose() {
    setModalVisible(false);
  }
  // console.log(course);
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type here"
          style={styles.textInput}
          onChangeText={courseInputHandler}
        />
        <Button title="Add Course" onPress={addCourseHandler} />
      </View> */}
        <Button
          title="Add New Course"
          color="#a065ec"
          onPress={setAddCourseHandler}
        />
        <CourseInput
          showModal={modalVisible}
          onAddCourse={addCourseHandler}
          onCancel={modalClose}
        />
        <View style={styles.listContainer}>
          {course?.length ? (
            <Text style={styles.listHeader}>List of Courses</Text>
          ) : null}
          {/* <ScrollView>
          {course?.map((item) => (
            <View key={item} style={styles.courseItem}>
              <Text style={styles.listItem}>{item}</Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList
            data={course}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <CourseItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteCourse={deleteCourse}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // flex: 1,
    flexDirection: "column",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  // inputContainer: {
  //   flexDirection: "row",
  // },
  // textInput: {
  //   // padding: 10,
  //   width: "70%",
  //   borderColor: "black",
  //   borderWidth: 1,
  //   marginRight: 15,
  // },
  listContainer: {
    paddingTop: 30,
  },
  listHeader: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
    fontWeight: "bold",
  },
  // courseItem: {
  //   marginVertical: 8,
  //   padding: 8,
  //   borderRadius: 5,
  //   backgroundColor: "#5e0acc",
  // },
  // listItem: {
  //   color: "white",
  //   fontSize: 15,
  // },
});
