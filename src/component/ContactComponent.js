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
import BottomSheet from './custom/BottomSheet';
import ButtonChoose from './custom/ButtonChoose';

import DatetimePicker from './custom/DatetimePicker';
import SheetPhoto from './custom/SheetPhoto';

import StatusBarView from './custom/StatusBarView';
import ImagePicker from 'react-native-image-crop-picker';
import React, {useState, useEffect} from 'react';
import LoadingView from './custom/LoadingView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContactComponent = (props) => {
  useEffect(() => {
    props.getCityAction({city_id: '', country_id: ''});

  }, []);
  useEffect(() => {
    
    getData()
  
    props.navigation.addListener('focus', () => {
      props.logoutCheckMailAction();
      props.registerAction();
      props.logoutRegisterlAction();
    });
  }, []);

  useEffect(() => {
    if (props.statusCity !== null) {
      if (props.statusCity === 1) {
        setDataCity(props.dataCity);
      } else {
        setTimeout(() => {
          Alert.alert('Thông báo', props.messageCity);
        }, 10);
      }
    }
  }, [props.statusCity]);
  useEffect(() => {
    if (props.statusRegister !== null) {
      if (props.statusRegister === 1) {
        setDataRegister(props.dataRegister);
        setCheck(true);

        Alert.alert('Thông báo', props.messageRegister);
      } else {
        setTimeout(() => {
          Alert.alert('Thông báo', props.messageRegister);
        }, 10);
      }
    } 
    

  }, [props.statusRegister]);

  useEffect(() => {
    if (props.statusEmail !== null) {
      setEmailExits(props.messageEmail);
      setCheckEmaiExit(true);
    } else if (props.errorEmail !== null) {
      Alert.alert(props.errorEmail);
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
  const [birthDay, setBirthDay] = useState('');
  const [emailKh, setEmailKh] = useState('');
  const [phone, setPhone] = useState('');
  const [City, setCity] = useState('Tỉnh/thành phố');
  const [City_id, setCity_id] = useState();
  const [Adress, setAdress] = useState('');
  const [emailExit, setEmailExits] = useState('');
  const [Gender, setGender] = useState('1');
  const [DataRegister, setDataRegister] = useState('');
  const [id_User, setId_User] = useState('');
  const [showPassword, setShowPassword] = useState(true);

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
      console.log(image);
      //     // this.bs.current.snapTo(1);
    });
  };
  const libraryPhoto =  () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(async(image) => {
      const Image64 = `data:${image.mime};base64,${image.data}`;
      try {
        await AsyncStorage.setItem('@Images64', Image64)
      } catch (e) {
        // saving error
      }
      // console.log(`data:${image.mime};base64,${image.data}`);
      
      
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
    ;
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
    setCity('Tỉnh/thành phố');
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
  //==============================================================
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@Userinfo')

      if (jsonValue != null) {
            var data = JSON.parse(jsonValue);
            
            setAdress(data.address)
            setBirthDay(data.birthday)
            setCity(data.city)
            setEmailKh(data.email)
            setGender(data.gender)
            setUserName(data.name)
            setPassword(data.password)
            setPhone(data.phone)
            setCity_id(data.id_city)
         }
    } catch(e) {
      // error reading value
    }
    try {
      const value = await AsyncStorage.getItem('@Images64')
      if(value !== null) {
        setPhotoBase64(value)
      }
    } catch(e) {
      // error reading value
    }
  }


  //==============================================================
  const onSubmit = async () => {
    if (
      userName === null ||
      userName.trim() === '' ||
      birthDay === null ||
      birthDay.trim() === '' ||
      
      emailKh === null ||
      emailKh.trim() === '' ||
      !emailValidation(emailKh) ||
      emailExit === 'email đã được đăng ký' ||
      phone === null ||
      phone.trim() === '' ||
      !phoneValidation(phone) ||
      City === null ||
      City.trim() === '' ||
      City === 'Tỉnh/thành phố' ||
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
      if (birthDay === null || birthDay.trim() === '') {
        setBirthDay('');
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
      if (City === 'Tỉnh/thành phố') {
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
          id_city:City_id,
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
    console.log(DataRegister.jobseeker_id);
    await props.editAvatarAction({user_id:DataRegister!== null ?DataRegister.jobseeker_id:'' ,image:PhotoBase64})
    await props.navigation.navigate('')


    // console.log(DataRegister.jobseeker_id);
    // console.log(PhotoBase64);
  };
  return (
    <View style={{flex: 1}}>
      {props.loadingRegister && <LoadingView />}
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
            <Text style={{paddingHorizontal: Sizes.h32}}>{}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: '#2EB553'}}>
            Thông tin liên hệ
          </Text>
        </View>
        <View style={{marginTop: 35}}>
          <TouchableOpacity
            onPress={() => modal1.current.open()}
            style={{justifyContent: 'center', alignItems: 'center'}}>
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
                right: 160,
                top: 45,
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            {checkHoTen && (
              <Text style={{color: 'red'}}>
                * Vui lòng nhập đầy đủ họ và tên của bạn
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
                placeholder="Họ và tên"
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
              * Vui lòng chọn ngày sinh của bạn
            </Text>
          )}
        </View>

        <DatetimePicker
          chooseDay={(item) => onChooseDate(item)}
          
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkEmail && (
            <Text style={{color: 'red'}}>* Vui lòng nhập Email của bạn</Text>
          )}
          {checkEmailHL && (
            <Text style={{color: 'red'}}>
              * Vui lòng nhập Email đúng định dạng
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
                  props.messageEmail === 'email đã được đăng ký'
                    ? 'red'
                    : '#2EB553',
              }}>
              {props.messageEmail}
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
              * Vui lòng nhập mật khẩu của bạn
            </Text>
          )}
          {CheckPasswordHL && (
            <Text style={{color: 'red', marginTop: 10}}>
              * Mật khẩu hơn 4 kí tự trở lên
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
              source={require('../res/image/img/padlock1.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <TextInput
            secureTextEntry={showPassword}
              onChangeText={(text) => {
                onPassword(text);
              }}
              defaultValue={Password}
              placeholder="Mật khẩu"
              style={{width: '60%', marginLeft: 15}}></TextInput>
          </View>
          {clearPassword && (
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity
              onPress={() => { setShowPassword(!showPassword)
                
              }}
              style={{
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {showPassword === true?<Image
                source={require('../res/image/img/eye.png')}
                style={{height: 20, width: 25, resizeMode: 'contain'}}
              />:<Image
              source={require('../res/image/img/invisible.png')}
              style={{height: 20, width: 25, resizeMode: 'contain'}}
            />}

              
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
            <Text style={{color: 'red'}}>* Vui lòng nhập số điện thoại</Text>
          )}
          {checkPhoneHL && (
            <Text style={{color: 'red'}}>
              * Vui lòng nhập số điện thoại hợp lệ{' '}
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
            <Text style={{color: 'red'}}>* Vui lòng chọn tỉnh thành phố</Text>
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
                color: City === 'Tỉnh/thành phố' ? '#BFBFBF' : 'black',
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
            <Text style={{color: 'red'}}>* Vui lòng chọn địa chỉ</Text>
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
              placeholder="Địa chỉ"
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
                Cập nhập
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
                Tiếp tục
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
              props.navigation.goBack();
              props.logoutCheckMailAction();
              props.logoutRegisterlAction();
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
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <Text style={{color: 'black'}}>Trở về</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',

              height: 50,
              width: (screenWidth * 0.7) / 2,

              borderRadius: 13,
            }}>
            <Text style={{color: 'black'}}>Tiếp tục</Text>
            <Image
              source={require('../res/image/img/right-arrow.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <BottomSheet
          chooseCity={(item) => onChooseCity(item)}
          ChooseCity_id={(id) => onChooseCity_id(id)}
          type="getCity"
          ref={modal}
          title="Chọn tỉnh thành"
          data={DataCity}
          modalHeight={screenHeight / 2}
        />
        <SheetPhoto
          ref={modal1}
          title="Thêm ảnh"
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
