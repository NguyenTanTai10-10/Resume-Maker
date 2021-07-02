import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

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

const ContactHomeComponent = (props) => {
  const {t} = useTranslation();
  const [data, setData] = useState('');
  const [ImagesAVT, setImagesAVT] = useState(false);

  useEffect(() => {
    props.navigation.addListener('focus', async () => {
      props.logoutCheckMailAction('');

      // props.getCityAction({city_id: '', country_id: ''});
      try {
        const values = await AsyncStorage.getItem('lang');

        props.getCityAction({
          city_id: '',
          country_id: '',
          language: values != null ? values : 'vi',
        });
        const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
        setUserID(jsonValue != null ? JSON.parse(jsonValue) : null);
        props.infoUserAction({
          user_id: jsonValue != null ? JSON.parse(jsonValue) : null,
          lang_code: '',
          emp_id: '',
          is_app_cv: 1,
        });
        const value = await AsyncStorage.getItem('@Images64');
        if (value !== null) {
          setPhotoBase64(value);
        }
        // console.log(jsonValue != null ? JSON.parse(jsonValue) : null);
      } catch (e) {
        // error reading value
      }
    });
  }, []);

  useEffect(() => {
    if (props.statusUser !== null) {
      if (props.statusUser === 1) {
        setImagesAVT(true);
        setData(props.dataUser);
        setUserName(props.dataUser.name);
        setBirthDay(props.dataUser.dob);
        setEmailKh(props.dataUser.email);
        setPhone(props.dataUser.phone);
        setAdress(props.dataUser.address);
        setCity_id(props.dataUser.city_id);
        setPhotoBase64(props.dataUser.profile_image);

        DataCity.map((item) => {
          if (item.id === props.dataUser.city_id) {
            setCity(item.city);
          }
        });
      }
    } else if (props.errorUser !== null) {
      Alert.alert(t('Thông báo'), t(props.errorUser));
    }
  }, [props.statusUser]);

  useEffect(() => {
    if (props.statusCity !== null) {
      if (props.statusCity === 1) {
        setDataCity(props.dataCity);
      }
    }
  }, [props.statusCity]);
  useEffect(() => {
    if (props.statusEditInfo !== null) {
      if (props.statusEditInfo === 1) {
        setDataRegister(props.dataEditInfo);
        setCheck(true);

        Alert.alert(t('Thông báo'), t(props.messageEditInfo));
      }
    } else if (props.errorEditInfo !== null) {
      setTimeout(() => {
        Alert.alert(t('Thông báo'), t(props.errorEditInfo));
      }, 10);
    }
  }, [props.statusEditInfo]);

  useEffect(() => {
    if (props.statusEmail !== null) {
      setEmailExits(props.messageEmail);
      setCheckEmaiExit(true);
    } else if (props.errorEmail !== null) {
      Alert.alert(t(props.errorEmail));
    }
  }, [props.statusEmail]);

  const [DataCity, setDataCity] = useState([]);
  const [checkHoTen, setCheckHoTen] = useState(false);
  const [checkBirthDay, setCheckBirthDay] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkEmailHL, setCheckEmailHL] = useState(false);
  const [checkPhone, setCheckPhone] = useState(false);
  const [checkPhoneHL, setCheckPhoneHL] = useState(false);
  const [checkCity, setCheckCity] = useState(false);
  const [checkAdress, setCheckAdress] = useState(false);

  const [CheckEmaiExit, setCheckEmaiExit] = useState('');

  //================================================
  const [check, setCheck] = useState(false);
  const [PasswordNow, setPasswordNow] = useState('');
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [emailKh, setEmailKh] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [City, setCity] = useState(t('Tỉnh/thành phố'));
  const [City_id, setCity_id] = useState();
  const [Adress, setAdress] = useState('');
  const [emailExit, setEmailExits] = useState('');
  const [Gender, setGender] = useState('1');
  const [DataRegister, setDataRegister] = useState('');
  const [dataPhoto, setDataPhoto] = useState('');

  const [Photo, setPhoto] = useState([
    {title: t('Chụp ảnh'), value: ''},
    {title: t('Thư viện ảnh'), value: ''},
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
      console.log(image);
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
      setCheck(false);
      const Image64 = `data:${image.mime};base64,${image.data}`;
      try {
        await AsyncStorage.setItem('@Images64', Image64);
      } catch (e) {
        // saving error
      }
      // console.log(`data:${image.mime};base64,${image.data}`);

      setPhotoBase64(`data:${image.mime};base64,${image.data}`);
      setDataPhoto(image.data);
    });
  };

  const onUserName = (text) => {
    setCheck(false);
    setUserName(text);
    setCheckHoTen(false);
    setClearHoTen(true);
  };
  const onGmail = (text) => {
    setCheck(false);
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
    setCheck(false);
    setBirthDay(item);
    setCheckBirthDay(false);
    setClearBirthDay(true);
  };
  const onChooseCity = (item) => {
    setCheck(false);
    // console.log(item);
    setCity(item);
    setCheckCity(false);
    setClearCity(true);
  };
  const onChooseCity_id = (item) => {
    setCheck(false);
    setCity_id(item);
  };
  const onPhone = (item) => {
    setCheck(false);
    setPhone(item);
    setCheckPhone(false);
    setCheckPhoneHL(false);
    setClearPhone(true);
  };
  const onAdress = (text) => {
    setCheck(false);
    setAdress(text);
    setCheckAdress(false);
    setClearAdress(true);
  };
  const onGender = (text) => {
    setCheck(false);
    setGender(text);
  };
  //=========================================================
  const onClearHoTen = () => {
    setCheck(false);
    setUserName('');
    setClearHoTen(false);
  };

  const onClearEmail = () => {
    setCheck(false);
    setEmailKh('');
    setClearEmail(false);
    setCheckEmaiExit(false);
  };
  const onClearCity = () => {
    setCheck(false);
    setCity(t('Tỉnh/thành phố'));
    setClearCity(false);
  };
  const onClearPhone = () => {
    setCheck(false);
    setPhone('');
    setClearPhone(false);
  };
  const onClearAdress = () => {
    setCheck(false);
    setAdress('');
    setClearAdress(false);
  };

  //==============================================================

  //==============================================================
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
      (emailExit === t('email đã được đăng ký') && PasswordNow !== emailKh) ||
      phoneNumber === null ||
      phoneNumber.trim() === '' ||
      !phoneValidation(phoneNumber) ||
      City === null ||
      City.trim() === '' ||
      City === t('Tỉnh/thành phố') ||
      Adress === null ||
      Adress.trim() === ''
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

      if (emailKh === null || emailKh.trim() === '') {
        setEmailKh('');
        setCheckEmail(true);
      } else if (!emailValidation(emailKh)) {
        setCheckEmailHL(true);
      } else if (
        emailExit === t('email đã được đăng ký') &&
        PasswordNow !== emailKh
      ) {
        setCheckEmaiExit(true);
      }

      if (phoneNumber === null || phoneNumber.trim() === '') {
        setPhone('');

        setCheckPhone(true);
      } else if (!phoneValidation(phoneNumber)) {
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
      console.log('userName', userName);
      console.log('birthDay', birthDay);
      console.log('emailKh', emailKh);
      console.log('phone', phoneNumber);
      console.log('City', City);
      console.log('Adress', Adress);
      console.log('Gender', Gender);

      props.editInfoUserAction({
        user_id: userID,
        email: emailKh,
        name: userName,
        address: Adress,
        city: City_id,
        phone: phoneNumber,
        birthday: birthDay,
        gender: Gender,
        skype: '',
      });
      if (dataPhoto !== '') {
        await props.editAvatarAction({user_id: userID, image: dataPhoto});
      }
      // props.editAvatarAction({user_id: userID, image: dataPhoto});
    }
  };
  //=========================================
  const onUpdate = async () => {
    // console.log(DataRegister.jobseeker_id);
    // await props.editAvatarAction({
    //   user_id: DataRegister !== null ? DataRegister.jobseeker_id : '',
    //   image: PhotoBase64,
    // });
    await props.navigation.navigate('BasicsInfoContainer');

    // console.log(DataRegister.jobseeker_id);
    // console.log(PhotoBase64);
  };
  return (
    <View style={{flex: 1}}>
      {props.loadingUser && <LoadingView />}
      {props.loadingEditInfo && <LoadingView />}
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
                props.logoutEditInfoUserAction();
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
            {ImagesAVT === false ? (
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
                  borderWidth: 1,
                  borderColor: '#FA8C16',
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
                style={{width: '70%', marginLeft: 15}}></TextInput>
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
          chooseDay={(item) => onChooseDate(item)}
          title={birthDay}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkEmail && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng nhập Email của bạn')}
            </Text>
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
              style={{width: '70%', marginLeft: 15}}></TextInput>
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
          {checkPhone && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng nhập số điện thoại')}
            </Text>
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
              defaultValue={phoneNumber}
              onChangeText={(text) => {
                onPhone(text);
              }}
              keyboardType="phone-pad"
              placeholder="Phone"
              style={{width: '70%', marginLeft: 15}}></TextInput>
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
            <Text style={{color: 'red'}}>
              * {t('Vui lòng chọn tỉnh thành phố')}
            </Text>
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
                width: '70%',
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
              placeholder={t('Địa chỉ')}
              style={{width: '70%', marginLeft: 15}}></TextInput>
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
        <View
          style={{
            marginBottom: 20,
            marginTop: 10,

            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('HomeContainer');
              props.logoutCheckMailAction();
              props.logoutEditInfoUserAction();
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: (screenWidth * 0.7) / 2,
              flexDirection: 'row',

              borderRadius: 13,
            }}>
            <Image
              source={require('../res/image/img/left-arrow.png')}
              style={{height: 30, width: 30, resizeMode: 'contain'}}
            />
            <Text style={{color: 'black'}}>{t('Trang chủ')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('BasicsInfoContainer');
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',

              height: 50,
              width: (screenWidth * 0.7) / 2,

              borderRadius: 13,
            }}>
            <Text style={{color: 'black'}}>{t('Tiếp tục')}</Text>
            <Image
              source={require('../res/image/img/right-arrow.png')}
              style={{height: 30, width: 30, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <BottomSheetCity
          chooseCity={(item) => onChooseCity(item)}
          ChooseCity_id={(id) => onChooseCity_id(id)}
          type="getCity"
          ref={modal}
          title={t('Chọn tỉnh thành')}
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

export default ContactHomeComponent;
