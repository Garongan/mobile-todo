import { Image, Text, View } from "react-native";

const NoList = () => {
    return (
        <View style={{ position: "absolute", paddingVertical: 20, alignSelf: "center", alignItems:'center', justifyContent: "center" }}>
            <Image source={require("../../../assets/notes.png")} style={{ width: 300, height: 300 }} />
            <Text style={{ fontWeight: "bold" }}>Your Task List is Empty</Text>
            <Text>Start by adding your first task</Text>
        </View>
    );
};

export default NoList;
