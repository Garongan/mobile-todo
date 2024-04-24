import { StyleSheet, Text, View } from "react-native";

const Banner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Todo Done
                {"\n"}
                <Text style={{ fontSize: 16 }}>keep it up</Text>
            </Text>
            <Text style={styles.percentage}>0/0</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#004169",
        marginVertical: 20,
        paddingHorizontal: 45,
        paddingVertical: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },
    title: {
        color: "#fffffe",
        fontSize: 21,
        fontWeight: "600",
    },
    percentage: {
        color: "#004169",
        fontSize: 25,
        fontWeight: "700",
        padding: 40,
        backgroundColor: "#fffffe",
        borderRadius: 100,
    },
});

export default Banner;
