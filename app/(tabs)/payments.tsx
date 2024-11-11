import { View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

import { styles } from '@/constants/styles';

export default function PaymentsScreen() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.screenContainer}>
                <ThemedText type="title" darkColor='#000'>Pagos</ThemedText>
                <ThemedText darkColor='#000'>Historial de pagos y estado actual de membresías.</ThemedText>
            </View>
        </View>
    );
}
