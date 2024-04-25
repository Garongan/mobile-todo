import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const NewTodo = ({ handleAddTodo, todo, setTodo }) => {
    const addTodo = () => {
        handleAddTodo(todo);
        setTodo({ id: "", title: "", status: true });
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setTodo}
                value={todo.title}
                inputMode="text"
                placeholder="write your next task"
                style={styles.inputText}
                onSubmitEditing={() => addTodo()}
            />
            <Pressable style={styles.inputButton} onPress={() => addTodo()}>
                <Text style={{ color: "#fffffe", fontSize: 25, textAlign: "center" }}>+</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fffffe",
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
    inputText: {
        borderWidth: 1,
        borderColor: "#004169",
        padding: 10,
        borderRadius: 5,
        borderStyle: "solid",
        color: "#999999",
        width: "83%",
    },
    inputButton: {
        backgroundColor: "#004169",
        padding: 8,
        borderRadius: 100,
        width: "14%",
    },
});

export default NewTodo;
