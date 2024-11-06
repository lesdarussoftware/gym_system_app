import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { useForm } from "@/hooks/useForm";
import { useAuth } from "@/hooks/useAuth";

type LoginFormProps = {
    submitAction?: () => void;
}

export function LoginForm({ submitAction }: LoginFormProps) {

    const { handleSubmit } = useAuth()
    const { formData, errors, validate, handleChange } = useForm({
        defaultData: { username: '', password: '' },
        rules: {
            username: { required: true },
            password: { required: true, minLength: 8, maxLength: 55 }
        }
    })

    return (
        <View style={styles.form}>
            <TextInput
                label="Usuario"
                value={formData.username}
                style={styles.input}
                onChangeText={(value) => handleChange('username', value.toLowerCase())}
            />
            <TextInput
                label="Contraseña"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
                value={formData.password}
                style={styles.input}
                onChangeText={(value) => handleChange('password', value.toLowerCase())}
            />
            <Button
                mode="contained"
                onPress={() => handleSubmit({ formData, submitAction })}
                style={styles.submitBtn}
            >
                Iniciar Sesión
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        gap: 10
    },
    input: {
        padding: 5,
        borderRadius: 5
    },
    submitBtn: {
        marginTop: 20,
        padding: 10
    }
})