import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import Images from '../res/image';
import {screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import Header from './custom/Header';
import LoadingView from './custom/LoadingView';
import StatusBarView from './custom/StatusBarView';
import {useTranslation} from 'react-i18next';

const ResumeHomeComponent = (props) => {
  const {t} = useTranslation()
  const [data, setData] = useState('');

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (props.statusEditCv !== null) {
      if (props.statusEditCv === 1) {
        Alert.alert('Thông báo', props.messageEditCv);
      }
    } else if (props.errorEditCv !== null) {
      Alert.alert('Thông báo', props.errorEditCv);
    }
  }, [props.statusEditCv]);

  useEffect(() => {
    if (props.statusUser !== null) {
      if (props.statusUser === 1) {
        setTitle(props.dataUser.resume_title)
        setFuncRole(props.dataUser.functional_role_id)
        setMoneyNow(props.dataUser.current_annual_salary)
        setHideMoneyNow(props.dataUser.is_hide_current_salary)
        setMoneyNew(props.dataUser.expected_annual_salary)
        setHideMoneyNew(props.dataUser.is_negotiation)
        setLeverGroupId(props.dataUser.levelGroupId)
        if (props.dataUser.location_id === '') {
          console.log('flase1');
        } else if (props.dataUser.location_id !== '') {
          const kq = props.dataUser.location_id;
          const kqc = kq.split(',');
          kqc.map((item) => {
            const datas = {};
            datas[`city_id`] = item;
            getDataCity.push(datas);

            const x = Array.from(new Set(getDataCity.map(JSON.stringify))).map(
              JSON.parse,
            );
            const arrMin = x.sort(function (a, b) {
              return a.city_id - b.city_id;
            });
            setCityName_Id(arrMin);
            
            
          });
        }

      } 
      // else {
      //   setTimeout(() => {
      //     Alert.alert('Thông báo', props.messageUser);
      //   }, 10);
      // }
    }
  }, [props.statusUser]);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      setUserId(jsonValue != null ? JSON.parse(jsonValue) : null)
      
      props.infoUserAction({
        user_id: jsonValue != null ? JSON.parse(jsonValue) : null,
        lang_code: '',
        emp_id: '',
        is_app_cv: 1,
      });
      // console.log(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      // error reading value
    }
  };
  //  useEffect( async() => {
  //   // setIdCV(props.route.params.id)r
  //   //    console.log(props.route.params.id);

  //   const jsonValue = await AsyncStorage.getItem('@template_cv_id')
  //   const template_cv_id = JSON.parse(jsonValue)
  //   // const value = await AsyncStorage.getItem('@template_cv_id')
  //   console.log("value===", template_cv_id);

  //  }, [])

  const [title, setTitle] = useState('');
  const [funcRole, setFuncRole] = useState('');
  const [moneyNow, setMoneyNow] = useState('');
  const [hideMoneyNow, setHideMoneyNow] = useState('');
  const [moneyNew, setMoneyNew] = useState('');
  const [hideMoneyNew, setHideMoneyNew] = useState('');
  const [leverGroupId, setLeverGroupId] = useState('');
  const [cityName_Id, setCityName_Id] = useState('');
  const [userId, setUserId] = useState('');
  const [getDataCity, setGetDataCity] = useState([]);

  const [idCV, setIdCV] = useState('');
  const [check, setCheck] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);

  const onChangeText = (text) => {
    setCheck(false)

    if (text.length === 0 || text.trim() === '') {
      setTitle('');
    } else {
      setTitle(text.trim());
    }
  };

  const onUpdate = async () => {
    const jsonValue = JSON.stringify(title);

    if (title === null || title.trim() === '') {
      if (title === null || title.trim() === '') {
        setCheck(false);
        setErrorTitle(true);
      }
    } else {
      console.log('====================================');
      console.log(title);
      console.log(funcRole);
      console.log(moneyNow);
      console.log(hideMoneyNow);
      console.log(moneyNew);
      console.log(hideMoneyNew);
      console.log(leverGroupId);
      console.log(cityName_Id);
      console.log(userId);

      console.log('====================================');
      setCheck(true);
      setErrorTitle(false);
      await props.editCiviAction({
        cv_tittle: title,
        industry_id: '',
        functional_role_id: funcRole,
        csalary: moneyNow,
        is_hide_current_salary: hideMoneyNow,
        esalary: moneyNew,
        is_negotiation: hideMoneyNew,
        level_group_id: leverGroupId,
        location_id: cityName_Id,
        user_id: userId,
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      {props.loadingUser && <LoadingView />}
      {props.loadingEditCv && <LoadingView />}
      <StatusBarView />
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
            source={require('../res/image/img/iconnumber01.png')}
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
        style={{marginTop: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: '#2EB553'}}> {t('Tiêu đề Civi')}</Text>
      </View>
      <View style={{marginTop: 35}}>
        {errorTitle && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'red'}}>* {t('Vui lòng nhập tiêu đề của bạn')}</Text>
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 100,
          }}>
          <Image
            source={require('../res/image/img/iconortherinformation.png')}
            style={{right: 15, height: 35, width: 35, resizeMode: 'contain'}}
          />
          <TextInput
          numberOfLines={1}
            defaultValue={title}
            onChangeText={(text) => {
              onChangeText(text);
            }}
            placeholder={t('Tiêu đề')}
            style={{width: '70%'}}></TextInput>
        </View>
      </View>

      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        {check === false ? (
          <TouchableOpacity
            onPress={() => {
              onUpdate();
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
        ) : (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ContactHomeContainer');
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
            {t('Tiếp tục')}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          marginTop: 20,
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
          }}></TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ContactHomeContainer');
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
    </View>
  );
};

export default ResumeHomeComponent;
