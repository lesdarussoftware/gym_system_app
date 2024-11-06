import { ReactElement } from "react";
import { Modal, Portal } from "react-native-paper";

type ModalComponentProps = {
    children: ReactElement;
    visible: boolean;
    onDismiss: () => void;
}

export function ModalComponent({ children, visible, onDismiss }: ModalComponentProps) {

    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Portal>
            <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={containerStyle}>
                {children}
            </Modal>
        </Portal>
    )
}