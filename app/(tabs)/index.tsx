import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

import { AuthContext } from '@/providers/AuthProvider';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="account" />

export default function HomeScreen() {

  const { auth } = useContext(AuthContext);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.screenContainer}>
        <Card>
          <Card.Title
            title={`${auth?.me?.first_name} ${auth?.me.last_name}`}
            subtitle={auth?.me?.gym?.name}
            left={LeftContent}
          />
        </Card>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#000',
    paddingTop: 35
  },
  screenContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    height: '100%'
  }
})
