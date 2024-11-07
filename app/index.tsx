import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { useForm } from "@/hooks/useForm";
import { useAuth } from "@/hooks/useAuth";

import { LoginForm } from "@/components/LoginForm";

export default function IndexScreen() {

    const { handleSubmit } = useAuth()
    const { formData, errors, validate, handleChange } = useForm({
        defaultData: { username: '', password: '' },
        rules: {
            username: { required: true },
            password: { required: true, minLength: 8, maxLength: 55 }
        }
    })

    return (
        <View style={styles.container}>
            <Text variant="displayLarge" style={styles.title}>
                Lesda Gym
            </Text>
            <LoginForm
                onSubmit={() => handleSubmit({ formData, validate })}
                formData={formData}
                errors={errors}
                handleChange={handleChange}
            />
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