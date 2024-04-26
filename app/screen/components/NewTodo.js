import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const NewTodo = ({ handleSubmit, handleNewTodo, control, clearForm }) => {
    const onSubmit = (todo) => {
        let newTodo = {
            status: true,
            ...todo,
        };
        if (todo.id) {
            newTodo = { ...newTodo, id: todo.id };
        } else {
            newTodo = { ...newTodo, id: new Date().getTime().toString() };
        }
        handleNewTodo(newTodo);
    };

    return (
        <View style={styles.container}>
            <Controller
                name="title"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.inputText}>
                        <TextInput
                            onChangeText={onChange}
                            value={value}
                            onBlur={onBlur}
                            inputMode="text"
                            placeholder="write your next task"
                            onSubmitEditing={() => Keyboard.dismiss()}
                        />
                        {value && (
                            <Pressable onPress={clearForm}>
                                <Feather name="x" size={24} color="black" />
                            </Pressable>
                        )}
                    </View>
                )}
            />

            <Pressable style={styles.inputButton} onPress={handleSubmit(onSubmit)}>
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputButton: {
        backgroundColor: "#004169",
        padding: 8,
        borderRadius: 100,
        width: "14%",
    },
});

export default NewTodo;
