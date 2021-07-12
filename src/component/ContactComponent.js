import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {set} from 'react-native-reanimated';
import Images from '../res/image';
import {screenHeight, screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import BottomSheetCity from './custom/BottomSheetCity';
import ButtonChoose from './custom/ButtonChoose';

import DatetimePicker from './custom/DatetimePicker';
import SheetPhoto from './custom/SheetPhoto';

import StatusBarView from './custom/StatusBarView';
import ImagePicker from 'react-native-image-crop-picker';
import React, {useState, useEffect} from 'react';
import LoadingView from './custom/LoadingView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

const ContactComponent = (props) => {
  const {t}= useTranslation()

  useEffect(() => {
    getData();
    props.navigation.addListener('focus', () => {
      props.logoutCheckMailAction();
      props.registerAction();
      props.logoutRegisterlAction();
    });
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('lang')
      if(value !== null) {
        props.getCityAction({city_id: '', country_id: '', language:value!=null ? value: 'vi'});
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
    try {
      const jsonValue = await AsyncStorage.getItem('@title');
      setTitle(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    if (props.statusCity !== null) {
      if (props.statusCity === 1) {
        setDataCity(props.dataCity);
      } 
    }
  }, [props.statusCity]);
  useEffect(() => {
    if (props.statusRegister !== null) {
      if (props.statusRegister === 1) {
        setDataRegister(props.dataRegister);
        setCheck(true);
      } else {
        setTimeout(() => {
          Alert.alert(t('Thông báo'),t(props.messageRegister) );
        }, 10);
      }
    }
  }, [props.statusRegister]);

  useEffect(() => {
    if (props.statusEmail !== null) {
      setEmailExits(t(props.messageEmail));
      setCheckEmaiExit(true);
    } else if (props.errorEmail !== null) {
      Alert.alert(t(props.errorEmail));
    }
  }, [props.statusEmail]);

  const [DataCity, setDataCity] = useState(false);
  const [checkHoTen, setCheckHoTen] = useState(false);
  const [checkBirthDay, setCheckBirthDay] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkEmailHL, setCheckEmailHL] = useState(false);
  const [checkPhone, setCheckPhone] = useState(false);
  const [checkPhoneHL, setCheckPhoneHL] = useState(false);
  const [checkCity, setCheckCity] = useState(false);
  const [checkAdress, setCheckAdress] = useState(false);
  const [checkDate, setCheckDate] = useState(false);
  const [CheckEmaiExit, setCheckEmaiExit] = useState('');
  const [CheckPassword, setCheckPassword] = useState(false);
  const [CheckPasswordHL, setCheckPasswordHL] = useState(false);
  //================================================
  const [check, setCheck] = useState(false);
  const [Password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [birthDay, setBirthDay] = useState(t('Ngày sinh'));
  const [emailKh, setEmailKh] = useState('');
  const [phone, setPhone] = useState('');
  const [City, setCity] = useState(t('Tỉnh/thành phố'));
  const [City_id, setCity_id] = useState();
  const [Adress, setAdress] = useState('');
  const [emailExit, setEmailExits] = useState('');
  const [Gender, setGender] = useState('1');
  const [DataRegister, setDataRegister] = useState('');
  const [id_User, setId_User] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [title, setTitle] = useState('');

  const [Photo, setPhoto] = useState([
    {title: 'Chụp ảnh', value: ''},
    {title: 'Thư viện ảnh', value: ''},
  ]);
  const [PhotoBase64, setPhotoBase64] = useState('');
  const modal = React.createRef();
  const modal1 = React.createRef();
  //================================================

  const [clearHoTen, setClearHoTen] = useState(false);
  const [clearBirthDay, setClearBirthDay] = useState(false);
  const [clearEmail, setClearEmail] = useState(false);
  const [clearPhone, setClearPhone] = useState(false);
  const [clearCity, setClearCity] = useState(false);
  const [clearAdress, setClearAdress] = useState(false);
  const [clearPassword, setClearPassword] = useState(false);

  const emailValidation = (item) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(item)) {
      return true;
    } else {
      return false;
    }
  };
  const phoneValidation = (item) => {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (vnf_regex.test(item)) {
      return true;
    } else {
      return false;
    }
  };
  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      setPhotoBase64(`data:${image.mime};base64,${image.data}`);
      //     // this.bs.current.snapTo(1);
    });
  };
  const libraryPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(async (image) => {
      setPhotoBase64(`data:${image.mime};base64,${image.data}`);
    });
  };

  const onPassword = (text) => {
    setPassword(text);
    setCheckPassword(false);
    setClearPassword(true);
    setCheckPasswordHL(false);
  };
  const onUserName = (text) => {
    setUserName(text);
    setCheckHoTen(false);
    setClearHoTen(true);
  };
  const onGmail = (text) => {
    const kq = text;

    if (emailValidation(kq)) {
      props.checkEmailAction({email: kq});
    }
    setEmailKh(text);
    setCheckEmail(false);
    setCheckEmailHL(false);
    setClearEmail(true);
    setCheckEmaiExit(false);
  };
  const onChooseDate = (item) => {
    setBirthDay(item);
    setCheckBirthDay(false);
    setClearBirthDay(true);
  };
  const onChooseCity = (item) => {
    // console.log(item);
    setCity(item);
    setCheckCity(false);
    setClearCity(true);
  };
  const onChooseCity_id = (item) => {
    setCity_id(item);
  };
  const onPhone = (item) => {
    setPhone(item);
    setCheckPhone(false);
    setCheckPhoneHL(false);
    setClearPhone(true);
  };
  const onAdress = (text) => {
    setAdress(text);
    setCheckAdress(false);
    setClearAdress(true);
  };
  const onGender = (text) => {
    setGender(text);
  };
  //=========================================================
  const onClearHoTen = () => {
    setUserName('');
    setClearHoTen(false);
  };
  const onClearBirthDay = () => {
    setBirthDay('');
    setClearBirthDay(false);
  };
  const onClearEmail = () => {
    setEmailKh('');
    setClearEmail(false);
    setCheckEmaiExit(false);
  };
  const onClearCity = () => {
    setCity(t('Tỉnh/thành phố'));
    setClearCity(false);
  };
  const onClearPhone = () => {
    setPhone('');
    setClearPhone(false);
  };
  const onClearAdress = () => {
    setAdress('');
    setClearAdress(false);
  };
  const onClearPassword = () => {
    setPassword('');
    setClearPassword(false);
    setCheckPasswordHL(false);
  };
  const onSubmit = async () => {
    if (
      userName === null ||
      userName.trim() === '' ||
      birthDay === null ||
      birthDay.trim() === '' ||
      birthDay === t('Ngày sinh') ||
      emailKh === null ||
      emailKh.trim() === '' ||
      !emailValidation(emailKh) ||
      emailExit === 'email đã được đăng ký' ||
      phone === null ||
      phone.trim() === '' ||
      !phoneValidation(phone) ||
      City === null ||
      City.trim() === '' ||
      City === t('Tỉnh/thành phố') ||
      Adress === null ||
      Adress.trim() === '' ||
      Password === null ||
      Password.trim() === '' ||
      Password.length < 4
    ) {
      if (userName === null || userName.trim() === '') {
        setUserName('');
        setCheckHoTen(true);
      }
      if (
        birthDay === null ||
        birthDay.trim() === '' ||
        birthDay === t('Ngày sinh')
      ) {
        setBirthDay(t('Ngày sinh'));
        setCheckBirthDay(true);
      }
      if (Password === null || Password.trim() === '') {
        setPassword('');
        setCheckPassword(true);
      } else if (Password.length < 4) {
        setCheckPasswordHL(true);
      }
      if (emailKh === null || emailKh.trim() === '') {
        setEmailKh('');
        setCheckEmail(true);
      } else if (!emailValidation(emailKh)) {
        setCheckEmailHL(true);
      } else if (emailExit === 'email đã được đăng ký') {
        setCheckEmaiExit(true);
      }

      if (phone === null || phone.trim() === '') {
        setPhone('');

        setCheckPhone(true);
      } else if (!phoneValidation(phone)) {
        setCheckPhoneHL(true);
      }
      if (City === t('Tỉnh/thành phố')) {
        setCheckCity(true);
      } else if (City === null || City.trim() === '') {
        setCity('');

        setCheckCity(true);
      }
      if (Adress === null || Adress.trim() === '') {
        setAdress('');
        setCheckAdress(true);
      }
    } else {
      try {
        const jsonValue = JSON.stringify({
          email: emailKh,
          password: Password,
          name: userName,
          address: Adress,
          city: City,
          id_city: City_id,
          phone: phone,
          birthday: birthDay,
          gender: Gender,
          facebook_id: '',
          google_id: '',
        });
        await AsyncStorage.setItem('@Userinfo', jsonValue);
      } catch (e) {
        // saving error
      }

      console.log('userName', userName);
      console.log('birthDay', birthDay);
      console.log('Password', Password);
      console.log('emailKh', emailKh);
      console.log('phone', phone);
      console.log('City', City);
      console.log('Adress', Adress);
      console.log('Gender', Gender);

      props.registerAction({
        email: emailKh,
        password: Password,
        name: userName,
        address: Adress,
        city: City_id,
        phone: phone,
        birthday: birthDay,
        gender: Gender,
        facebook_id: '',
        google_id: '',
      });
    }
  };
  //=========================================
  const onUpdate = async () => {
    props.logoutRegisterlAction();
    try {
      const jsonValue = JSON.stringify(DataRegister.jobseeker_id);
      await AsyncStorage.setItem('@jobseeker_id', jsonValue);
    } catch (e) {
      // saving error
    }
    if (PhotoBase64 !== '') {
      await props.editAvatarAction({
        user_id: DataRegister !== null ? DataRegister.jobseeker_id : '',
        image: PhotoBase64,
      });
    }

    await props.editCiviAction({
      user_id: DataRegister !== null ? DataRegister.jobseeker_id : '',
      cv_tittle: title,
      industry_id: '',
      functional_role_id: '',
      csalary: '',
      is_hide_current_salary: '',
      esalary: '',
      is_negotiation: '',
      level_group_id: '',
      location_id: [],
    });
    await props.navigation.navigate('Drawers');
  };
  return (
    <View style={{flex: 1}}>
      {props.loadingRegister && <LoadingView />}
      {props.loadingCity && <LoadingView />}
      <StatusBarView />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                left: 0,
                height: Sizes.h95,
                paddingHorizontal: Sizes.h32,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                props.navigation.goBack();
                props.logoutCheckMailAction();
                props.logoutRegisterlAction();
              }}>
              <Image
                source={Images.arrow}
                style={{
                  width: Sizes.s50,
                  height: Sizes.s50,
                }}
              />
            </TouchableOpacity>

            <Image
              source={require('../res/image/img/iconnumber02.png')}
              style={{
                width: Sizes.s140,
                height: Sizes.s140,
                resizeMode: 'contain',
              }}
            />
            <TouchableOpacity
              style={{
                flex: 0.1,
                left: 0,
                height: Sizes.h95,
                paddingHorizontal: Sizes.h32,
                justifyContent: 'center',
                alignItems: 'center',
              }}></TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: '#2EB553'}}>
            {t('Thông tin liên hệ')}
          </Text>
        </View>

        <View
          style={{
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => modal1.current.open()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
            }}>
            {PhotoBase64 === '' ? (
              <Image
                source={require('../res/image/img/avatar.png')}
                style={{
                  height: 70,
                  width: 70,
                  resizeMode: 'cover',
                  borderRadius: 9999,
                }}
              />
            ) : (
              <Image
                source={{uri: PhotoBase64}}
                style={{
                  height: 70,
                  width: 70,
                  resizeMode: 'cover',
                  borderRadius: 9999,
                }}
              />
            )}

            <Image
              source={require('../res/image/img/uploadavatar.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                borderRadius: 100,
                position: 'absolute',
                left: 40,
                top: 50,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            {checkHoTen && (
              <Text style={{color: 'red'}}>
                * {t('Vui lòng nhập đầy đủ họ và tên của bạn')}
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
              marginHorizontal: 80,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                source={require('../res/image/img/iconfullname.png')}
                style={{
                  height: 35,
                  width: 35,
                  resizeMode: 'contain',
                }}
              />
              <TextInput
                defaultValue={userName}
                onChangeText={(text) => onUserName(text)}
                placeholder={t('Họ và tên')}
                style={{width:clearHoTen == true ? '70%':'80%', marginLeft: 15 , }}></TextInput>
            </View>
            {clearHoTen && (
              <TouchableOpacity
                onPress={() => onClearHoTen()}
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
            )}
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ButtonChoose OnGender={(item) => onGender(item)} />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkBirthDay && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng chọn ngày sinh của bạn')}
            </Text>
          )}
        </View>

        <DatetimePicker
          title={birthDay}
          chooseDay={(item) => onChooseDate(item)}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkEmail && (
            <Text style={{color: 'red'}}>* {t('Vui lòng nhập Email của bạn')}</Text>
          )}
          {checkEmailHL && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng nhập Email đúng định dạng')}
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
            marginHorizontal: 80,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={require('../res/image/img/iconemail.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <TextInput
              onBlur={() => {
                setCheckEmaiExit(false);
              }}
              onChangeText={(text) => {
                onGmail(text);
              }}
              defaultValue={emailKh}
              placeholder="Email"
              style={{width:clearEmail == true ? '70%':'80%', marginLeft: 15,}}></TextInput>
          </View>
          {clearEmail && (
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
          )}
        </View>
        {CheckEmaiExit === true ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color:
                  t(props.messageEmail) === t('email đã được đăng ký')
                    ? 'red'
                    : '#2EB553',
              }}>
              {t(props.messageEmail)}
            </Text>
          </View>
        ) : null}

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',

            marginTop: CheckEmaiExit ? null : 20,
          }}>
          {CheckPassword && (
            <Text style={{color: 'red', marginTop: 10}}>
              * {t('Vui lòng nhập mật khẩu của bạn')}
            </Text>
          )}
          {CheckPasswordHL && (
            <Text style={{color: 'red', marginTop: 10}}>
              * {t('Mật khẩu hơn 4 kí tự trở lên')}
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
            marginHorizontal: 80,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={require('../res/image/img/padlock.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <TextInput
              secureTextEntry={showPassword}
              onChangeText={(text) => {
                onPassword(text);
              }}
              defaultValue={Password}
              placeholder={t("Mật khẩu")}
              style={{width:clearPassword == true ? '60%':'80%', marginLeft: 15,}}></TextInput>
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
          {checkPhone && (
            <Text style={{color: 'red'}}>* {t('Vui lòng nhập số điện thoại')}</Text>
          )}
          {checkPhoneHL && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng nhập số điện thoại hợp lệ')}
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
            marginHorizontal: 80,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={require('../res/image/img/iconphonenumber.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <TextInput
              defaultValue={phone}
              onChangeText={(text) => {
                onPhone(text);
              }}
              keyboardType="phone-pad"
              placeholder="Phone"
              style={{width:clearPhone == true ? '70%':'80%', marginLeft: 15,}}></TextInput>
          </View>
          {clearPhone && (
            <TouchableOpacity
              onPress={() => {
                onClearPhone();
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
          )}
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkCity && (
            <Text style={{color: 'red'}}>* {t('Vui lòng chọn tỉnh thành phố')}</Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => modal.current.open()}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 80,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={require('../res/image/img/iconlocation.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <Text
              style={{
                marginLeft: 15,
                width:clearCity == true ? '70%':'80%',
                
                color: City === t('Tỉnh/thành phố') ? '#BFBFBF' : 'black',
              }}>
              {City}
            </Text>
          </View>
          {clearCity && (
            <TouchableOpacity
              onPress={() => {
                onClearCity();
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
          )}
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkAdress && (
            <Text style={{color: 'red'}}>* {t('Vui lòng chọn địa chỉ')}</Text>
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 80,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={require('../res/image/img/iconformofwork.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <TextInput
              defaultValue={Adress}
              onChangeText={(text) => {
                onAdress(text);
              }}
              placeholder={t("Địa chỉ")}
              style={{width:clearAdress == true ? '70%':'80%', marginLeft: 15}}></TextInput>
          </View>
          {clearAdress && (
            <TouchableOpacity
              onPress={() => {
                onClearAdress();
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
          )}
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          {check === false ? (
            <TouchableOpacity
              onPress={() => onSubmit()}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: (screenWidth * 0.8) / 2,
                backgroundColor: '#FA8C16',
                borderRadius: 13,
              }}>
              <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
              {t('Cập nhập')}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              // onPress={() => {

              //   // props.navigation.navigate('');
              // }}
              onPress={() => onUpdate()}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: (screenWidth * 0.8) / 2,
                backgroundColor: '#2EB553',
                borderRadius: 13,
              }}>
              <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
                {t('Tiếp tục')}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <BottomSheetCity
          chooseCity={(item) => onChooseCity(item)}
          ChooseCity_id={(id) => onChooseCity_id(id)}
          type="getCity"
          ref={modal}
          title={t('"Chọn tỉnh thành"')}
          data={DataCity}
          modalHeight={screenHeight / 2}
        />
        <SheetPhoto
          ref={modal1}
          title={t('Thêm ảnh')} 
          data={Photo}
          modalHeight={200}
          onPressTakePhoto={() => takePhoto()}
          onPressLibraryPhoto={() => libraryPhoto()}
        />
      </ScrollView>
    </View>
  );
};

export default ContactComponent;
