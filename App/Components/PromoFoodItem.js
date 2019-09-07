import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/PromoFoodItemStyles'
import burger from '../Images/burger.jpg'

export default class PromoFoodItem extends Component {
  render () {
    
    return (
        <TouchableOpacity onPress={() => this.props.navigation('FoodScreen', {
          title: this.props.text,
          image: this.props.images,
          foodTitle: this.props.foodTitle,
          prices: this.props.prices,
          foodSize: this.props.foodSize,
          foodDescriptions: this.props.foodDescriptions,
        }
        )}>
      <View style={styles.foodCard}>
        <View>
            <Image style={styles.promoImage} source={this.props.image} resizeMode='contain' blurRadius={3}/>
        </View>

        <View style={styles.textView}>
            <Text style={styles.text}> {this.props.text} </Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
}
