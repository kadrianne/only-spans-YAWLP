import React, {useEffect} from 'react'
import { Text, View, StyleSheet, ScrollView} from 'react-native'
import { useDispatch, useSelector} from 'react-redux'
import RestaurantCard from './RestaurantCard'

const apiKey = "Uoew977GjYN-PA98sLtiB0oiYIUGA0XP2S33sLra9aBY2D402upVk0jils2SdvBVWwJiOTWX_UG00RHFxArUGkd0qAPs4WKxGHezmvYjwVvWwBtXr3A1AyJ-UarTX3Yx"

const apiUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Denver"

export default function RestaurantsContainer() {
  const dispatch = useDispatch()
  const restaurants = useSelector(state => state.restaurants)

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

  return (
    <ScrollView style={styles.container}>
      {showRestaurants()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  }
})