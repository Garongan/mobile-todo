import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const NewTodo = () => {
    return (
        <View style={styles.container}>
            <TextInput inputMode="text" defaultValue="write your next task" style={styles.inputText} />
            <Pressable style={styles.inputButton}>
                <Text style={{ color: '#fffffe', fontSize: 25, textAlign: 'center' }}>+</Text>
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
