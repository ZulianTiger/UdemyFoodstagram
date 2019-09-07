import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ParentView: {
      height: '100%',
      width: '100%',
  },
  FooterContainer: {
      height: 250,
      width: '100%',
      backgroundColor: 'orange',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
  },
  FooterText:{
      width: '100%',
      textAlign: 'center',
      color: 'white',
      fontSize: 24,
      marginTop: 5,
  },
  CheckoutButton: {
      marginTop: 20,
      width: '50%',
      marginLeft: '25%',
      height: 40,
      borderRadius: 25,
      backgroundColor: 'green',
  }
})
