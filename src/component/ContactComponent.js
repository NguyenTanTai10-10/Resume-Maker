import React, {useState, useEffect} from 'react';
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
import StatusBarView from './custom/StatusBarView';

const ContactComponent = (props) => {
  useEffect(() => {
    props.getCityAction({city_id: '', country_id: ''});
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

  //================================================
  const [check, setCheck] = useState(false);
  const [userName, setUserName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [EmailKH, setEmailKH] = useState('');
  const [phone, setPhone] = useState('');
  const [City, setCity] = useState('Tỉnh/thành phố');
  const [Adress, setAdress] = useState('');
  const [Gender, setGender] = useState('1');
  const modal = React.createRef();
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

  const onUserName = (text) => {
    setUserName(text);
    setCheckHoTen(false);
    setClearHoTen(true);
  };
  const onGmail = (text) => {
    setEmailKH(text);
    setCheckEmail(false);
    setCheckEmailHL(false);
    setClearEmail(true);
  };
  const onChooseDate = (item) => {
    console.log(item);
    setBirthDay(item);
    setCheckBirthDay(false);
    setClearBirthDay(true);
  };
  const onChooseCity = (item) => {
    setCity(item);
    setCheckCity(false);
    setClearCity(true);
  };
  const onPhone = (item) => {
    setPhone(item);
    setCheckPhone(false);
    setClearPhone(true);
  };
  const onAdress = (text) => {
    setAdress(text);
    setCheckAdress(false);
    setClearAdress(true);
  };
  const onGender = (text) => {
    console.log(text);
    setGender(text);
    ;
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
    setEmailKH('');
    setClearEmail(false);
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
  //==============================================================
  const onSubmit = () => {
    if (
      userName === null ||
      userName.trim() === '' ||
      birthDay === null ||
      birthDay.trim() === '' ||
      EmailKH === null ||
      EmailKH.trim() === '' ||
      !emailValidation(EmailKH) ||
      phone === null ||
      phone.trim() === '' ||
      !phoneValidation(phone) ||
      City === null ||
      City.trim() === '' ||
      City === 'Tỉnh/thành phố' ||
      Adress === null ||
      Adress.trim() === ''
    ) {
      if (userName === null || userName.trim() === '') {
        setUserName('');
        setCheckHoTen(true);
      }
      if (birthDay === null || birthDay.trim() === '') {
        setBirthDay('');
        setCheckBirthDay(true);
      }
      if (EmailKH === null || EmailKH.trim() === '') {
        setEmailKH('');
        setCheckEmail(true);
      } else if (!emailValidation(EmailKH)) {
        setCheckEmailHL(true);
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
      console.log('bnanan');
    }
  };
  return (
    <View style={{flex: 1}}>
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
              onPress={() => props.navigation.goBack()}>
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
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../res/image/img/avatar.png')}
              style={{
                height: 60,
                width: 60,
                resizeMode: 'contain',
                borderRadius: 100,
              }}
            />
            <Image
              source={require('../res/image/img/uploadavatar.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                borderRadius: 100,
                position: 'absolute',
                right: 170,
                top: 40,
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
                  right: 15,
                  height: 35,
                  width: 35,
                  resizeMode: 'contain',
                }}
              />
              <TextInput
                defaultValue={userName}
                onChangeText={(text) => onUserName(text)}
                placeholder="Họ và tên"
                style={{width: '70%'}}></TextInput>
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
          <ButtonChoose 
         OnGender= {(item)=>onGender(item)}

          />
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
          title={'Ngày sinh'}
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
              onChangeText={(text) => {
                onGmail(text);
              }}
              defaultValue={EmailKH}
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
                color: City === 'Tỉnh/thành phố' ? '#BFBFBF' : 'black',
              }}>
              {City}
            </Text>
          </View>
          {clearCity && (
            <TouchableOpacity
            onPress={()=>{onClearCity()}}
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
          {clearAdress &&   <TouchableOpacity
          onPress={()=>{onClearAdress()}}
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
          </TouchableOpacity>}

        
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
              onPress={() => {
                props.navigation.navigate('');
              }}
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
          chooseCity_id={(item) => onChooseCity(item)}
          type="getCity"
          ref={modal}
          title="Chọn tỉnh thành"
          data={DataCity}
          modalHeight={screenHeight / 2}
        />
      </ScrollView>
    </View>
  );
};

export default ContactComponent;
