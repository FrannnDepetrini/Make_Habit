import { View, Text, Image, SafeAreaView } from 'react-native';

import { styles } from './styles';
import { CustomButton } from '../../components';
const WelcomeScreen = ({ navigation }) => {
  const onHandleNextPage = () => {
    navigation.navigate('Auth');
  };
  return (
    <SafeAreaView style={styles.principalContainer}>
      <View style={styles.container}>
        <View style={styles.titleContent}>
          <Text style={styles.title}>Bievenido</Text>
          <Text style={styles.phrase}>"Construye un mejor tu, un hábito a la vez"</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/ImagenMakeHabit.png')}
          />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton text="Continuar" style={styles.button} onSelected={onHandleNextPage} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
