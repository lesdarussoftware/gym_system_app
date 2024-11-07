import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

type LoginFormProps = {
    onSubmit: () => void;
    formData: { username: string; password: string; };
    errors: { username?: { type: string }; password?: { type: string } };
    handleChange: (name: string, value: string) => void
}

export function LoginForm({ onSubmit, formData, errors, handleChange }: LoginFormProps) {
    return (
        <View style={styles.form}>
            <TextInput
                label="Usuario"
                value={formData.username}
                style={styles.input}
                onChangeText={(value) => handleChange('username', value.toLowerCase())}
            />
            {errors.username?.type === 'required' &&
                <Text variant="bodySmall" style={styles.caption}>
                    * El nombre de usuario es requerido.
                </Text>
            }
            {errors.username?.type === 'maxLength' &&
                <Text variant="bodySmall" style={styles.caption}>
                    * El nombre de usuario es demasiado largo.
                </Text>
            }
            <TextInput
                label="Contraseña"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
                value={formData.password}
                style={styles.input}
                onChangeText={(value) => handleChange('password', value.toLowerCase())}
            />
            {errors.password?.type === 'required' &&
                <Text variant="bodySmall" style={styles.caption}>
                    * La contraseña es requerida.
                </Text>
            }
            {errors.password?.type === 'minLength' &&
                <Text variant="bodySmall" style={styles.caption}>
                    * La contraseña es demasiado corta.
                </Text>
            }
            {errors.password?.type === 'maxLength' &&
                <Text variant="bodySmall" style={styles.caption}>
                    * La contraseña es demasiado larga.
                </Text>
            }
            <Button
                mode="contained"
                style={styles.submitBtn}
                onPress={onSubmit}
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
    caption: {
        color: '#F00'
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