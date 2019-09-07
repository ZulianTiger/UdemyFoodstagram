import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/FoodItemStyles'

import burger from '../Images/burger.jpg'



export default class FoodItem extends Component {
  render () {
    
    return (
      <TouchableOpacity onPress={()=> {
        this.props.navigation.navigate('FoodDetails', {
          image: this.props.foodImage,
          name: this.props.foodTitle,
          price: this.props.price,
        });
      }}>
        <View style={styles.foodItemView}>
            <View style={styles.priceView}>
                <Text style={styles.priceText}>{this.props.price}$</Text>
            </View>

            <View style={styles.foodImageView}>
                <Image style={styles.foodImage} source={this.props.foodImage} resizeMode='contain'/>
            </View>

            <View style={styles.foodDescriptionView}>
                <View style={styles.foodTextView}>
                    <Text style={styles.foodTitle}> {this.props.foodTitle} </Text>
                    <Text style={styles.foodDescription}> {this.props.foodDescriptions}</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
    )
  }
}
