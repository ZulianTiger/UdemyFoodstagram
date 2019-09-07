import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

let height = Dimensions.get('window').height;


export default StyleSheet.create({
    foodCard: {
        height: height/2,
        alignItems: 'center',
    },
    promoImage: {
        height: '100%',
    },
    textView:{
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    text:{
        fontSize: 36,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: '20%',
        marginRight: '20%',
        borderRadius: 10,
        paddingTop: '5%',
        paddingBottom: '5%',
    }
})
