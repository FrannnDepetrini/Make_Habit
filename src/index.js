import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';

import { init } from './db';
import AppNavigator from './navigation';
import { store } from './store/index';
import { styles } from './styles';
import { colors } from './utils/colors';
export default function App() {
  const [loaded] = useFonts({
    'Anton-Regular': require('../assets/fonts/Anton-Regular.ttf'),
    'Oswald-VariableFont_wght': require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
    'PaytoneOne-Regular': require('../assets/fonts/PaytoneOne-Regular.ttf'),
    'RobotoMono-VariableFont_wght': require('../assets/fonts/RobotoMono-VariableFont_wght.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.lightBlueColor2} />
      </View>
    );
  }

  init();

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
