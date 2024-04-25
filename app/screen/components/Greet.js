import { StyleSheet, Text } from "react-native";

const Greet = () => {
    return (
        <>
            <Text style={styles.greet}>Hello</Text>
            <Text style={styles.name}>Alvindo Tri Jatmiko</Text>
        </>
    )
}

const styles = StyleSheet.create({
    greet: {
        fontSize: 30,
        fontWeight: "normal",
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
})

export default Greet;