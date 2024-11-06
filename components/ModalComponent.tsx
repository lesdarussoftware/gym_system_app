import { ReactElement } from "react";
import { Modal, PaperProvider, Portal } from "react-native-paper";

type ModalComponentProps {
    children: ReactElement;
    visible: boolean;
    onDismiss: () => void;
}

export function ModalComponent({ children, visible, onDismiss }: ModalComponentProps) {

    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <PaperProvider>
            <Portal>
                <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
                    {children}
                </Modal>
            </Portal>
        </PaperProvider>
    )
}