import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useRouter, useRootNavigationState } from "expo-router";

import { AuthContext } from "@/providers/AuthProvider";
import { useForm } from "@/hooks/useForm";
import { useAuth } from "@/hooks/useAuth";

import { LoginForm } from "@/components/LoginForm";

export default function IndexScreen() {
    const { auth } = useContext(AuthContext);
    const router = useRouter();
    const navigationState = useRootNavigationState(); // Nuevo hook para verificar el estado de navegación raíz
    const { handleSubmit } = useAuth();

    const { formData, errors, validate, handleChange } = useForm({
        defaultData: { username: '', password: '' },
        rules: {
            username: { required: true, maxLength: 55 },
            password: { required: true, minLength: 8, maxLength: 55 }
        }
    });

    useEffect(() => {
        if (auth && navigationState?.key) {
            router.push('/(tabs)');
        }
    }, [auth, navigationState?.key]);

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
    );
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
});
