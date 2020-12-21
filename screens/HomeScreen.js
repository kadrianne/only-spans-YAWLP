import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native'
import RestaurantContainer from '../components/RestaurantsContainer'

export default function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantContainer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});