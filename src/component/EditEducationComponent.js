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
import BottomSheetFunc from './custom/BottomSheetFunc';
import BottomSheetQua from './custom/BottomSheetQua';
import DatetimeEnd from './custom/DatetimeEnd';
import DatetimePass from './custom/DatetimePass';
import DatetimePicker from './custom/DatetimePicker';
import LoadingView from './custom/LoadingView';
import StatusBarView from './custom/StatusBarView';
import {useTranslation} from 'react-i18next';

const EditEducationComponent = (props) => {
  const {t} = useTranslation();
  const [dataQua, setDataQua] = useState('');
  const [quaName, setQuaName] = useState(t('Trình độ'));
  const [quaId, setQuaId] = useState('');
  const [dataFunc, setDataFunc] = useState('');
  const [funcName, setFuncName] = useState(t('Chuyên ngành'));
  const [funcId, setFuncId] = useState('');
  const [dayPass, setDayPass] = useState(t('Năm học (từ)'));
  const [monthPass, setMonthPass] = useState('');
  const [yearPass, setYearPass] = useState('');
  const [dayEnd, setDayEnd] = useState(t('Năm học (đến)'));
  const [monthEnd, setMonthEnd] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const [school, setSchool] = useState('');
  const [userId, setUserId] = useState('');
  const [education_id, setEducation_id] = useState('');
  //========================================
  const [checkQuaName, setCheckQuaName] = useState(false);
  const [deleteQuaName, setDeleteQuaName] = useState(false);
  const [checkFuncName, setCheckFuncName] = useState(false);
  const [deleteFuncName, setDeleteFuncName] = useState(false);
  const [checkDayPass, setCheckDayPass] = useState(false);
  const [checkDayEnd, setCheckDayEnd] = useState(false);
  const [checkDayEnd1, setCheckDayEnd1] = useState(false);
  const [checkDayEnd2, setCheckDayEnd2] = useState(false);
  const [checkSchool, setCheckSchool] = useState(false);
  const [deleteSchool, setDeleteSchool] = useState(false);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('lang');
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      const kq = jsonValue != null ? JSON.parse(jsonValue) : null;
      props.getQualitificationrAction({
        qualifications_id: '',
        language: value != null ? value : 'vi',
      });
      props.getFunctionRoleAction({
        funcrole_group_id: '',
        funcrole_role_id: '',
        language: value != null ? value : 'vi',
      });
      setUserId(kq);
      const dataItem = props.route.params.eduction_Id;
      setFuncName(dataItem.functional_role);
      setFuncId(dataItem.functional_role_id);
      setQuaName(dataItem.qualification);
      setQuaId(dataItem.qualification_id);
      const DataPass = `${dataItem.month_of_pass}-${dataItem.year_of_pass}`;
      setDayPass(DataPass);
      setMonthPass(dataItem.month_of_pass);
      setYearPass(dataItem.year_of_pass);
      const DataEnd = `${dataItem.month_of_end}-${dataItem.year_of_end}`;
      setDayEnd(DataEnd);
      setMonthEnd(dataItem.month_of_end);
      setYearEnd(dataItem.year_of_end);
      setSchool(dataItem.institute);
      setEducation_id(dataItem.eduction_id);
    } catch (e) {}
  };

  //==================================================
  useEffect(() => {
    if (props.statusQua !== null) {
      if (props.statusQua === 1) {
        // console.log(props.dataQua);
        setDataQua(props.dataQua);
      }
    }
  }, [props.statusQua]);
  useEffect(() => {
    if (props.statusFunc !== null) {
      if (props.statusFunc === 1) {
        // console.log(props.dataFunc);
        setDataFunc(props.dataFunc);
      }
    }
  }, [props.statusFunc]);
  useEffect(() => {
    if (props.statusEditEdu !== null) {
      if (props.statusEditEdu === 1) {
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
                await props.logoutEditEduAction();
                await props.navigation.navigate('ListEducationContainer');
              },
            },
          ],
          {cancelable: false},
        );
      }
    }
  }, [props.statusEditEdu]);

  //==============================================================================
  const [check, setCheck] = useState(false);
  const modal = React.createRef();
  const modal1 = React.createRef();
  const onChooseQua = (item) => {
    if (item == 'Trung học') {
      setDisable(true);
      setFuncName('');
    } else {
      setDisable(false);
    }
    setCheckQuaName(false);
    setDeleteQuaName(true);
    setQuaName(item);
  };
  const onChooseQua_id = (item) => {
    setCheckQuaName(false);
    setQuaId(item);
  };
  const onDeleteQua = (item) => {
    setDeleteQuaName(false);
    setQuaId('');
    setQuaName(t('Trình độ'));
  };

  //=====//
  const onChooseFunc = (item) => {
    setCheckFuncName(false);
    setDeleteFuncName(true);
    setFuncName(item);
  };
  const onChooseFunc_id = (item) => {
    setCheckFuncName(false);
    setFuncId(item);
  };
  const onDeleteFunc = (item) => {
    setDeleteFuncName(false);
    setFuncId('');
    setFuncName(t('Chuyên ngành'));
  };
  const onChooseDayPass = (item) => {
    console.log('item', item);
    const m = `${item}`.slice(0, 2);
    const Month = m.replace(/^0+/, '');
    const Year = `${item}`.slice(3, 8);

    setDayPass(item);
    setCheckDayPass(false);
    setMonthPass(Month);
    setYearPass(Year);
  };
  const onChooseDayEnd = (item) => {
    console.log('item', item);
    const m = `${item}`.slice(0, 2);
    const Month = m.replace(/^0+/, '');
    const Year = `${item}`.slice(3, 8);

    setDayEnd(item);
    setCheckDayEnd(false);
    setCheckDayEnd1(false);
    setCheckDayEnd2(false);
    setMonthEnd(Month);
    setYearEnd(Year);
  };
  const textSchool = (item) => {
    setSchool(item);
    setCheckSchool(false);
    setDeleteSchool(true);
  };
  const onDeleteSchool = (item) => {
    setDeleteSchool(false);
    setSchool('');
  };

  //==============================================================
  const onSubmit = (item) => {
    if (
      quaName === t('Trình độ') ||
      dayPass === t('Năm học (từ)') ||
      dayEnd === t('Năm học (đến)') ||
      (monthEnd < monthPass && yearPass === yearEnd) ||
      yearPass > yearEnd ||
      school === '' ||
      school.trim() === '' ||
      funcName === t('Chuyên ngành')
    ) {
      if (quaName === t('Trình độ')) {
        setCheckQuaName(true);
      }
        if (funcName === t('Chuyên ngành')) {
          setCheckFuncName(true);
        }
      if (dayPass === t('Năm học (từ)')) {
        setCheckDayPass(true);
      }
      if (dayEnd === t('Năm học (đến)')) {
        setCheckDayEnd(true);
      } else if (monthEnd < monthPass && yearPass === yearEnd) {
        setCheckDayEnd1(true);
      } else if (yearPass > yearEnd) {
        setCheckDayEnd2(true);
      }
      if (school === '' || school.trim() === '') {
        setCheckSchool(true);
      }
    } else {
      console.log('====================================');
      console.log('quaId===', quaId);
      console.log('funcId===', funcId);
      console.log('monthPass===', monthPass);
      console.log('yearPass===', yearPass);
      console.log('monthEnd===', monthEnd);
      console.log('yearEnd===', yearEnd);
      console.log('school===', school);
      console.log('education_id===', education_id);
      console.log('====================================');
      props.editEducationAction({
        education_id: education_id,
        qualification_id: quaId,
        functional_role_id: funcId,
        institute: school,
        month_of_pass: monthPass,
        year_of_pass: yearPass,
        month_of_end: monthEnd,
        year_of_end: yearEnd,
        user_id: userId,
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      {props.loadingFunc && <LoadingView />}
      {props.loadingQua && <LoadingView />}
      {props.loadingEditEdu && <LoadingView />}
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
                props.navigation.goBack();
                props.logoutEditEduAction();
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
            {t('Trình độ học vấn')}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkQuaName && (
            <Text style={{color: 'red'}}>* {t('Vui lòng chọn trình độ')}</Text>
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
              source={require('../res/image/img/icondegree.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <Text
              style={{
                marginLeft: 15,
                color: quaName === t('Trình độ') ? '#BFBFBF' : 'black',
              }}>
              {quaName}
            </Text>
          </View>
          {deleteQuaName && (
            <TouchableOpacity
              onPress={() => {
                onDeleteQua();
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
        {disable == true ? null : (
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              {checkFuncName && (
                <Text style={{color: 'red'}}>
                  * {t('Vui lòng chọn chuyên ngành')}
                </Text>
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
                  source={require('../res/image/img/iconspeci.png')}
                  style={{height: 35, width: 35, resizeMode: 'contain'}}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    width: '70%',
                    color: funcName === t('Chuyên ngành') ? '#BFBFBF' : 'black',
                  }}>
                  {funcName}
                </Text>
              </View>
              {deleteFuncName && (
                <TouchableOpacity
                  onPress={() => {
                    onDeleteFunc();
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
          </View>
        )}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkSchool && (
            <Text style={{color: 'red'}}>* {t('Vui lòng nhập trường')}</Text>
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
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={require('../res/image/img/iconshool.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <TextInput
              onChangeText={(text) => textSchool(text)}
              defaultValue={school}
              placeholder={t('Trường')}
              style={{
                width: deleteSchool == true ? '70%' : '80%',
                marginLeft: 15,
              }}
            />
          </View>
          {deleteSchool && (
            <TouchableOpacity
              onPress={() => {
                onDeleteSchool();
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
          {checkDayPass && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng chọn năm học (từ)')}
            </Text>
          )}
        </View>

        <DatetimePass
          OnChooseDayPass={(item) => {
            onChooseDayPass(item);
          }}
          title={dayPass}
          type="0"
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkDayEnd && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng chọn năm học (đến)')}
            </Text>
          )}
          {checkDayEnd1 && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng chọn năm học (đến) lớn hơn')}
            </Text>
          )}
          {checkDayEnd2 && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng chọn năm học (đến) lớn hơn')}
            </Text>
          )}
        </View>

        <DatetimeEnd
          OnChooseDayEnd={(item) => {
            onChooseDayEnd(item);
          }}
          title={dayEnd}
          type="0"
        />

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
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

        <BottomSheetQua
          OnChooseQua_id={(item) => {
            onChooseQua_id(item);
          }}
          OnChooseQua={(item) => {
            onChooseQua(item);
          }}
          ref={modal}
          title={t('"Chọn trình độ"')}
          data={dataQua}
          modalHeight={screenHeight / 2}
        />
        <BottomSheetFunc
          OnChooseFunc_id={(item) => {
            onChooseFunc_id(item);
          }}
          OnChooseFunc={(item) => {
            onChooseFunc(item);
          }}
          ref={modal1}
          title={t('"Chọn chuyên ngành"')}
          data={dataFunc}
          modalHeight={screenHeight / 2}
        />
      </ScrollView>
    </View>
  );
};

export default EditEducationComponent;
