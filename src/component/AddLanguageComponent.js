import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Images from '../res/image';
import {screenHeight, screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import BottomSheetCity from './custom/BottomSheetCity';
import BottomSheetDegree from './custom/BottomSheetDegree';
import BottomSheetLanguage from './custom/BottomSheetLanguage';
import LoadingView from './custom/LoadingView';
import StatusBarView from './custom/StatusBarView';

const AddLanguageComponent = (props) => {
  const [datas, setDatas] = useState([
    {id: 1, degree: 'Sơ cấp'},
    {id: 2, degree: 'Trung cấp'},
    {id: 3, degree: 'Cao cấp'},
  ]);

  const [dataLanguage, setDataLanguage] = useState('');
  const [userId, setUserId] = useState('');
  const [nameLang, setNameLang] = useState('Ngôn ngữ');
  const [id_Lang, setId_Lang] = useState('');
  const [nameDegree, setNameDegree] = useState('Trình độ');
  const [id_Degree, setId_Degree] = useState('');

  //===========================================
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      const kq = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserId(kq);
      props.addLanguageAction({
        user_id: jsonValue != null ? JSON.parse(jsonValue) : null,
      });
    } catch (e) {}
  };

  useEffect(() => {
    if (props.statusAdd !== null) {
      if (props.statusAdd === 1) {
        // console.log(props.dataLAdd);
        setDataLanguage(props.dataLAdd);
      }
    }
  }, [props.statusAdd]);

  useEffect(() => {
    if (props.statusInsert !== null) {
      if (props.statusInsert === 1) {
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
              onPress: async () => {
                await props.logoutInsertLangAction();
                await props.navigation.navigate('ListLanguageContainer');
              },
            },
          ],
          {cancelable: false},
        );
      }
    } else if (props.errorInsert !== null) {
      Alert.alert(props.errorInsert);
    }
  }, [props.statusInsert]);
  //===========================================
  const onChooselang_id = (item) => {
    setId_Lang(item);
    // console.log(item);
  };
  const onChooselang = (item) => {
    setCheckNameLang(false);
    setNameLang(item);
    setClearNameLang(true);
    // console.log(item);
  };
  const onClearlang = (item) => {
    setNameLang('Ngôn ngữ');
    setClearNameLang(false);
    // console.log(item);
  };
  const onClearDegree = (item) => {
    setNameDegree('Trình độ');
    setClearNameDegree(false);
    // console.log(item);
  };
  const onChooseDegree_id = (item) => {
    setId_Degree(item);
    // setId_Lang(item);
  };
  const onChooseDegree = (item) => {
    setNameDegree(item);
    setClearNameDegree(true);
    setCheckNameDegree(false);
    // setCheckNameLang(false);
    // setNameLang(item);
    // setClearNameLang(true);
  };
  //===========================================

  const modal = React.createRef();
  const modal1 = React.createRef();
  const [checkNameLang, setCheckNameLang] = useState(false);
  const [clearNameLang, setClearNameLang] = useState(false);
  const [checkNameDegree, setCheckNameDegree] = useState(false);
  const [clearNameDegree, setClearNameDegree] = useState(false);
  //===========================================
  const onSubmit = () => {
    if (nameLang === 'Ngôn ngữ' || nameDegree === 'Trình độ') {
      if (nameLang === 'Ngôn ngữ') {
        setCheckNameLang(true);
      }
      if (nameDegree === 'Trình độ') {
        setCheckNameDegree(true);
      }
    } else {
      console.log('====================================');
      console.log('nameLangID===', id_Lang);
      console.log('id_Degree===', id_Degree);
      console.log('userId===', userId);
      console.log('====================================');
      props.insertLangAction({
        language_id: id_Lang,
        degree: id_Degree,
        user_id: userId,
      });
    }
  };
  return (
    <View style={{flex: 1}}>
      {props.loadingInsert && <LoadingView />}
      {props.loadingAdd && <LoadingView />}
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
                props.logoutInsertLangAction();
                props.navigation.goBack();
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
              source={require('../res/image/img/iconnumber04.png')}
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
          <Text style={{fontSize: 20, color: '#2EB553'}}>Ngoại ngữ</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkNameLang && (
            <Text style={{color: 'red'}}>* Vui lòng chọn ngôn ngữ</Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => modal.current.open()}
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
            }}>
            <Image
              source={require('../res/image/img/translate(1).png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <Text
              style={{
                marginLeft: 15,
                color: nameLang === 'Ngôn ngữ' ? '#BFBFBF' : 'black',
              }}>
              {nameLang}
            </Text>
          </View>
          {clearNameLang && (
            <TouchableOpacity
              onPress={() => {
                onClearlang();
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
          {checkNameDegree && (
            <Text style={{color: 'red'}}>* Vui lòng chọn trình độ</Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => modal1.current.open()}
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
            }}>
            <Image
              source={require('../res/image/img/iconrank.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <Text
              style={{
                marginLeft: 15,
                color: nameDegree === 'Trình độ' ? '#BFBFBF' : 'black',
              }}>
              {nameDegree}
            </Text>
          </View>

          {clearNameDegree && (
            <TouchableOpacity
              onPress={() => {
                onClearDegree();
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
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 60,
          }}>
          <TouchableOpacity
            onPress={() => {
              onSubmit();
            }}
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
        </View>

        <BottomSheetLanguage
          OnChooselang_id={(item) => onChooselang_id(item)}
          OnChooselang={(item) => onChooselang(item)}
          ref={modal}
          title="Chọn ngôn ngữ"
          data={dataLanguage}
          modalHeight={screenHeight / 2}
        />
        <BottomSheetDegree
          OnChooseDegree_id={(item) => onChooseDegree_id(item)}
          OnChooseDegree={(item) => onChooseDegree(item)}
          ref={modal1}
          title="Chọn trình độ"
          data={datas}
          modalHeight={screenHeight / 2}
        />
      </ScrollView>
    </View>
  );
};

export default AddLanguageComponent;
