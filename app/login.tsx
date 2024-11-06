import { View } from "react-native";
import { Text } from "react-native-paper";

import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
    return (
        <View>
            <Text variant="displayLarge">Lesda Gym</Text>
            <LoginForm />
        </View>
    )
}