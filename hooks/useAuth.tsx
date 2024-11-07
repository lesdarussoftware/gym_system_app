import { useRouter } from "expo-router";
import * as SecureStore from 'expo-secure-store';

import { useQuery } from "./useQuery";

import { STATUS_CODES } from "@/constants/statusCodes";
import { LOGIN_URL } from "@/constants/urls";

export function useAuth() {

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
                SecureStore.setItem('auth_lesdagym', JSON.stringify(data));
                router.push('/(tabs)')
            }
        }
    }

    return {
        handleSubmit
    }
}