import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Button } from 'react-native-paper';

import { AuthContext } from '@/providers/AuthProvider';
import { useAuth } from '@/hooks/useAuth';

import { styles } from '@/constants/styles';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="account" />

export default function ProfileScreen() {

  const { auth } = useContext(AuthContext);

  const { handleLogout } = useAuth()

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
        <Button mode="contained" style={localStyles.logoutBtn} onPress={handleLogout}>
          Salir
        </Button>
      </View>
    </View>
  )
}

const localStyles = StyleSheet.create({
  logoutBtn: {
    margin: 'auto',
    marginTop: 20,
    width: '70%'
  }
})
