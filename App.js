import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./app/screen/HomeScreen";

export default function App() {
    return (
        <SafeAreaProvider style={styles.container}>
            <StatusBar style="auto" />
                <HomeScreen />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffffe", 
    },
});
