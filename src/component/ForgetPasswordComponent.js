import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {screenWidth} from '../res/style/theme';
import {useTranslation} from 'react-i18next';
import Header from './custom/Header';
import LoadingView from './custom/LoadingView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgetPasswordComponent = (props) => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('lang')
      setLang_code(value != null ? value :'vi')
      
    } catch(e) {
      // error reading value
    }
  };

  const {t} = useTranslation();
  const [email, setEmail] = useState('');
  const [lang_code, setLang_code] = useState('');
  const [clearEmail, setClearEmail] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);


  const onClearEmail = () => {
    setEmail('');
    setClearEmail(false);
  };
  const onChangeEmail = (text) => {
    setClearEmail(true);
    setEmail(text);
    setCheckEmail(false);
  };
  const onSubmit = () => {
    if (
      email === null ||
      email.trim() === '' 
    ) {
      if (email === null || email.trim() === '') {
        setCheckEmail(true);
        setEmail('');
      }
      
    } else {
      props.ForgetPassAction({
        email: email,
        lang_code: lang_code,
      });
      console.log('====================================');
      console.log('password', email);
      console.log('lang_code', lang_code);
      console.log('====================================');
    }
  };
  useEffect(() => {
    if (props.statusForgetPass !== null) {
      if (props.statusForgetPass === 1) {
        Alert.alert(
          props.messageForgetPass,
          '',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: async () => {
                await props.logoutForgetPassAction()
                 await props.navigation.goBack()
              },
            },
          ],
          {cancelable: false},
        );
      } else if (props.statusForgetPass === 0) {
        Alert.alert(t('Thông báo'), props.messageForgetPass);
      }
    } else if (props.errorForgetPass !== null) {
      Alert.alert(t('Thông báo'), props.errorForgetPass);
    }
  }, [props.statusForgetPass]);

  return (
    <View>
      {props.loadingForgetPass && <LoadingView />}
      <Header
        isShowBack
        onPressBack={() => {
          props.logoutForgetPassAction();
          props.navigation.goBack();
        }}
      />
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              color: '#2EB553',
            }}>
           {t('Quên mật khẩu')} 
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            {checkEmail && (
              <Text style={{color: 'red'}}>
                * Vui lòng nhập email của bạn
              </Text>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomColor: '#FA8C16',
              borderBottomWidth: 2,
              width: screenWidth * 0.7,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                source={require('../res/image/img/iconemail.png')}
                style={{height: 35, width: 35}}
              />
              <TextInput
                defaultValue={email}
                placeholder='Nhập email của bạn'
                onChangeText={(text) => {
                  onChangeEmail(text);
                }}
                style={{width: clearEmail == true?'80%':'85%'}}></TextInput>
            </View>

            {clearEmail && (
              <View style={{flexDirection: 'row'}}>
                
                <TouchableOpacity
                  onPress={() => {
                    onClearEmail();
                  }}
                  style={{
                    height: 30,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../res/image/img/icon_close.png')}
                    style={{height: 15, width: 15, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
         
          <TouchableOpacity
            onPress={() => onSubmit()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: (screenWidth * 0.8) / 2,
              backgroundColor: '#FA8C16',
              borderRadius: 13,
              marginTop: 20,
            }}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
              {t('Cập nhập')}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgetPasswordComponent;

