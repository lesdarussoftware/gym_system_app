import { View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

import { styles } from '@/constants/styles';

export default function NotificationsScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.screenContainer}>
        <ThemedText type="title" darkColor='#000'>Inicio</ThemedText>
        <ThemedText darkColor='#000'>Aquí van las notificaciones y novedades</ThemedText>
      </View>
    </View >
  )
}
