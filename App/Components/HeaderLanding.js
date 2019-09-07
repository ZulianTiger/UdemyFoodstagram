import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

import {Container, Header, Left, Body, Right, Button, Icon} from 'native-base'

// Styles
import styles from './Styles/HeaderLandingStyles'

export default class HeaderLanding extends Component {
  render () {
    return (
        <Container style={styles.headerContainer}>
            <Header style={styles.headerStyle}>
                <Left>
                    <Button transparent onPress={() => this.props.openDrawer()}>
                        <Icon style={styles.iconStyle} name="ios-menu"/>
                    </Button>
                </Left>

                <Body>
                    <Text style={styles.titleText}>Foodstagram</Text>
                </Body>

                <Right>
                    <Button transparent onPress={() => this.props.navigation.navigate('Cart')}>
                     <Icon style={styles.iconStyle} type="FontAwesome5" name="shopping-cart"/>
                    </Button>
                </Right>
            </Header>
        </Container>
    )
  }
}
