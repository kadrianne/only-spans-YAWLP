import React from 'react'
import { 
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView
} from 'react-native'
import { useSelector } from 'react-redux'
import RestaurantCard from '../components/RestaurantCard'

export default function FavoritesScreen() {
  const favorites = useSelector(state => state.favorites)

  const displayFavorites = () => {
    return favorites.map((favorite, i) => {
      return <RestaurantCard
        key={favorite.id}
        restaurant={favorite}
        index = {i + 1}
      />
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.favoritesContainer}>
        {displayFavorites()}
      </ScrollView>
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
  favoritesContainer: {
    flex: 1,
    margin: 15,
  }
});