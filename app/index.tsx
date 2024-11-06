import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { LoginForm } from "@/components/LoginForm";

export default function IndexScreen() {
    return (
        <View style={styles.container}>
            <Text variant="displayLarge" style={styles.title}>
                Lesda Gym
            </Text>
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 40,
        justifyContent: 'center'
    },
    title: {
        color: '#000',
        textAlign: 'center',
        marginBottom: 20
    }
})