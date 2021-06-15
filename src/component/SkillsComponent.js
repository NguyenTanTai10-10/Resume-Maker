import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Images from '../res/image';
import {screenHeight, screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import BottomSheetCity from './custom/BottomSheetCity';
import BottomSheetTechnique from './custom/BottomSheetTechnique';
import DatetimePicker from './custom/DatetimePicker';
import StatusBarView from './custom/StatusBarView';

const SkillsComponent = (props) => {
  const [data, setData] = useState([]);
  const [dataTechnique, setDataTechnique] = useState([]);
  const [nameTechnique, setNameTechnique] = useState([]);
  const [id_Technique, setId_Technique] = useState([]);
  const [techniqueId, setTechniqueId] = useState([]);
  const [techniqueGet, setTechniqueGet] = useState([]);
  const [totalTech, setTotalTech] = useState([]);
  const [userId, setUserId] = useState('');

  //====================================================
  const [check, setCheck] = useState(false);

  const [checkTech, setCheckTech] = useState(false);
  const [checkTitle, setCheckTitle] = useState(false);

  useEffect(() => {
    getdata();
    props.getTechniqueAction({tag_technique_id: ''});
  }, []);

  const getdata = async () => {
    // props.navigation.addListener('focus', async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      setUserId(jsonValue != null ? JSON.parse(jsonValue) : null);

      await props.infoUserAction({
        user_id: jsonValue != null ? JSON.parse(jsonValue) : null,
        lang_code: '',
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
        if (props.dataUser.techniques.length === 0) {
          console.log('flase1');
        } else if (props.dataUser.techniques.length > 0) {
          // console.log("props.dataUser.location_id",props.dataUser.location_id);

          const arrMin = props.dataUser.techniques.sort(function (a, b) {
            return a.tag_technique_id - b.tag_technique_id;
          });
          // console.log('====================================');
          // console.log("arrMin",arrMin);
          // console.log('====================================');
          setTechniqueGet(arrMin);
          // setCityName_Id(arrMin);
          // dataTechnique(arrMin);
          // const arrMaxc = dataCity.sort(function (a, b) {
          //   return a.city_id - b.city_id;
          // });
          arrdataCity();
        }
      }
    } else if (props.errorUser !== null) {
      Alert.alert('Thông báo', props.errorUser);
    }
  }, [props.statusUser]);

  const arrdataCity = () => {
    const arrMaxc = data.sort(function (a, b) {
      return a.id - b.id;
    });
    // console.log(arrMaxc);

    for (let i = 0; i < techniqueGet.length; i++) {
      const parseInts = parseInt(techniqueGet[i].tag_technique_id);

      arrMaxc.map((item) => {
        // console.log(typeof(parseInts));
        // console.log(typeof(item.id));
        if (parseInts === item.id) {
          const kq = {};
          kq['technique_id'] = item.id;
          id_Technique.push(kq);
          var x = Array.from(new Set(id_Technique.map(JSON.stringify))).map(
            JSON.parse,
          );
          setId_Technique(x);
          setTechniqueId(x);
          totalTech.push(item);
          const xyz = Array.from(new Set(totalTech.map(JSON.stringify))).map(
            JSON.parse,
          );

          setDataTechnique(xyz);
          setNameTechnique(xyz);

          setCheckTitle(true);
        }
      });
    }
  };
  useEffect(() => {
    if (props.statusUpTech !== null) {
      if (props.statusUpTech === 1) {
        Alert.alert(
          ' Thêm Thành Công',
          '',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                setCheck(true);
              },
            },
          ],
          {cancelable: false},
        );
      }
    } else if (props.errorUpTech !== null) {
      Alert.alert(props.errorUpTech);
    }
  }, [props.statusUpTech]);
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
    setCheckTech(false);
    setCheckTitle(true);
    // console.log(item);
    // setCheck(false)
    // setCheckCityError(false);
    // setCheckCity(true);
    nameTechnique.push(item);
    var x = Array.from(new Set(nameTechnique.map(JSON.stringify))).map(
      JSON.parse,
    );
    // console.log(x);
    setDataTechnique(x);
    setNameTechnique(x);
  };
  const onChooseTech_id = (item) => {
    // console.log(item);
    const kq = {};
    kq['technique_id'] = item;
    id_Technique.push(kq);
    var x = Array.from(new Set(id_Technique.map(JSON.stringify))).map(
      JSON.parse,
    );
    setTechniqueId(x);
  };
  const onDeleteTech = (items) => {
    // setCheck(false)
    const new_arr = nameTechnique.filter((item) => item !== items);
    console.log('====================================');
    console.log('arr===', new_arr);
    console.log('====================================');
    setDataTechnique(new_arr);
    setNameTechnique(new_arr);
    // setCity(new_arr);
    if (new_arr.length === 0) {
      setCheckTitle(false);
    }
  };
  const onDeleteTech_Id = (items) => {
    // setCheck(false)
    const new_arr = id_Technique.filter((item) => item.technique_id !== items);
    // // console.log('new_arr', new_arr);
    setTechniqueId(new_arr);
    setId_Technique(new_arr);
  };
  //===========================================
  const onSubmit = () => {
    if (dataTechnique.length === 0) {
      if (dataTechnique.length === 0) {
        setCheckTech(true);
        setCheckTitle(false);
      }
    } else {
      props.updateTechAction({technique_ids: techniqueId, user_id: userId});
      console.log('====================================');
      console.log('123444==', techniqueId);
      console.log('====================================');
    }
  };

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
              onPress={async () => {
                await props.logoutUpdateTechAction();
                await props.navigation.goBack();
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
        {checkTech && (
          <View
            style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red'}}>* Vui lòng chọn kỹ năng</Text>
          </View>
        )}

        <View
          style={{
            marginTop: 10,
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
              width: '90%',
            }}>
            <TouchableOpacity onPress={() => modal.current.open()}>
              <Image
                source={require('../res/image/img/iconskill.png')}
                style={{height: 35, width: 35, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            {checkTitle === false ? (
              <Text style={{color: '#BFBFBF', marginLeft: 15}}>Kỹ năng</Text>
            ) : (
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
                      <Text style={{}}>{item.term}</Text>
                      <TouchableOpacity
                        onPress={async () => {
                          onDeleteTech(item);
                          onDeleteTech_Id(item.id);
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
            )}
          </View>

          <TouchableOpacity onPress={() => modal.current.open()}>
            <Image
              source={require('../res/image/img/down-arrow.png')}
              style={{height: 15, width: 15, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
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
                props.navigation.navigate('HomeContainer');
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
            onPress={async () => { 
              await props.logoutUpdateTechAction();
              await props.navigation.goBack();
             
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
            onPress={() => {
              props.navigation.navigate('HomeContainer');
            }}
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
          OnChooseTech_id={(item) => onChooseTech_id(item)}
          OnChooseTech={(item) => onChooseTech(item)}
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
