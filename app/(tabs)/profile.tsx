import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Card, Button } from 'react-native-paper';

import { AuthContext } from '@/providers/AuthProvider';
import { useAuth } from '@/hooks/useAuth';

import { styles } from '@/constants/styles';
import { MAIN_COLOR } from '@/constants/Colors';

const LeftContent = (props: any) => <Avatar.Icon style={localStyles.icon} {...props} icon="account" />

export default function ProfileScreen() {

  const { auth } = useContext(AuthContext);

  const { handleLogout } = useAuth()

  return (
    <View style={styles.mainContainer}>
      <View style={styles.screenContainer}>
        <Card style={localStyles.card}>
          <Card.Title
            title={`${auth?.me?.first_name} ${auth?.me.last_name}`}
            subtitle={auth?.me?.gym?.name}
            left={LeftContent}
          />
        </Card>
        <Button mode="contained" style={localStyles.logoutBtn} onPress={handleLogout}>
          <Text style={localStyles.logoutBtnText}>Salir</Text>
        </Button>
      </View>
    </View>
  )
}

const localStyles = StyleSheet.create({
  card: {
    backgroundColor: MAIN_COLOR
  },
  icon: {
    backgroundColor: '#FFF'
  },
  logoutBtn: {
    margin: 'auto',
    marginTop: 20,
    width: '70%',
    backgroundColor: MAIN_COLOR
  },
  logoutBtnText: {
    color: '#FFF',
  }
})
