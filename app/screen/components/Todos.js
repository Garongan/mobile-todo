import { FlatList, Pressable, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Todos = ({ todos, changeStatus, handleDelete, handleSelectedTodo }) => {

    return (
        <View style={{ paddingTop: 10 }}>
            <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>Today Task's</Text>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item: todo }) => (
                    <TouchableOpacity
                        style={{
                            marginBottom: 10,
                            borderWidth: 1,
                            borderStyle: "dashed",
                            borderRadius: 5,
                            padding: 10,
                            justifyContent: "space-between",
                            flexDirection: "row",
                        }}
                        onPress={() => handleSelectedTodo(todo.id)}
                    >
                        <View style={{ alignItems: "center", flexDirection: "row", gap: 10 }}>
                            <Pressable onPress={() => changeStatus(todo.id)}>
                                {todo.status ? (
                                    <MaterialIcons name="check-box-outline-blank" size={24} color="black" />
                                ) : (
                                    <MaterialIcons name="check-box" size={24} color="black" />
                                )}
                            </Pressable>
                            <Text style={[todo.status ? { textDecorationLine: "none" } : { textDecorationLine: "line-through" }]}>{todo.title}</Text>
                        </View>
                        <Pressable onPress={() => handleDelete(todo.id)}>
                            <Ionicons name="trash" size={24} color="black" />
                        </Pressable>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Todos;
