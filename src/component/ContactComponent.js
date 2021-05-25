import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Images from '../res/image';
import {screenHeight, screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import BottomSheet from './custom/BottomSheet';
import ButtonChoose from './custom/ButtonChoose';
import DatetimePicker from './custom/DatetimePicker';
import StatusBarView from './custom/StatusBarView';

const ContactComponent = (props) => {
    console.log('peosss===', props.route);
  const [check, setCheck] = useState(false);
  const modal = React.createRef();

  const emailValidation = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
      return true;
    } else {
      return false;
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
              source={require('../res/image/img/ic_facebook.png')}
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
            {/* <Text style={{ color: 'red' }}>
                        * Vui lòng nhập đầy đủ họ và tên của bạn
                </Text> */}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: '#FA8C16',
              borderBottomWidth: 2,
              marginHorizontal: 80,
            }}>
            <Image
              source={require('../res/image/img/iconfullname.png')}
              style={{right: 15, height: 35, width: 35, resizeMode: 'contain'}}
            />
            <TextInput
              placeholder="Họ và tên"
              style={{width: '70%'}}></TextInput>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ButtonChoose />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {/* <Text style={{ color: 'red' }}>
                    * Vui lòng nhập đầy đủ ngày sinh của bạn
                </Text> */}
        </View>

        <DatetimePicker title="Ngày sinh" />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {/* <Text style={{ color: 'red' }}>
                    * Vui lòng nhập Email của bạn
                </Text> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 80,
          }}>
          <Image
            source={require('../res/image/img/iconemail.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
          <TextInput
            placeholder="Email"
            style={{width: '70%', marginLeft: 15}}></TextInput>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {/* <Text style={{ color: 'red' }}>
                    * Vui lòng nhập số điện thoại
                </Text> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 80,
          }}>
          <Image
            source={require('../res/image/img/iconphonenumber.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="Phone"
            style={{width: '70%', marginLeft: 15}}></TextInput>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {/* <Text style={{ color: 'red' }}>
                    * Vui lòng chọn tỉnh thành phố
                </Text> */}
        </View>

        <TouchableOpacity
          onPress={() => modal.current.open()}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 80,
          }}>
          <Image
            source={require('../res/image/img/iconlocation.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
          <Text style={{marginLeft: 15, color: '#BFBFBF'}}>Tỉnh/thành phố</Text>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {/* <Text style={{ color: 'red' }}>
                    * Vui lòng chọn địa chỉ
                </Text> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 80,
          }}>
          <Image
            source={require('../res/image/img/iconformofwork.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
          <TextInput
            placeholder="Địa chỉ"
            style={{width: '70%', marginLeft: 15}}></TextInput>
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            
          }}>
          {check === false ? (
            <TouchableOpacity
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
            marginBottom:20,
            marginTop:10,
          
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
          <Text style={{color:'black'}}>Trở về</Text>
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
          <Text style={{color:'black'}}>Tiếp tục</Text>
          <Image
            source={require('../res/image/img/right-arrow.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
        <BottomSheet
          ref={modal}
          title="Chọn tỉnh thành"
          data={[]}
          modalHeight={screenHeight / 2}
        />
      </ScrollView>
    </View>
  );
};

export default ContactComponent;
