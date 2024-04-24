import { Image, StyleSheet, Text, View } from "react-native";
import Greet from "./components/Greet";
import Banner from "./components/Banner";
import NewTodo from "./components/NewTodo";

export default function App() {
    return (
        <View style={styles.container}>
            <Greet />
            <Banner />
            <NewTodo />
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image source={require("./assets/notes.png")} style={styles.imgStyle} />
                <Text style={{ fontWeight: "bold" }}>Your Task List is Empty</Text>
                <Text>Start by adding your first task</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffffe",
        paddingHorizontal: 25,
        paddingVertical: 40,
    },
    imgStyle: {
        width: 300,
        height: 300,
    },
});
