import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function PaymentsScreen() {
    return (
        <>
            <ThemedView>
                <ThemedText type="title">Pagos</ThemedText>
            </ThemedView>
            <ThemedText>Historial de pagos y estado actual de membresías.</ThemedText>
        </>
    );
}
