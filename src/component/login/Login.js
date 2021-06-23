import React, {useEffect, useState} from 'react';
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
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import LoadingView from '../custom/LoadingView';
GoogleSignin.configure({
  webClientId:
    '585809866706-f7ohvdh2of7v48u6su4v7gud050t122o.apps.googleusercontent.com',
});
const Login = (props) => {
  const [initializing, setInitializing] = useState(true);
  const [userId, setUserId] = useState();
  const onAuthStateChanged=(user) =>{
    console.log(user);
    // setUserId(user);
    if(user !== null){
      props.loginAction({
      email: user.email,
      password: '',
      userType: 1,
      registrationIds: '',
      FacebookId: '',
      GoogleId: user.uid,
    });
    }
    else{
      console.log('====================================');
      console.log('error');
      console.log('====================================');
    }
    
    // setUserName(user.displayName)
    // setUserId(user.uid)
    // setUserPhoto(user.photoURL)
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    console.log(props.status);
    if (props.status !== null) {
      if (props.status === 1) {
        storeData(props.data.jobseeker_id)
       
        
        // console.log('navigate 1');
       
        // Alert.alert(t(props.message));
      } else if (props.status === 0) {
        console.log('====================================');
        console.log('navigate 2');
        console.log('====================================');
      }
    } else if (props.error !== null) {
      Alert.alert(t(props.error));
    }
  }, [props.status]);
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@jobseeker_id', jsonValue);
      await props.navigation.navigate('Drawers')
    } catch (e) {
      // saving error
    }
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  useEffect(() => {
    getData();
    // getToken();
    // messaging().onMessage(async (remoteMessage) => {
    //   console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });
    // messaging().onNotificationOpenedApp((remoteMessage) => {
    //   console.log(
    //     'Notification caused app to open from background state:',
    //     JSON.stringify(remoteMessage),
    //   );
    // });
    // messaging()
    //   .getInitialNotification()
    //   .then((remoteMessage) => {
    //     if (remoteMessage) {
    //       console.log(
    //         'Notification caused app to open from quit state:',
    //         JSON.stringify(remoteMessage),
    //       );
    //     }
    //   });
  }, []);
  const getToken = async () => {
    const token = await messaging().getToken();
    // console.log("Toke mess ==",token);
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('lang');
      if (value !== null) {
        i18n.changeLanguage(value);
      }
    } catch (e) {
      i18n.changeLanguage('vi');
      // error reading value
    }
  };
  const {t, i18n} = useTranslation();
  const OnPessFB = () => {
    props.navigation.navigate('Drawers');
  };
  const OnPessGG = async() => {
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
    // props.navigation.navigate('ListCVContainer');
  };
  const OnPessAP = () => {
    Alert.alert('Đang được cập nhập');
  };
  // console.log('props===',props.navigation);
  return (
    <View>
      
      <StatusBarView />
      {props.loading && <LoadingView />}
      <ImageBackground
        style={{
          width: screenWidth,
          height: screenHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={Images.bg_register}>
        {/* <Text>{user.displayName}</Text>
        <Text>{user.email}</Text>
        <Text>{user.uid}</Text>
        <Image
          source={{uri: `${user.photoURL}`}}
          style={{width: 100, height: 100}}
        /> */}
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
        {Platform.OS === 'ios' && (
          <TouchableOpacity
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
            <Text
              style={{color: 'white', paddingLeft: 10, fontSize: Sizes.h30}}>
              {t('Đăng nhập Apple')}
            </Text>
          </TouchableOpacity>
        )}

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
