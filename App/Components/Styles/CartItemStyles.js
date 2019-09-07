import { Metrics, Colors, Fonts } from '../../Themes'
import { Platform } from 'react-native';

export default {
  ItemContainer: {
      width: '100%',
      height: 150,
  },
  BodyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 10,
    width: '100%'
  },
  ItemImage: {
      width: 100,
      height: 100,
      borderRadius: 20,
  },
  ItemTextContainer: {
      marginRight: 55,
      flexDirection: 'column',
      justifyContent: 'space-evenly',

  },
  ItemTitle: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
  },
  ItemPrice: {
      color: 'grey',
      fontSize: 14,
  },
  ItemCounterContainer: {
      position: 'absolute',
      right: 0,
      width: 70,
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  ItemCountUp: {
      fontSize: Platform.OS === 'ios' ? 30:50,
        color: 'green',
  },
  ItemCountText: {
      fontSize: 15,
      color: 'black',
      marginRight: 18,
  },
  ItemCountDown: {
    fontSize: Platform.OS === 'ios' ? 30:50,
    color: 'grey',
  }
}
