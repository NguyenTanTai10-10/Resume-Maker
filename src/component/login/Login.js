import React,{useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import Images from '../../res/image';
import {screenHeight, screenWidth} from '../../res/style/theme';
import Sizes from '../../utils/Sizes';
import StatusBarView from '../custom/StatusBarView';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = (props) => {
  useEffect(() => {
    getData()

  }, [])
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('lang')
      if(value !== null) {
        i18n.changeLanguage(value);
      }
    } catch(e) {
      i18n.changeLanguage('vi');
      // error reading value
    }
  }
  const {t,i18n} = useTranslation();
  const OnPessFB = () => {
    props.navigation.navigate('Drawers');
  };
  const OnPessGG = () => {
    props.navigation.navigate('ListCVContainer');
  };
  const OnPessAP = () => {
    Alert.alert('Đang được cập nhập');
  };
  // console.log('props===',props.navigation);
  return (
    <View>
      <StatusBarView />
      <ImageBackground
        style={{
          width: screenWidth,
          height: screenHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={Images.bg_register}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: '#1976D2',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 10,
            width: '55%',
          }}
          onPress={() => OnPessFB()}>
          <Image
            source={Images.ic_facebook}
            style={{height: 40, width: 40}}
            resizeMode="contain"
          />
          <Text style={{color: 'white', paddingLeft: 10, fontSize: Sizes.h30}}>
            {t('Đăng nhập Facebook')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => OnPessGG()}
          style={{
            flexDirection: 'row',
            backgroundColor: '#f44336',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 10,
            width: '55%',
            marginTop: 10,
          }}>
          <Image
            source={Images.google_png}
            style={{height: 40, width: 40}}
            resizeMode="contain"
          />
          <Text style={{color: 'white', paddingLeft: 10, fontSize: Sizes.h30}}>
            {t('Đăng nhập Google')}
          </Text>
        </TouchableOpacity>
        {Platform.OS === 'ios' && <TouchableOpacity
          onPress={() => OnPessAP()}
          style={{
            height: 40,
            flexDirection: 'row',
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 10,
            width: '55%',
            marginTop: 10,
          }}>
          <Image
            source={Images.apple}
            style={{height: 35, width: 35}}
            resizeMode="contain"
          />
          <Text style={{color: 'white', paddingLeft: 10, fontSize: Sizes.h30}}>
            {t('Đăng nhập Apple')}
          </Text>
        </TouchableOpacity>}
        

        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('LoginHomeContainer')}>
          <Text style={{color: 'white', fontSize: Sizes.h30}}>
            {t('Bạn là thành viên? Đăng nhập')}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Login;
