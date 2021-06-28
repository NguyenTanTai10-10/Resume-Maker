import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  TextInput,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Images from '../../res/image';
import Header from '../custom/Header';
import {screenHeight, screenWidth} from '../../res/style/theme';
import Sizes from '../../utils/Sizes';
import StatusBarView from '../custom/StatusBarView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import LoadingView from '../custom/LoadingView';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
GoogleSignin.configure({
  webClientId:
    '585809866706-f7ohvdh2of7v48u6su4v7gud050t122o.apps.googleusercontent.com',
});
const Login = (props) => {
  const [clearPassword, setClearPassword] = useState(false);
  const [clearUser, setClearUser] = useState(false);
  const [saveLogin, setSaveLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [Check, setCheck] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('1');
  const [registrationIds, setRegistrationIds] = useState('');
  const [FacebookId, setFacebookId] = useState('');
  const [GoogleId, setGoogleId] = useState('');
  const onPressLogin = () => {
    if (
      username === '' ||
      password === '' ||
      password.trim() === '' ||
      username.trim() === ''
    ) {
      Alert.alert(t('Lưu ý'), t('Bạn phải nhập đầy đủ thông tin đăng nhập'));
    } else {
      props.loginAction({
        email: username,
        password: password,
        userType: userType,
        registrationIds: registrationIds,
        FacebookId: FacebookId,
        GoogleId: GoogleId,
      });
    }
  };
  const onChangeUser = (text) => {
    setClearUser(true);
    setUsername(text);
  };
  const onChangePass = (text) => {
    setClearPassword(true);
    setPassword(text);
  };
  const onClearPassword = () => {
    setPassword('');
    setClearPassword(false);
  };
  const onClearUser = () => {
    setUsername('');
    setClearUser(false);
  };
  const [initializing, setInitializing] = useState(true);
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState();
  const onAuthStateChang = (user) => {
    console.log('====================================');
    console.log('user1', user);
    console.log('====================================');

    if (user !== null) {
      console.log('====================================');
      console.log('vao user');
      console.log('====================================');
      props.loginAction({
        email: user.email,
        password: '',
        userType: 1,
        registrationIds: '',
        FacebookId: '',
        GoogleId: user.uid,
      });
    } else {
      console.log('====================================');
      console.log('error1');
      console.log('====================================');
    }

    if (initializing) setInitializing(false);
  };
  // if (initializing) return null;
  useEffect(() => {
    if (props.status !== null) {
      if (props.status === 1) {
        SaveLogin();
        storeData(props.data.jobseeker_id);
      } else if (props.status === 0) {
        console.log('====================================');
        props.navigation.navigate('ListCVContainer');
        console.log('====================================');
      }
    } else if (props.error !== null) {
      Alert.alert(t(props.error));
    }
  }, [props.status]);
  const storeData = async (value) => {
    console.log('vao day');
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@jobseeker_id', jsonValue);
      await Alert.alert(
        t(props.message),
        '',
        [
          {
            text: 'OK',
            onPress: async () => {
              props.navigation.replace('Drawers');
            },
          },
        ],
        {cancelable: false},
      );
    } catch (e) {
      // saving error
    }
  };
  useEffect(() => {
    const subscribered = auth().onAuthStateChanged(onAuthStateChang);
    return subscribered; // unsubscribe on unmount
  }, []);
  useEffect(() => {
    if (props.route.params !== undefined) {
      // console.log('123');
      setLogin(props.route.params.login);
    }

    getData();
    getToken();
    messaging().onMessage(async (remoteMessage) => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        JSON.stringify(remoteMessage),
      );
    });
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            JSON.stringify(remoteMessage),
          );
        }
      });
  }, []);
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log("Toke mess ==",token);
  };
  const SaveLogin = async () => {
    if (saveLogin) {
      try {
        const jsonValue = JSON.stringify({
          username: username,
          password: password,
        });
        await AsyncStorage.setItem('@saveLogin', jsonValue);
      } catch (e) {
        // saving error
      }
    }
  };
  const onPressSaveLogin = async () => {
    if (saveLogin === false) {
      setSaveLogin(!saveLogin);
      try {
        await AsyncStorage.removeItem('@saveLogin');
      } catch (e) {
        // remove error
      }
    } else if (saveLogin === true) {
      setSaveLogin(!saveLogin);
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@saveLogin');
      if (jsonValue != null) {
        var data = JSON.parse(jsonValue);
        setUsername(data.username);
        setPassword(data.password);
        setSaveLogin(true);
      }

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
  const OnPessFB = async () => {
  //   if(LoginManager.getInstance()!=null){
  //     LoginManager.getInstance().logOut();
  // }
    
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
    
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
    
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
    
      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    
      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    
  };
  const OnPessGG = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };
  const OnPessAP = () => {
    Alert.alert('Đang được cập nhập');
  };
  const LogOut = async () => {
    setLogin(true);
  };

  return (
    <View>
      {props.loading && <LoadingView />}
      {login === false ? (
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
                backgroundColor: '#e6bf00',
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 10,
                width: '55%',
                
              }}
              onPress={() => setLogin(true)}
              >
              <Image
                source={require('../../res/image/img/email.png')}
                style={{height: 40, width: 40, flex:0.3}}
                resizeMode="contain"
              />
              <Text
                style={{color: 'white', paddingLeft: 10, fontSize: Sizes.h30,flex:0.7}}>
                {t('Đăng nhập Email')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#1976D2',
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 10,
                width: '55%',
                marginTop: 10,
                
              }}
              onPress={() => OnPessFB()}>
              <Image
                source={Images.ic_facebook}
                style={{height: 40, width: 40,flex:0.3}}
                resizeMode="contain"
              />
              <Text
                style={{color: 'white', paddingLeft: 10, fontSize: Sizes.h30,flex:0.7}}>
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
                style={{height: 40, width: 40,flex:0.3}}
                resizeMode="contain"
              />
              <Text
                style={{color: 'white', paddingLeft: 10, fontSize: Sizes.h30,flex:0.7}}>
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
                  style={{
                    color: 'white',
                    paddingLeft: 10,
                    fontSize: Sizes.h30,
                  }}>
                  {t('Đăng nhập Apple')}
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={{marginTop: 20}} onPress={() => LogOut()}>
              <Text style={{color: 'white', fontSize: Sizes.h30}}>
                {t('Bạn là thành viên? Đăng nhập')}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      ) : (
        //=================================================================================================================================
        //=================================================================================================================================
        <View>
          <Header isShowBack onPressBack={() => setLogin(false)} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../../res/image/img/resumeicon.png')}
              style={{height: 120, width: 120}}
              resizeMode="contain"
            />

            <Text
              style={{
                fontSize: 30,
                color: '#FA8C16',
                fontWeight: '700',
                marginTop: 30,
              }}>
              {t('Đăng nhập')}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderBottomColor: '#FA8C16',
                borderBottomWidth: 2,
                width: screenWidth * 0.6,
              }}>
              <Image
                source={require('../../res/image/img/iconemail.png')}
                style={{height: 35, width: 35}}
              />
              <TextInput
                defaultValue={username}
                placeholder="Email"
                onChangeText={(text) => {
                  onChangeUser(text);
                }}
                style={{width: '75%'}}></TextInput>
              {clearUser && (
                <TouchableOpacity
                  onPress={() => {
                    onClearUser();
                  }}
                  style={{
                    height: 30,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../res/image/img/icon_close.png')}
                    style={{height: 15, width: 15, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomColor: '#FA8C16',
                borderBottomWidth: 2,
                width: screenWidth * 0.6,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../res/image/img/padlock.png')}
                  style={{height: 35, width: 35}}
                />
                <TextInput
                  defaultValue={password}
                  secureTextEntry={showPassword}
                  placeholder={t('Mật khẩu')}
                  onChangeText={(text) => {
                    onChangePass(text);
                  }}
                  style={{width: '60%'}}></TextInput>
              </View>

              {clearPassword && (
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                    style={{
                      height: 30,
                      width: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {showPassword === true ? (
                      <Image
                        source={require('../../res/image/img/eye.png')}
                        style={{height: 20, width: 25, resizeMode: 'contain'}}
                      />
                    ) : (
                      <Image
                        source={require('../../res/image/img/invisible.png')}
                        style={{height: 20, width: 25, resizeMode: 'contain'}}
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      onClearPassword();
                    }}
                    style={{
                      height: 30,
                      width: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../res/image/img/icon_close.png')}
                      style={{height: 15, width: 15, resizeMode: 'contain'}}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: screenWidth * 0.6,
              }}>
              <TouchableOpacity
                onPress={() => {
                  onPressSaveLogin();
                }}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',

                  marginTop: 10,
                }}>
                {saveLogin === false ? (
                  <Image
                    source={require('../../res/image/img/stop.png')}
                    style={{height: 17, width: 17, resizeMode: 'contain'}}
                  />
                ) : (
                  <Image
                    source={require('../../res/image/img/check.png')}
                    style={{height: 17, width: 17, resizeMode: 'contain'}}
                  />
                )}

                <Text
                  style={{alignSelf: 'center', marginLeft: 15, color: 'red'}}>
                  {t('Lưu mật khẩu')}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20}}>
              <TouchableOpacity
                onPress={() => {
                  onPressLogin();
                }}
                style={{
                  borderRadius: 20,
                  backgroundColor: '#FA8C16',
                  height: 50,
                  width: screenWidth / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
                  {t('Đăng nhập')}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20, flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('LoginContainer');
                }}
                style={{
                  height: 60,
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.ic_facebook}
                  style={{height: 50, width: 50}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  OnPessGG();
                }}
                style={{
                  height: 60,
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.google_png}
                  style={{height: 50, width: 50}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {Platform.OS === 'ios' && (
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 60,
                    width: 60,
                  }}>
                  <Image
                    source={require('../../res/image/img/apple(4).png')}
                    style={{height: 50, width: 50}}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ListCVContainer')}
              style={{marginTop: 20}}>
              <Text>{t('Tạo tài khoản')}</Text>
            </TouchableOpacity>
            <View style={{marginTop: 20}}>
              <Text>{t('Quên mật khẩu')}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Login;
