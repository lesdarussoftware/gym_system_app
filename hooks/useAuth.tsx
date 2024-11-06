import { useContext } from "react";

import { AuthContext } from "@/providers/AuthProvider";
import { useQuery } from "./useQuery";

export function useAuth() {

    const { setAuth } = useContext(AuthContext);
    const { handleQuery } = useQuery()

    async function handleSubmit({ formData, submitAction }: {
        formData: { username: string; password: string; };
        submitAction?: () => void;
    }) {
        console.log(formData)
    }

    return {
        handleSubmit
    }
}