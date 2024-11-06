import { useContext } from "react";
import { TextInput, Button } from "react-native-paper";

import { AuthContext } from "@/providers/AuthProvider";
import { useForm } from "@/hooks/useForm";

type LoginFormProps = {
    submitAction?: () => void;
}

export function LoginForm({ submitAction }: LoginFormProps) {

    const { setAuth } = useContext(AuthContext);

    const { formData, errors, handleChange } = useForm({
        defaultData: { username: '', password: '' },
        rules: {
            username: { required: true },
            password: { required: true, minLength: 8, maxLength: 55 }
        }
    })

    async function handleSubmit() {
        console.log(formData)
    }

    return (
        <>
            <TextInput
                label="Usuario"
                value={formData.username}
                onChangeText={(value) => handleChange('username', value.toLowerCase())}
            />
            <TextInput
                label="Contraseña"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
                value={formData.password}
                onChangeText={(value) => handleChange('password', value.toLowerCase())}
            />
            <Button mode="contained" onPress={handleSubmit}>
                Iniciar Sesión
            </Button>
        </>
    );
}