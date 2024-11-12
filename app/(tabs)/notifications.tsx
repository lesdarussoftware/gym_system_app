import { useCallback, useState } from 'react';
import { View, ScrollView, RefreshControl, StyleSheet } from 'react-native';

import { useNotifications } from '@/hooks/useNotifications';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { styles } from '@/constants/styles';
import { MAIN_COLOR } from '@/constants/Colors';

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
          <ThemedText type="title" darkColor='#000' style={{ marginBottom: 15 }}>
            Avisos
          </ThemedText>
          {notifications.map(n => (
            <ThemedView
              key={n.id}
              darkColor='#000'
              style={{
                padding: 10,
                borderRadius: 5,
                backgroundColor: '#FFF',
                borderColor: MAIN_COLOR,
                borderWidth: 1,
                marginBottom: 10
              }}
            >
              <ThemedText style={{ color: '#000' }}>{n.message}</ThemedText>
            </ThemedView>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
