import { useContext } from "react";
import { useRouter } from "expo-router";
import * as SecureStore from 'expo-secure-store';

import { AuthContext } from "@/providers/AuthProvider";

import { useQuery } from "./useQuery";

import { STATUS_CODES } from "@/constants/statusCodes";
import { LOGIN_URL } from "@/constants/urls";

export function useAuth() {

    const { setAuth } = useContext(AuthContext);

    const router = useRouter();

    const { handleQuery } = useQuery();

    async function handleSubmit({ formData, validate }: {
        formData: { username: string; password: string; };
        validate: () => boolean;
    }) {
        if (validate()) {
            const { status, data } = await handleQuery({
                url: LOGIN_URL,
                method: "POST",
                body: JSON.stringify(formData)
            });
            if (status === STATUS_CODES.OK) {
                setAuth(data);
                SecureStore.setItem('auth_lesdagym', JSON.stringify(data));
                router.push('/(tabs)');
            } else {
                console.log(data)
            }
        }
    }

    async function handleLogout() {
        await SecureStore.deleteItemAsync('auth_lesdagym');
        setAuth(null);
        router.dismissAll();
    }

    return {
        handleSubmit,
        handleLogout
    }
}