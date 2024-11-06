import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { LoginForm } from "@/components/LoginForm";

export default function IndexScreen() {
    return (
        <View style={style.container}>
            <Text variant="displayLarge">Lesda Gym</Text>
            <LoginForm />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: '100%'
    }
})