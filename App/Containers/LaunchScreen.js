import React, { Component } from 'react'
import { ScrollView, Text, Image, View, } from 'react-native'
import { Images } from '../Themes'

import {Drawer} from 'native-base'

import Sidebar from './Sidebar'


// Styles
import styles from './Styles/LaunchScreenStyles'
import HeaderLanding from '../Components/HeaderLanding'
import PromoFoodItem from '../Components/PromoFoodItem'

//Food Images
import burger from '../Images/burger.jpg'
import chicken from '../Images/chicken.jpg'
import pizza from '../Images/pizza.jpg'
export default class LaunchScreen extends Component {

  closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
    this.drawer._root.open();
  }

  goToBurgers = () => {
    this.props.navigation.navigate('FoodScreen',{
      text: 'Burgers',
      foodTitle:['BBQ Burger', 'Spicy Burger', 'Big Burger'],
      foodDescriptions:['Excellent burger', "A spicy burger", 'If you are really hungry'],
      prices:['10','14','15'],
      image:[burger,chicken, pizza],
      foodSize:3
       
    });
    this.closeDrawer();
  }

  goToDrinks = () => {
    alert("Drinks");
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <Drawer 
      ref={(ref)=> {this.drawer= ref;}}
      content = {
        <Sidebar
        goToBurgers={this.goToBurgers}
        goToChicken={this.goToChicken}
        goToPizza={this.goToPizza} 
        goToDrinks={this.goToDrinks}
        />
      }
      onClose={() => this.closeDrawer()}
      >


      <View style={styles.mainContainer}>
       
        <HeaderLanding openDrawer={this.openDrawer} navigation={this.props.navigation} />
        <ScrollView>

          <PromoFoodItem 
          image={burger}
          text="Burger"
          foodTitle={['BBQ Burger', 'Spicy Burger', 'Big Burger']}
          foodDescriptions={['Excellent burger', "A spicy burger", 'If you are really hungry']}
          prices={['10','14','15']}
          images={[burger,chicken, pizza]}
          foodSize={3}
          navigation={navigate}
          />

          <PromoFoodItem 
          image={chicken}
          text="Chicken"
          foodTitle={['BBQ Chicken', 'Spicy Chicken', 'Big Chicken']}
          foodDescriptions={['Excellent burger', "A spicy burger", 'If you are really hungry']}
          prices={['10','14','15']}
          images={[chicken,chicken, pizza]}
          foodSize={3}
          navigation={navigate}
          />

          <PromoFoodItem 
          image={pizza}
          text="Pizza"
          foodTitle={['BBQ Pizza', 'Spicy Pizza', 'Big Pizza']}
          foodDescriptions={['Excellent burger', "A spicy burger", 'If you are really hungry']}
          prices={['10','14','15']}
          images={[pizza,chicken, pizza]}
          foodSize={3}
          navigation={navigate}
          />

        </ScrollView>
      </View>
      </Drawer>
    )
  }
}
