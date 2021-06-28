import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Images from '../../res/image';
import StatusBarView from '../custom/StatusBarView';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
GoogleSignin.configure({
  webClientId:
    '585809866706-f7ohvdh2of7v48u6su4v7gud050t122o.apps.googleusercontent.com',
});

const DrawerComponent = (props) => {
  const [userId, setUserId] = useState('');
  const [ImagesAVT, setImagesAVT] = useState(false);
  const [data, setData] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const onAuthStateChanged = (user) => {
    // console.log(user);
    setUser(user);
    // setUserName(user.displayName)
    // setUserId(user.uid)
    // setUserPhoto(user.photoURL)
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  const LogOut = async () => {
    
     auth()
     .signOut()
     .then(() => console.log('User signed out!'));
       props.logoutAction();
       props.navigation.replace('LoginContainer',{login :'true'});
       props.logoutExportPdfAction()
  };

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    // props.navigation.addListener('focus', async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      const value = await AsyncStorage.getItem('lang');
      setUserId(jsonValue != null ? JSON.parse(jsonValue) : null);

      await props.infoUserAction({
        user_id: jsonValue != null ? JSON.parse(jsonValue) : null,
        language: value != null ? value : 'vi',
        emp_id: '',
        is_app_cv: 1,
      });
    } catch (e) {
      // error reading value
    }
    // });
  };
  useEffect(() => {
    if (props.statusUser !== null) {
      if (props.statusUser === 1) {
        if (props.dataUser.profile_image !== '') {
          setImagesAVT(true);
        } else if (props.dataUser.profile_image === '') {
          setImagesAVT(false);
        }
        setData(props.dataUser);
      }
    } else if (props.errorUser !== null) {
      Alert.alert('Thông báo', props.errorUser);
    }
  }, [props.statusUser]);
  const {t} = useTranslation();
  return (
    <View style={{flex: 1}}>
      <StatusBarView />
      <View style={{flex: 1}}>
        <View style={{flex: 0.1}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View
              style={{
                flex: 0.3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {ImagesAVT === false ? (
                <Image
                  source={require('../../res/image/img/avatar.png')}
                  style={{
                    height: 60,
                    width: 60,
                    resizeMode: 'cover',
                    borderRadius: 100,
                    position: 'absolute',
                    flex: 0.5,
                    borderColor: '#FA8C16',
                    borderWidth: 1,
                  }}
                />
              ) : (
                <Image
                  source={{uri: data.profile_image}}
                  style={{
                    height: 60,
                    width: 60,
                    resizeMode: 'cover',
                    borderRadius: 100,
                    position: 'absolute',
                    flex: 0.5,
                    borderColor: '#FA8C16',
                    borderWidth: 1,
                  }}
                />
              )}
            </View>
            <View
              style={{
                flex: 0.7,
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text style={{fontSize: 21, fontWeight: '700',marginTop:5}} numberOfLines={1}>
                {data.name}
              </Text>
              <Text style={{color: '#FA8C16', fontSize: 15}} numberOfLines={1}>
                {data.email}
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#FF4D4F',
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  marginTop: 5,
                }}>
                <Text style={{color: 'white'}} numberOfLines={1}>
                  {data.phone}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 20, flex: 0.7}}>
          <Text style={{fontSize: 17}}>
            {t('Cài đặt tài khoản').toUpperCase()}
          </Text>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 30,
              marginVertical: 10,
            }}>
            <Image
              style={{height: 20, width: 20}}
              source={require('../../res/image/img/icon_edit_account.png')}
            />
            <Text style={{marginLeft: 15, fontSize: 12}}>
              {t('Thay đổi thông tin').toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{props.navigation.navigate('ChangePassContainer')}}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 30,
              marginVertical: 10,
            }}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../res/image/img/icon_change_password.png')}
            />
            <Text style={{marginLeft: 15, fontSize: 12}}>
              {t('Thay đổi mật khẩu').toUpperCase()}
            </Text>
          </TouchableOpacity>

          <Text style={{fontSize: 17, marginTop: 15}}>
            {t('Cài đặt').toUpperCase()}
          </Text>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 30,
              marginVertical: 10,
            }}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../res/image/img/icon_rating_app.png')}
            />
            <Text style={{marginLeft: 15, fontSize: 12}}>
              {t('Đánh giá').toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 30,
              marginVertical: 10,
            }}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../res/image/img/icon_send_feedback.png')}
            />
            <Text style={{marginLeft: 15, fontSize: 12}}>
              {t('Phản hồi').toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 30,
              marginVertical: 10,
            }}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../res/image/img/icon_privacy_policy.png')}
            />
            <Text style={{marginLeft: 15, fontSize: 12}}>
              {t('Chính sách bảo mật').toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 30,
              marginVertical: 10,
            }}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../res/image/img/icon_term_and_condition.png')}
            />
            <Text style={{marginLeft: 15, fontSize: 12}}>
              {t('Điều khoàn và điều kiện').toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 15}}
            onPress={async () => {
              LogOut();
            }}>
            <Text style={{fontSize: 17}}>{t('Đăng xuất').toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DrawerComponent;
