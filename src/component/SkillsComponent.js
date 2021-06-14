import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Images from '../res/image';
import {screenHeight, screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import BottomSheetCity from './custom/BottomSheetCity';
import BottomSheetTechnique from './custom/BottomSheetTechnique';
import DatetimePicker from './custom/DatetimePicker';
import StatusBarView from './custom/StatusBarView';

const SkillsComponent = (props) => {
  const [data, setData] = useState('');
  const [dataTechnique, setDataTechnique] = useState([]);
  const [nameTechnique, setNameTechnique] = useState([]);

  useEffect(() => {
    props.getTechniqueAction({tag_technique_id: ''});
  }, []);

  useEffect(() => {
    if (props.statusTech !== null) {
      if (props.statusTech === 1) {
        // console.log(props.dataLever);
        setData(props.dataTech);
      }
    }
  }, [props.statusTech]);
  //===================================================
  const onChooseTech = async (item) => {
    console.log(item);
    // setCheck(false)
    // setCheckCityError(false);
    // setCheckCity(true);
    nameTechnique.push(item);
    var x = Array.from(new Set(nameTechnique.map(JSON.stringify))).map(JSON.parse);
    setDataTechnique(x);
  };
  const onChooseTech_id = (item) => {
    console.log(item);
    // setCheck(false)
    // console.log(item);
    // const kq = {};
    // kq['city_id'] = item;
    // city_Id.push(kq);
    // var x = Array.from(new Set(city_Id.map(JSON.stringify))).map(JSON.parse);
    // setCityName_Id(x);
  };
  const onDeleteTech = (items) => {
    // setCheck(false)
    const new_arr = dataTechnique.filter((item) => item !== items);
    setDataTechnique(new_arr);
    // setCity(new_arr);
    // if (new_arr.length === 0) {
    //   setCheckCity(false);
    // }
  };
  const onDeleteTech_Id = (items) => {
    // setCheck(false)
    // const new_arr = cityName_Id.filter(
    //   (item) => item.city_id !== items.toLocaleString(),
    // );
    // // console.log('new_arr', new_arr);
    // setCityName_Id(new_arr);
    // setCity_Id(new_arr);
  };


  const [check, setCheck] = useState(false);
  const modal = React.createRef();

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
              source={require('../res/image/img/iconnumber06.png')}
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
              }}
              onPress={() => {
                console.log('lamgido');
              }}>
              <Text>{}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: '#2EB553'}}>Kỹ năng</Text>
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
            <TouchableOpacity onPress={() => modal.current.open()}>
               <Image
            source={require('../res/image/img/iconskill.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
            </TouchableOpacity>
         
           <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{}}>
                {dataTechnique.map((item, index) => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#E6E7E9',
                        marginLeft: 10,
                      }}>
                      <Text>{item.term}</Text>
                      <TouchableOpacity
                        onPress={async () => {
                          onDeleteTech(item);
                          // onDeleteCity_Id(item.id);
                        }}>
                        <Image
                          source={require('../res/image/img/icon_close.png')}
                          style={{
                            height: 15,
                            width: 15,
                            resizeMode: 'contain',
                            marginHorizontal: 6,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 60,
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
            <Text style={{color: 'black'}}>Hoàn thành</Text>
            <Image
              source={require('../res/image/img/right-arrow.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <BottomSheetTechnique
        OnChooseTech_id={(item)=>onChooseTech_id(item)}
        OnChooseTech={(item)=>onChooseTech(item)}
          ref={modal}
          title="Chọn kỹ năng"
          data={data}
          modalHeight={screenHeight / 2}
        />
      </ScrollView>
    </View>
  );
};

export default SkillsComponent;
