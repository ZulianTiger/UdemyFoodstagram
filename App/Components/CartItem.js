import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Content, Text, SwipeRow, Button, Icon } from 'native-base'

import styles from './Styles/CartItemStyles'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartActions from '../Redux/CartRedux';

class CartItem extends Component {
    static propTypes = {
        setItemcountup: PropTypes.func,
        setItemcountdown: PropTypes.func,
        setRemoveitem: PropTypes.func,
    }

    render() {
        return (
            <View style={styles.ItemContainer}>
                <SwipeRow
                    disableRightSwipe
                    rightOpenValue={-100}
                    body={
                        <View style={styles.BodyContainer}>
                            <Image 
                                source={this.props.image}
                                style={styles.ItemImage}
                            />
                            <View style={styles.ItemTextContainer}>
                                <Text style={styles.ItemTitle}>
                                    {this.props.title}
                                </Text>
                                <Text style={styles.ItemPrice}>
                                    $ {this.props.price}
                                </Text>
                            </View>

                            <View style={styles.ItemCounterContainer}>
                                <Button
                                    transparent
                                    onPress={() => {
                                       this.props.setItemcountup(this.props.itemKey);
                                    }}
                                >
                                    <Icon name='arrow-dropup' stlye={styles.ItemCountUp}/>
                                </Button>
                                <Text style={styles.ItemCountText}>
                                    {this.props.count}
                                </Text>
                                <Button
                                    transparent
                                    onPress={() => {
                                        this.props.setItemcountdown(this.props.itemKey);
                                    }}
                                >
                                    <Icon name='arrow-dropdown' stlye={styles.ItemCountDown}/>
                                </Button>
                            </View>
                            
                        </View>
                    }
                    right={
                        <Button danger onPress={() => {
                            this.props.setRemoveitem(this.props.itemKey);
                        }}>
                            <Icon active name="trash" />
                        </Button>
                    }
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)