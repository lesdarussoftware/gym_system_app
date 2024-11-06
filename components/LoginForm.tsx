import { useContext } from "react";
import { TextInput } from "react-native-paper";

import { AuthContext } from "@/providers/AuthProvider";

type LoginFormProps = {
    submitAction?: () => void;
}

export function LoginForm({ submitAction }: LoginFormProps) {

    const { setAuth, openModal, setOpenModal } = useContext(AuthContext);

    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();

    }

    return (
        <>
            <TextInput label="Usuario" />
            <TextInput
                label="Contraseña"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />
        </>
    );
}