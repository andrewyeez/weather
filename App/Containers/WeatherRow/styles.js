import {StyleSheet} from 'react-native'

export default StyleSheet.create(
  {
    rowContainer: {
      flexDirection: 'row',
      borderBottomColor: 'white',
      borderBottomWidth: 8,
      height: 128
    },
    dayContainer: {
      width: '8%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRightColor: 'black',
      borderRightWidth: 6
    },
    scrollViewContainer: {
      width: '100%',
      paddingRight: 50
    },
    dayFont: {
      fontWeight: '800'
    }
  }
)
