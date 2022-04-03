import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Platform } from 'react-native'

const FocusedStatusBar = ({ backgroundColor, barStyle = "dark-content" }) => {
  const isFocused = useIsFocused();

  const insets = useSafeAreaInsets();

  return isFocused ? 
  Platform.OS == 'ios' ? (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle} />
    </View>
    ) 
    : (
        <StatusBar animated={true} backgroundColor={backgroundColor} />
      )
    : null;
}

export default FocusedStatusBar