import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Images from '../../res/image';
import Header from '../custom/Header';
import {screenHeight, screenWidth} from '../../res/style/theme';
import LoadingView from '../custom/LoadingView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

const LoginHome = (props) => {
  const {t} = useTranslation();
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
  const onPressSaveLogin = async() => {
    if (saveLogin=== false) {
      setSaveLogin(!saveLogin) 
      try {
        await AsyncStorage.removeItem('@saveLogin');
      } catch (e) {
        // remove error
      }
    }
    else if(saveLogin===true){
      setSaveLogin(!saveLogin)
    }
    

      
    
  };

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@saveLogin');
      if (jsonValue != null) {
        var data = JSON.parse(jsonValue);
        setUsername(data.username);
        setPassword(data.password);
        setSaveLogin(true);

      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    console.log(props.status);
    if (props.status !== null) {
      if (props.status === 1) {
        SaveLogin();
        storeData(props.data.jobseeker_id);
        // Alert.alert(t(props.message));
      } else if (props.status === 0) {
        Alert.alert(t(props.message));
      }
    } else if (props.error !== null) {
      Alert.alert(t(props.error));
    }
  }, [props.status]);

  const storeData = async (value) => {
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
      // await props.navigation.replace('Drawers');
    } catch (e) {
      // saving error
    }
  };

  const onChangeUser = (text) => {
    setClearUser(true)
    setUsername(text);
  };
  const onChangePass = (text) => {
    setClearPassword(true);
    setPassword(text);
  };
  const onClearPassword =()=>{
    setPassword('')
    setClearPassword(false)
  }
  const onClearUser =()=>{
    setUsername('')
    setClearUser(false)
  }

  return (
    <View style={{flex: 1}}>
      {props.loading && <LoadingView />}
      <Header />
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
            {clearUser &&<TouchableOpacity
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
              </TouchableOpacity> }
            
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
          }}><TouchableOpacity
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

          <Text style={{alignSelf: 'center', marginLeft: 15 , color:'red'}}>
           {t('Lưu mật khẩu')}
          </Text>
        </TouchableOpacity></View>
        
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
            <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
              {t('Đăng nhập')}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <TouchableOpacity
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
  );
};

export default LoginHome;
