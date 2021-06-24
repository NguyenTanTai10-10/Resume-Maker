import React, {useState,useEffect} from 'react';
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

const ChangPassComponent = (props) => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      setUserId(jsonValue != null ? JSON.parse(jsonValue) : null);

      // console.log(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {}
  };
  const {t} = useTranslation();
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [clearPassword, setClearPassword] = useState(false);
  const [passwordNew, setPasswordNew] = useState('');
  const [showPasswordNew, setShowPasswordNew] = useState(true);
  const [clearPasswordNew, setClearPasswordNew] = useState(false);
  const [checkPassNew, setCheckPassNew] = useState(false);
  const [checkPassNewSame, setCheckPassNewSame] = useState(false);
  const [checkPassNewLength, setCheckPassNewSameLength] = useState(false);
  const [checkPass, setCheckPass] = useState(false);

  const onClearPassword = () => {
    setPassword('');
    setClearPassword(false);
  };
  const onChangePass = (text) => {
    setClearPassword(true);
    setPassword(text);
    setCheckPass(false);
  };
  const onClearPasswordNew = () => {
    setPasswordNew('');
    setClearPasswordNew(false);
  };
  const onChangePassNew = (text) => {
    setClearPasswordNew(true);
    setPasswordNew(text);
    setCheckPassNew(false);
    setCheckPassNewSame(false);
    setCheckPassNewSameLength(false);
  };
  const onSubmit = () => {
    if (
      password === null ||
      password.trim() === '' ||
      passwordNew === null ||
      passwordNew.trim() === '' ||
      password === passwordNew ||
      password.length < 4 ||
      passwordNew.length < 4
    ) {
      if (password === null || password.trim() === '') {
        setCheckPass(true);
        setPassword('');
      }
      if (passwordNew === null || passwordNew.trim() === '') {
        setCheckPassNew(true);
        setPasswordNew('');
      }
      if (password === passwordNew) {
        setCheckPassNewSame(true);
        setPasswordNew('');
      }
      if (passwordNew.length < 4) {
        setCheckPassNewSameLength(true);
        setPasswordNew('');
      }
    } else {
      props.changePassAction({
        old_password: password,
        new_password: passwordNew,
        user_id: userId,
      });
      console.log('====================================');
      console.log('password', password);
      console.log('passwordNew', passwordNew);
      console.log('====================================');
    }
  };
  useEffect(() => {
    if (props.statusChangePass !== null) {
      console.log('====================================');
      console.log(props.statusChangePass)
      console.log('====================================');
      if (props.statusChangePass === 1) {
        console.log('mk dung');
        Alert.alert(
          t('Thêm Thành Công'),
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
                //  await props.navigation.navigate('ListLanguageContainer');
              },
            },
          ],
          {cancelable: false},
        );
      } else if (props.statusChangePass === 0) {
        console.log('mk sai');
        Alert.alert(t('Thông báo'), props.messageChangePass);
      }
    } else if (props.errorChangePass !== null) {
      Alert.alert(t('Thông báo'), t(props.errorChangePass));
    }
  }, [props.statusUser]);

  return (
    <View>
      {props.loadingChangePass && <LoadingView/>}
      <Header isShowBack onPressBack={() => props.navigation.goBack()} />
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              color: '#2EB553',
            }}>
            Thay đổi mật khẩu
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            {checkPass && (
              <Text style={{color: 'red'}}>
                * Vui lòng nhập mật khẩu hiện tại
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
                source={require('../res/image/img/padlock.png')}
                style={{height: 35, width: 35}}
              />
              <TextInput
                defaultValue={password}
                secureTextEntry={showPassword}
                placeholder={t('Mật khẩu hiện tại')}
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
                      source={require('../res/image/img/eye.png')}
                      style={{height: 20, width: 25, resizeMode: 'contain'}}
                    />
                  ) : (
                    <Image
                      source={require('../res/image/img/invisible.png')}
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
                    source={require('../res/image/img/icon_close.png')}
                    style={{height: 15, width: 15, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            {checkPassNewLength && (
              <Text style={{color: 'red'}}>
                * Vui lòng nhập mật khẩu 4 kí tự trở lên
              </Text>
            )}
            {checkPassNewSame && (
              <Text style={{color: 'red'}}>
                * Vui lòng nhập mật khẩu mới khác hiện tại
              </Text>
            )}
            {checkPassNew && (
              <Text style={{color: 'red'}}>* Vui lòng nhập mật khẩu mới</Text>
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
                source={require('../res/image/img/padlock.png')}
                style={{height: 35, width: 35}}
              />
              <TextInput
                defaultValue={passwordNew}
                secureTextEntry={showPasswordNew}
                placeholder={t('Mật khẩu mới')}
                onChangeText={(text) => {
                  onChangePassNew(text);
                }}
                style={{width: '60%'}}></TextInput>
            </View>

            {clearPasswordNew && (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    setShowPasswordNew(!showPasswordNew);
                  }}
                  style={{
                    height: 30,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {showPasswordNew === true ? (
                    <Image
                      source={require('../res/image/img/eye.png')}
                      style={{height: 20, width: 25, resizeMode: 'contain'}}
                    />
                  ) : (
                    <Image
                      source={require('../res/image/img/invisible.png')}
                      style={{height: 20, width: 25, resizeMode: 'contain'}}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    onClearPasswordNew();
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

export default ChangPassComponent;
