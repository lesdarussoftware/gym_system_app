import { useCallback, useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';

import { useNotifications } from '@/hooks/useNotifications';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { styles } from '@/constants/styles';

export default function NotificationsScreen() {

  const { getNotifications, notifications } = useNotifications();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getNotifications();
    setRefreshing(false);
  }, [getNotifications]);

  return (
    <ScrollView
      style={styles.scrollContainer}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.mainContainer}>
        <View style={styles.screenContainer}>
          <ThemedText type="title" darkColor='#000'>Notificaciones</ThemedText>
          {notifications.map(n => (
            <ThemedView key={n.id}>
              <ThemedText>{n.message}</ThemedText>
            </ThemedView>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
