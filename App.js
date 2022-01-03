import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from "react-native";
import { Task } from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    {
      task: "Learn React Native",
    },
    {
      task: "That means we can easily add styles to all our elements coming from our markdown file by wrapping them in the nuxt-content class.",
    },
  ]);

  const addTask = () => {
    Keyboard.dismiss();
    setTasks((prevState) => [...prevState, { task }]);
    setTask("");
  };

  const removeTask = (task) => {
    setTasks((prevState) => prevState.filter((t) => t !== task));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>Today's Todo</Text>
          <Text style={styles.counter}>{tasks.length}</Text>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            // Todo:Task not removing
            <TouchableOpacity onPress={() => removeTask(task)}>
              <Task todo={item.task} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addTodoWrapper}
      >
        <TextInput
          style={styles.addTodoInput}
          placeholder="Add a todo"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={addTask}>
          <View style={styles.addTodoBtn}>
            <Text style={styles.addTodoBtnText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },

  wrapper: {
    marginTop: 80,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  counter: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#55bcf6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },

  addTodoWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addTodoInput: {
    flex: 1,
    fontSize: 18,
    marginRight: 10,
    flexWrap: "wrap",
  },

  addTodoBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#55bcf6",
    justifyContent: "center",
    alignItems: "center",
  },

  addTodoBtnText: {
    color: "#fff",
    fontSize: 24,
  },
});
