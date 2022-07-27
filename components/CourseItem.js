import { StyleSheet, Text, View, Pressable } from "react-native";

function CourseItem(props) {
  return (
    // <Pressable onPress={props.onDeleteCourse.bind(this, props.id)}>
    //   <View style={styles.courseItem}>
    //     <Text style={styles.listItem}>{props.text}</Text>
    //   </View>
    // </Pressable>

    <View style={styles.courseItem}>
      <Pressable
        onPress={props.onDeleteCourse.bind(this, props.id)}
        android_ripple={{ color: "purple" }} // for android when pressing element
        style={({ pressed }) => pressed && styles.pressedItem} // for ios to show effects on pressing item
      >
        <Text style={styles.listItem}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default CourseItem;

const styles = StyleSheet.create({
  courseItem: {
    marginVertical: 8,
    // padding: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },
  listItem: {
    color: "white",
    fontSize: 15,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
