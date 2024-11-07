import { createContext, useState, ReactNode } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import * as SecureStore from 'expo-secure-store';

import { ModalComponent } from "@/components/ModalComponent";

interface AuthData {
    access_token: string;
    refresh_token: string;
    me: {
        id: number;
        username: string;
        role: string;
        first_name: string;
        last_name: string;
        gym: {
            hash: string;
            name: string;
            next_deadline: Date;
        }
    }
}

interface AuthContextType {
    auth: AuthData | null;
    setAuth: (auth: AuthData | null) => void;
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
    auth: null,
    setAuth: () => { },
    openModal: false,
    setOpenModal: () => { }
});

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [auth, setAuth] = useState<AuthData | null>(
        SecureStore.getItem("auth_lesdagym")
            ? JSON.parse(SecureStore.getItem("auth_lesdagym")!)
            : null
    );
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ auth, setAuth, openModal, setOpenModal }}>
            <ModalComponent visible={openModal} onDismiss={() => setOpenModal(false)}>
                <View>
                    <Text variant="displayLarge">
                        Tu sesión expiró. Por favor ingresa de nuevo tu usuario y contraseña.
                    </Text>
                </View>
            </ModalComponent>
            {children}
        </AuthContext.Provider>
    );
}
