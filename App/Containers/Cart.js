import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Content, Text } from 'native-base'

import HeaderFood from '../Components/HeaderFood'
import CartItem from '../Components/CartItem'

import styles from './Styles/CartStyles'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartActions from '../Redux/CartRedux';

class Cart extends Component {
    static propTypes = {
        setItemcountup: PropTypes.func,
        setItemcountdown: PropTypes.func,
        setRemoveitem: PropTypes.func,
    }

    render() {
        let itemsArray = [];
        let totalPrice = 0;

        if (this.props.cart != undefined && this.props.cart != []) {
            for (let i = 0; i < this.props.cart.length; i++) {
                itemsArray.push(
                    <CartItem
                        title={this.props.cart[i].itemTitle}
                        price={this.props.cart[i].itemPrice}
                        count={this.props.cart[i].itemCount}
                        image={this.props.cart[i].itemImage}
                        itemKey={i}
                    />
                );
                totalPrice += this.props.cart[i].itemPrice * this.props.cart[i].itemCount;
            }
        }
        else {
            itemsArray.push(
                <Text
                    style={{
                        textAlign: 'center',
                        marginTop: '50%',
                        fontStyle: 'italic',
                    }}
                >
                    The cart is empty.
                </Text>
            )
        }

        return (
            <View>
                <HeaderFood navigation={this.props.navigation} />
                <View style={styles.ParentView}>
                    <Content>
                        {itemsArray}
                    </Content>
                    <View style={styles.FooterContainer}>
                        <Text style={styles.FooterText}>
                            Total: $ {totalPrice}
                        </Text>
                        <TouchableOpacity
                            style={styles.CheckoutButton}
                            onPress={() => {
                                this.props.navigation.navigate('Checkout', {
                                    price: totalPrice,
                                })
                            }}
                        >
                            <Text style={styles.FooterText}>
                                Checkout
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setItemcountup: (itemKey) => dispatch(CartActions.changeItemcountup(itemKey)),
        setItemcountdown: (itemKey) => dispatch(CartActions.changeItemcountdown(itemKey)),
        setRemoveitem: (itemKey) => dispatch(CartActions.changeRemoveitem(itemKey)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)