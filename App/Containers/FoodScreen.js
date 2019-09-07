import React, { Component } from 'react'
import { ScrollView, Text, Image, View, } from 'react-native'
import { Images } from '../Themes'
import {Container, Content} from 'native-base'


// Styles
import styles from './Styles/FoodScreenStyles'

import HeaderFood from '../Components/HeaderFood'

import FoodItem from '../Components/FoodItem'

export default class FoodScreen extends Component {

    componentWillMount(){ 
        const {navigation} = this.props;    
        title = navigation.getParam('title', '');
        image = navigation.getParam('image', '');
        foodTitle = navigation.getParam('foodTitle', '');
        prices = navigation.getParam('prices', '');
        foodSize = navigation.getParam('foodSize', '');
        foodDescriptions = navigation.getParam('foodDescriptions', '');
    }

  render () {

    var foodItems = [];
    for (let i = 0; i < foodSize ; i++){
        foodItems.push(
            <View>
                <FoodItem
                navigation={this.props.navigation}
                foodTitle={foodTitle[i]}
                price={prices[i]}
                foodImage={image[i]}
                foodDescriptions={foodDescriptions[i]}
                />
            </View>
        )
    }
    return (
      <Container style={styles.mainContainer}>
       <HeaderFood navigation={this.props.navigation} />

        <Content style={styles.titleTextContainer}>
            <Text style={styles.titleText}> {title} </Text>
            {foodItems}
           
        </Content>
      </Container>
    )
  }
}
