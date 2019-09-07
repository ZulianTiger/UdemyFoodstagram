import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, Text, Container } from 'native-base'

import HeaderFood from '../Components/HeaderFood'
import CheckoutForm from '../Components/CheckoutForm'

import styles from './Styles/CheckoutStyles'

export default class Checkout extends Component {

    render() {
        return(
            <Container>
                <HeaderFood navigation={this.props.navigation} />
                <Content style={styles.CheckoutContent}>
                    <Text style={styles.Title}>
                        Please enter your info.
                    </Text>
                    <CheckoutForm 
                        navigation={this.props.navigation}
                        totalPrice={this.props.navigation.getParam("price", null)}
                    />
                </Content>
            </Container>
        )
    }

}