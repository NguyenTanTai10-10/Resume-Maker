import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Images from '../res/image';
import Sizes from '../utils/Sizes';
import StatusBarView from './custom/StatusBarView';
import BottomSheetCity from './custom/BottomSheetCity';
import {screenHeight, screenWidth} from '../res/style/theme';
import Button from './custom/Button';
import BottomSheetIndustry from './custom/BottomSheetIndustry';
import BottomSheetLever from './custom/BottomSheetLever';

const BasicInfoComponent = (props) => {
  const [dataIndustry, setDataIndustry] = useState('');
  const [dataLever, setDataLever] = useState('');
  useEffect(() => {
    props.getIndustryAction({industry_id: ''});
    props.getLeverAction({level_group_id: ''});
  }, []);

  useEffect(() => {
    if (props.statusIndustry !== null) {
      if (props.statusIndustry === 1) {
        // console.log(props.dataIndustry);
        setDataIndustry(props.dataIndustry);
      } else {
        setTimeout(() => {
          Alert.alert('Thông báo', props.messageIndustry);
        }, 10);
      }
    }
  }, [props.statusIndustry]);
  useEffect(() => {
    if (props.statusLever !== null) {
      if (props.statusLever === 1) {
        
        setDataLever(props.dataLever);
      } else {
        setTimeout(() => {
          Alert.alert('Thông báo', props.messageLever);
        }, 10);
      }
    }
  }, [props.statusLever]);

  const [money, setMoney] = useState('');
  const [industry, setIndustry] = useState('Lĩnh vực');
  const [leverGroup, setLeverGroup] = useState('Vị trí');
  const [check, setCheck] = useState(false);
  const [checkShow, setCheckShow] = useState(false);
  const [checkShow1, setCheckShow1] = useState(false);
  const onChangeText = (text) => {
    // const kqc = formatMoney(text)
    // console.log("===",kqc);
    setMoney(text);
  };
  const formatMoney = (x) => {
    const kq = x.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
    return kq;
  };
  const modal = React.createRef();
  const modal1 = React.createRef();
  const modal2 = React.createRef();

  const onChooseIndustry = (item) => {
    setIndustry(item);
    // console.log(item);
  };
  const onChooseIndustry_id = (item) => {
    // console.log(item);
  };
  const onChooseLever = (item) => {
    setLeverGroup(item);
    console.log(item);
  };
  const onChooseLever_id = (item) => {
    // console.log(item);
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
              source={require('../res/image/img/iconnumber03.png')}
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
            Thông tin xin việc
          </Text>
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
            marginTop: 30,
          }}>
          <Image
            source={require('../res/image/img/iconskill.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />

          <Text
            style={{
              marginLeft: 15,
              color: industry === 'Lĩnh vực' ? '#BFBFBF' : 'black',
            }}>
            {industry}
          </Text>
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
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 80,
          }}>
          <Image
            source={require('../res/image/img/iconsalary.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
          <TextInput
            placeholder="Lương hiện tại"
            style={{width: '70%', marginLeft: 15}}></TextInput>
          <Text style={{}}>VND</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setCheckShow(!checkShow);
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginHorizontal: 80,
            marginTop: 10,
          }}>
          {checkShow === false ? (
            <Image
              source={require('../res/image/img/stop.png')}
              style={{height: 17, width: 17, resizeMode: 'contain'}}
            />
          ) : (
            <Image
              source={require('../res/image/img/check.png')}
              style={{height: 17, width: 17, resizeMode: 'contain'}}
            />
          )}

          <Text style={{alignSelf: 'center', marginLeft: 15}}>
            Không hiển thị
          </Text>
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
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 80,
          }}>
          <Image
            source={require('../res/image/img/iconsalary.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
          <TextInput
            keyboardType="numbers-and-punctuation"
            onChange={(text) => onChangeText(text)}
            placeholder="Lương mong muốn"
            style={{width: '70%', marginLeft: 15}}></TextInput>
          <Text style={{}}>VND</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setCheckShow1(!checkShow1);
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginHorizontal: 80,
            marginTop: 10,
          }}>
          {checkShow1 === false ? (
            <Image
              source={require('../res/image/img/stop.png')}
              style={{height: 17, width: 17, resizeMode: 'contain'}}
            />
          ) : (
            <Image
              source={require('../res/image/img/check.png')}
              style={{height: 17, width: 17, resizeMode: 'contain'}}
            />
          )}

          <Text style={{alignSelf: 'center', marginLeft: 15}}>
            Không hiển thị
          </Text>
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
        <TouchableOpacity
          onPress={() => modal1.current.open()}
          style={{
            marginTop: 10,
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
          <Text
            style={{
              marginLeft: 15,
              color: leverGroup === 'Vị trí' ? '#BFBFBF' : 'black',
            }}>
            {leverGroup}
          </Text>
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
        <TouchableOpacity
          onPress={() => modal2.current.open()}
          style={{
            marginTop: 10,
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
          <Text style={{marginLeft: 15, color: '#BFBFBF'}}>
            Khu vực bạn muốn làm việc
          </Text>
        </TouchableOpacity>

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
            marginBottom: 20,
            marginTop: 10,

            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
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
        <BottomSheetIndustry
          OnChooseIndustry={(item) => {
            onChooseIndustry(item);
          }}
          OnChooseIndustry_id={(item) => {
            onChooseIndustry_id(item);
          }}
          ref={modal}
          title="Chọn lĩnh vực"
          data={dataIndustry}
          modalHeight={screenHeight / 2}
        />
        <BottomSheetLever
          OnChooseLever={(item) => {
            onChooseLever(item);
          }}
          OnChooseLever_id={(item) => {
            onChooseLever_id(item);
          }}
          ref={modal1}
          title="Chọn vị trí"
          data={dataLever}
          modalHeight={screenHeight / 2}
        />
        <BottomSheetIndustry
          ref={modal2}
          title="Chọn khu vực"
          data={[]}
          modalHeight={screenHeight / 2}
        />
      </ScrollView>
    </View>
  );
};

export default BasicInfoComponent;
