import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Content, Text, Item, Icon, Form, Textarea, Button } from 'native-base'

import styles from './Styles/CheckoutFormStyles'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartActions from '../Redux/CartRedux';

import OrderService from '../Services/OrderService'

class CheckoutForm extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            name: '',
            address: '',
            phone: '',
            note: '',
            price: this.props.totalPrice,
            cart: this.props.cart,
        }
    }
    static propTypes = {
        setClearcart: PropTypes.func,
    }

    submit = () => {
        if (this.state.name != '' && this.state.address != '' && this.state.phone != '' ) {
            //Write all this stuff into the database
            OrderService.addOrder(
                this.state.name,
                this.state.address,
                this.state.phone,
                this.state.note,
                this.state.price,
                this.state.cart,
            );
            alert('Food is ordered.');
            this.props.setClearcart();
            this.props.navigation.navigate('LaunchScreen');
        }
        else alert('Please fill in all the required info.');
    }

    render() {
        return(
            <View style={styles.FormContainer}>
                <Item>
                    <Icon style={styles.FormIcon} active name="person" />
                    <TextInput 
                        style={styles.FormText}
                        placeholder="Name *"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.nativeEvent.text })}
                    />
                </Item>
                <Item>
                    <Icon style={styles.FormIcon} active name="home" />
                    <TextInput 
                        style={styles.FormText}
                        placeholder="Address *"
                        value={this.state.address}
                        onChange={(e) => this.setState({ address: e.nativeEvent.text })}
                    />
                </Item>
                <Item>
                    <Icon style={styles.FormIcon} active name="call" />
                    <TextInput 
                        style={styles.FormText}
                        placeholder="Phone *"
                        value={this.state.phone}
                        onChange={(e) => this.setState({ phone: e.nativeEvent.text })}
                    />
                </Item>
                <Form style={styles.TextAreaContainer}>
                    <Textarea 
                        style={styles.TextArea}
                        rowSpan={4}
                        bordered
                        placeholder="Note (ex. 'Red house, floor 2')"
                        value={this.state.note}
                        onChange={(e) => this.setState({ note: e.nativeEvent.text })}
                    />
                </Form>

                <Button
                    block
                    style={styles.SubmitButton}
                    onPress={() => this.submit()}
                >
                    <Text
                        uppercase={false}
                        style={styles.SubmitText}
                    >
                        Place order
                    </Text>
                </Button>
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
        setClearcart: (cart) => dispatch(CartActions.changeClearcart(cart)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm)