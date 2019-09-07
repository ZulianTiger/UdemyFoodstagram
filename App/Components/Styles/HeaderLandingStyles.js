import { StyleSheet, Platform } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
    headerStyle:{
        backgroundColor: 'orange',
    },
    iconStyle:{
        color:'black',
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
    },
    titleText:{
        fontSize: 21,
        fontStyle: 'italic',
        fontWeight: '400',
        color: 'white',
    },
    headerContainer:{
        height: Platform.OS === 'ios' ? '10%' : '8%',
        flex: 0,
        zIndex: 5,
    },
})
