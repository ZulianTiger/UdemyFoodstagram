import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { Container, Text, Content, Button, Icon } from 'native-base'

import styles from './Styles/FoodDetailsStyles'

import HeaderFood from '../Components/HeaderFood'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartActions from '../Redux/CartRedux';

class FoodDetails extends Component {
    static propTypes = {
        setCart: PropTypes.func,
    }

    render() {
        return (
            <Container>
                <HeaderFood navigation={this.props.navigation} />
                <ImageBackground source={this.props.navigation.getParam('image', null)} style={styles.BackgroundImage} />

                <Content style={styles.FoodContent}>
                    <View style={styles.NameAndPrice}>
                        <View style={styles.Name}>
                            <Text style={styles.NameText}>
                                {this.props.navigation.getParam('name', 'Error')}
                        </Text>
                        </View>
                        <View style={styles.Price}>
                            <Text style={styles.PriceText}>
                                $ {this.props.navigation.getParam('price', 'Error')}
                        </Text>
                        </View>
                    </View>

                    <Button iconLeft dark
                        style={styles.AddButton}
                        onPress={() => {
                            this.props.setCart({
                                itemTitle: this.props.navigation.getParam('name', 'Error'),
                                itemPrice: this.props.navigation.getParam('price', 'Error'),
                                itemCount: '1',
                                itemImage: this.props.navigation.getParam('image', null),
                                itemExtras: null,
                            });
                            alert(JSON.stringify(this.props.cart));
                        }}
                    >
                        <Text style={styles.AddText}>
                            Add
                        </Text>
                        <Icon type="MaterialCommunityIcons" name="plus" style={styles.AddIcon} />
                    </Button>

                </Content>
            </Container>
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
        setCart: (cart) => dispatch(CartActions.changeCart(cart)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails)