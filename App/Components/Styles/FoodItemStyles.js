import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

let height = Dimensions.get('window').height;

export default StyleSheet.create({
    foodItemView:{
        width: '100%',
        height: height/4,
        paddingLeft: '5%',
        paddingTop: '5%',
        //backgroundColor: 'black', 
    },
    priceView:{
        backgroundColor: '#8DBA25',
        height: '20%',
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 5,
    },
    priceText:{
        textAlign: 'center',
        fontSize: 21,
        color: 'white',
    },
    foodImageView:{
        width: '60%',
        height: '70%',
        position: 'absolute',
        paddingTop: '15%',
        paddingLeft: '10%',
    },
    foodImage:{
        height: '100%',
        width: '100%',
        borderRadius: 40,
    },
    foodDescriptionView:{
        height: '60%',
        width: '60%',
        position: 'absolute',
        zIndex: -1,
        marginLeft: '30%',
        marginTop: '5%',
        backgroundColor: '#F4F4F4',
        borderRadius: 20,
    },
    foodTextView:{
        position:'absolute',
        width: '50%',
        height: '100%',
        zIndex: 1,
        marginLeft: '40%',
    },
    foodTitle:{
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
    },
    foodDescription:{
        textAlign: 'center',
        fontWeight: '400',
    }

})
