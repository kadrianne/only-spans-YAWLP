import React from 'react'
import { 
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native'

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorites Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});