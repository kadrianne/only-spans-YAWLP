import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, ScrollView, TextInput, Button } from 'react-native'
import { useDispatch, useSelector} from 'react-redux'
import RestaurantCard from './RestaurantCard'

const apiKey = "Uoew977GjYN-PA98sLtiB0oiYIUGA0XP2S33sLra9aBY2D402upVk0jils2SdvBVWwJiOTWX_UG00RHFxArUGkd0qAPs4WKxGHezmvYjwVvWwBtXr3A1AyJ-UarTX3Yx"

const apiUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Denver"

export default function RestaurantsContainer() {
  const dispatch = useDispatch()
  const restaurants = useSelector(state => state.restaurants)
  const favorites = useSelector(state => state.favorites)
  console.log(favorites, 'favorites')

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(apiUrl, {
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
    .then(({businesses}) => dispatch({type: "SET_RESTAURANTS", restaurants: businesses}))
  }, [])

  const showRestaurants = () => restaurants.map((restaurant, i) => {
    return <RestaurantCard 
      key={restaurant.id} 
      restaurant={restaurant} 
      index={i + 1} />
  })

  const handleSearchText = (text) => {
    setSearchTerm(text)
  }

  const handleSearch = () => {
    const updatedURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${searchTerm}`

    fetch(updatedURL, {
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
    .then(({businesses}) => dispatch({type: "SET_RESTAURANTS", restaurants: businesses}))
  }

  return (
    <>
    <View style={styles.searchContainer}>
      <TextInput 
        style={styles.search}
        placeholder='Enter Location'
        onChangeText={handleSearchText}
        value={searchTerm}
      />
      <Button
        style={styles.button}
        onPress={handleSearch}
        title='Search'
      />
    </View>
    <ScrollView style={styles.container}>
      {showRestaurants()}
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15
  },
  search: {
    height: 40,
    flex: 2,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 15,
    paddingHorizontal: 15
  },
  button: {
    flex: 1
  }
})