import React, { useReducer, useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CustomButton, Input } from '../../components';
import { clearError, signIn, signUp } from '../../store/auth.slice';
import { modalMessage } from '../../store/modal.slice';
import { UPDATED_FORM, onInputChange } from '../../utils/form';
const initialState = {
  email: { value: '', error: '', touched: false, hasError: true },
  password: { value: '', error: '', touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      // eslint-disable-next-line no-case-declarations
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
  }
};
const AuthScreen = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const [isPasswordRevealed, setIsPasswordRevealed] = useState(false);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const hasError = useSelector((state) => state.auth.hasError);
  const error = useSelector((state) => state.auth.error);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const title = isLogin ? 'Login' : 'Registro';
  const buttonTitle = isLogin ? 'Login' : 'Registro';
  const messageText = isLogin
    ? 'No tienes una cuenta aún? Registrate'
    : 'Ya tienes una cuenta? Inicia sesion';
  const messageTextIndex = messageText.indexOf('?');
  const messageTextFirstPart = messageText.substring(0, messageTextIndex + 1);
  const messageTextSecondPart = messageText.substring(messageTextIndex + 1);
  const onHandleInputChange = ({ name, value }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
    dispatch(modalMessage(isLogin));
  };

  const onHandleAuth = () => {
    dispatch(
      isLogin
        ? signIn({ email: formState.email.value, password: formState.password.value })
        : signUp({ email: formState.email.value, password: formState.password.value })
    );
  };
  const passwordReveal = () => {
    setIsPasswordRevealed(!isPasswordRevealed);
  };

  const onHandleCloseModal = () => {
    dispatch(clearError());
  };

  return (
    <SafeAreaView style={styles.principalContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          vertical
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          <Modal visible={isLoading || hasError} transparent animationType="fade">
            <View style={styles.modalContainer}>
              <View style={hasError ? styles.modalErrorContent : styles.modalContent}>
                <Text style={styles.modalMessage}>{error ? error : 'Loading'}</Text>
                {error ? (
                  <TouchableOpacity style={styles.buttonModalError} onPress={onHandleCloseModal}>
                    <Text style={styles.modalTextError}>Ok</Text>
                  </TouchableOpacity>
                ) : (
                  <ActivityIndicator style={styles.Loader} size="small" color="black" />
                )}
              </View>
            </View>
          </Modal>
          <View style={styles.content}>
            <Text style={styles.headerTitle}>{title}</Text>
            <ScrollView>
              <Input
                iconName="email"
                style={styles.input}
                placeHolder="makehabit@gmail.com"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => onHandleInputChange({ value: text, name: 'email' })}
                value={formState.email.value}
                label="Email"
                hasError={formState.email.hasError}
                error={formState.email.error}
                touched={formState.email.touched}
              />

              <Input
                iconName={!isPasswordRevealed ? 'lock-outline' : 'lock-open'}
                style={styles.input}
                placeHolder="************"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => onHandleInputChange({ value: text, name: 'password' })}
                secureTextEntry={!isPasswordRevealed}
                value={formState.password.value}
                label="Password"
                hasError={formState.password.hasError}
                error={formState.password.error}
                touched={formState.password.touched}
                passwordReveal={passwordReveal}
                iconPasswordName={!isPasswordRevealed ? 'eye-outline' : 'eye-off-outline'}
                iconPasswordColor="black"
              />
            </ScrollView>
            <View style={styles.linkContainer}>
              <Text>
                <Text style={styles.textMessage}>{messageTextFirstPart} </Text>
                <Text style={styles.textLink} onPress={onHandleChangeAuth}>
                  {messageTextSecondPart}
                </Text>
              </Text>
              <CustomButton
                textStyle={formState.isFormValid ? styles.textStyle : styles.textStyleDisabled}
                style={formState.isFormValid ? styles.buttonSubmit : styles.buttonSubmitDisabled}
                disabled={!formState.isFormValid}
                onSelected={onHandleAuth}
                text={buttonTitle}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AuthScreen;
