import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { set } from 'react-native-reanimated';
import Images from '../res/image';
import {screenHeight, screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import BottomSheetCity from './custom/BottomSheetCity';
import BottomSheetDegree from './custom/BottomSheetDegree';
import BottomSheetLanguage from './custom/BottomSheetLanguage';
import LoadingView from './custom/LoadingView';
import StatusBarView from './custom/StatusBarView';
import {useTranslation} from 'react-i18next';

const EditLanguageComponent = (props) => {
  const {t} = useTranslation();

  const [datas, setDatas] = useState([
    {id: 1, degree:t('Sơ cấp') },
    {id: 2, degree:t('Trung cấp') },
    {id: 3, degree: t('Cao cấp')},
  ]);

  const [dataLanguage, setDataLanguage] = useState('');
  const [userId, setUserId] = useState('');
  const [nameLang, setNameLang] = useState(t('Ngôn ngữ'));
  const [id_Lang, setId_Lang] = useState('');
  const [nameDegree, setNameDegree] = useState(t('Trình độ'));
  const [id_Degree, setId_Degree] = useState('');
  const [langId, setLangId] = useState('');
  

  //===========================================
  useEffect(() => {
    getData();
    const dataLang = props.route.params.DataLang
    setId_Lang(dataLang.language_id)
    setNameLang(dataLang.language)
    setId_Degree(dataLang.degree)
    setLangId(dataLang.lang_id)
    datas.map(item =>{
      if(item.id === dataLang.degree){
        setNameDegree(item.degree)
      }
    })
    
  }, []);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      const kq = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserId(kq);
      props.getEditlangAction({
        users_id: jsonValue != null ? JSON.parse(jsonValue) : null,
        langs_id:props.route.params.DataLang.lang_id,
        language:'vi'
      });
    } catch (e) {}
  };

  useEffect(() => {
    if (props.statusGetEdit !== null) {
      if (props.statusGetEdit === 1) {
        // console.log(props.dataLGetEdit);
        setDataLanguage(props.dataLGetEdit);
      }
    }
  }, [props.statusGetEdit]);

  useEffect(() => {
    if (props.statusEdit !== null) {
      if (props.statusEdit === 1) {
        Alert.alert(
          t('Sửa Thành Công'),
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
                await props.logoutEditLangAction();
                await props.navigation.navigate('ListLanguageContainer');
              },
            },
          ],
          {cancelable: false},
        );
      }
    } else if (props.errorEdit !== null) {
      Alert.alert(t(props.errorEdit));
    }
  }, [props.statusEdit]);
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
    setNameLang(t('Ngôn ngữ'));
    setClearNameLang(false);
    // console.log(item);
  };
  const onClearDegree = (item) => {
    setNameDegree(t('Trình độ'));
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
    if (nameLang === t('Ngôn ngữ') || nameDegree === t('Trình độ')) {
      if (nameLang === t('Ngôn ngữ')) {
        setCheckNameLang(true);
      }
      if (nameDegree === t('Trình độ')) {
        setCheckNameDegree(true);
      }
    } else {
      console.log('====================================');
      console.log('nameLangID===', id_Lang);
      console.log('id_Degree===', id_Degree);
      console.log('userId===', userId);
      console.log('LangID===', langId);
      console.log('====================================');
      props.editLangAction({

        language_id: id_Lang,
        degree: id_Degree,
        user_id: userId,
        lang_id:langId

      });
    }
  };
  return (
    <View style={{flex: 1}}>
      {props.loadingEdit && <LoadingView />}
      {props.loadingGetEdit && <LoadingView />}
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
                props.logoutEditLangAction();
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
            <TouchableOpacity
              style={{
                flex: 0.1,
                left: 0,
                height: Sizes.h95,
                paddingHorizontal: Sizes.h32,
                justifyContent: 'center',
                alignItems: 'center',
              }}
             >

              </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: '#2EB553'}}>{t('Ngoại ngữ')}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkNameLang && (
            <Text style={{color: 'red'}}>* {t('Vui lòng chọn ngôn ngữ')}</Text>
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
                color: nameLang === t('Ngôn ngữ') ? '#BFBFBF' : 'black',
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
            <Text style={{color: 'red'}}>* {t('Vui lòng chọn trình độ')}</Text>
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
                color: nameDegree === t('Trình độ') ? '#BFBFBF' : 'black',
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
              {t('Cập nhập')}
            </Text>
          </TouchableOpacity>
        </View>

        <BottomSheetLanguage
          OnChooselang_id={(item) => onChooselang_id(item)}
          OnChooselang={(item) => onChooselang(item)}
          ref={modal}
          title={t("Chọn ngôn ngữ")}
          data={dataLanguage}
          modalHeight={screenHeight / 2}
        />
        <BottomSheetDegree
          OnChooseDegree_id={(item) => onChooseDegree_id(item)}
          OnChooseDegree={(item) => onChooseDegree(item)}
          ref={modal1}
          title={t("Chọn trình độ")}
          data={datas}
          modalHeight={screenHeight / 2}
        />
      </ScrollView>
    </View>
  );
};

export default EditLanguageComponent;
