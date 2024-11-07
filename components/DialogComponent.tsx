import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Text } from 'react-native-paper';

type DialogProps = {
    visible: boolean;
    onDismiss: () => void;
}

export function DialogComponent({ visible, onDismiss }: DialogProps) {
    return (
        <View>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">This is simple dialog</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={onDismiss}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </View>
    );
}