import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotificationsScreen() {
    return (
        <>
            <ThemedView>
                <ThemedText type="title">Notificaciones</ThemedText>
            </ThemedView>
            <ThemedText>This app includes example code to help you get started.</ThemedText>
        </>
    );
}
