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

const AddEducationComponent = (props) => {
  const [dataQua, setDataQua] = useState('');
  const [quaName, setQuaName] = useState('Trình độ');
  const [quaId, setQuaId] = useState('');
  const [dataFunc, setDataFunc] = useState('');
  const [funcName, setFuncName] = useState('Chuyên ngành');
  const [funcId, setFuncId] = useState('');
  const [dayPass, setDayPass] = useState('Năm học (từ)');
  const [monthPass, setMonthPass] = useState('');
  const [yearPass, setYearPass] = useState('');
  const [dayEnd, setDayEnd] = useState('Năm học (đến)');
  const [monthEnd, setMonthEnd] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const [school, setSchool] = useState('');
  const [userId, setUserId] = useState('');
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

  useEffect(() => {
    getData();
    props.getQualitificationrAction({qualifications_id: ''});
    props.getFunctionRoleAction({funcrole_group_id: '', funcrole_role_id: ''});
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      const kq = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserId(kq);
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
    if (props.statusInsert !== null) {
      if (props.statusInsert === 1) {
        Alert.alert(
          ' Xóa Thành Công',
          '',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress:async () => {
                await props.logoutInsertEduAction()
                await props.navigation.navigate('ListEducationContainer')
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

  //==============================================================================
  const [check, setCheck] = useState(false);
  const modal = React.createRef();
  const modal1 = React.createRef();
  const onChooseQua = (item) => {
    setCheck(false);
    setCheckQuaName(false);
    setDeleteQuaName(true);
    setQuaName(item);
  };
  const onChooseQua_id = (item) => {
    setCheck(false);
    setCheckQuaName(false);
    setQuaId(item);
  };
  const onDeleteQua = (item) => {
    setCheck(false);
    setDeleteQuaName(false);
    setQuaId('');
    setQuaName('Trình độ');
  };

  //=====//
  const onChooseFunc = (item) => {
    setCheck(false);
    setCheckFuncName(false);
    setDeleteFuncName(true);
    setFuncName(item);
  };
  const onChooseFunc_id = (item) => {
    setCheck(false);
    setCheckFuncName(false);
    setFuncId(item);
  };
  const onDeleteFunc = (item) => {
    setCheck(false);
    setDeleteFuncName(false);
    setFuncId('');
    setFuncName('Chuyên ngành');
  };
  const onChooseDayPass = (item) => {
    setCheck(false);
    // console.log('item', item);
    const m = `${item}`.slice(0, 2);
    const Month = m.replace(/^0+/, '');
    const Year = `${item}`.slice(3, 8);

    setDayPass(item);
    setCheckDayPass(false);
    setMonthPass(Month);
    setYearPass(Year);
  };
  const onChooseDayEnd = (item) => {
    setCheck(false);
    // console.log('item', item);
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
    setCheck(false);
    setSchool(item);
    setCheckSchool(false);
    setDeleteSchool(true);
  };
  const onDeleteSchool = (item) => {
    setCheck(false);
    setDeleteSchool(false);
    setSchool('');
  };

  //==============================================================
  const onSubmit = (item) => {
    console.log('vvvvvvvvv', userId);
    if (
      quaName === 'Trình độ' ||
      funcName === 'Chuyên ngành' ||
      dayPass === 'Năm học (từ)' ||
      dayEnd === 'Năm học (đến)' ||
      (monthEnd < monthPass && yearPass === yearEnd) ||
      yearPass > yearEnd ||
      school === '' ||
      school.trim() === ''
    ) {
      if (quaName === 'Trình độ') {
        setCheckQuaName(true);
      }
      if (funcName === 'Chuyên ngành') {
        setCheckFuncName(true);
      }
      if (dayPass === 'Năm học (từ)') {
        setCheckDayPass(true);
      }
      if (dayEnd === 'Năm học (đến)') {
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
      console.log('userId===', userId);
      console.log('====================================');
      props.insertEducationAction({
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
      {props.loadingInsert && <LoadingView/>}
      {props.loadingFunc && <LoadingView/>}
      {props.loadingQua && <LoadingView/>}
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
               await props.logoutInsertEduAction();
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
              source={require('../res/image/img/iconnumber05.png')}
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
          <Text style={{fontSize: 20, color: '#2EB553'}}>Trình độ học vấn</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkQuaName && (
            <Text style={{color: 'red'}}>* Vui lòng chọn trình độ</Text>
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
                color: quaName === 'Trình độ' ? '#BFBFBF' : 'black',
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkFuncName && (
            <Text style={{color: 'red'}}>* Vui lòng chọn chuyên ngành</Text>
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
                width:'70%',
                color: funcName === 'Chuyên ngành' ? '#BFBFBF' : 'black',
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkDayPass && (
            <Text style={{color: 'red'}}>* Vui lòng chọn năm học (từ)</Text>
          )}
        </View>

        <DatetimePass
          OnChooseDayPass={(item) => {
            onChooseDayPass(item);
          }}
          title={dayPass}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkDayEnd && (
            <Text style={{color: 'red'}}>* Vui lòng chọn năm học (đến)</Text>
          )}
          {checkDayEnd1 && (
            <Text style={{color: 'red'}}>
              * Vui lòng chọn năm học (đến) lớn hơn
            </Text>
          )}
          {checkDayEnd2 && (
            <Text style={{color: 'red'}}>
              * Vui lòng chọn năm học (đến) lớn hơn
            </Text>
          )}
        </View>

        <DatetimeEnd
          OnChooseDayEnd={(item) => {
            onChooseDayEnd(item);
          }}
          title={dayEnd}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkSchool && (
            <Text style={{color: 'red'}}>* Vui lòng nhập trường</Text>
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
              placeholder="Trường"
              style={{width: '70%', marginLeft: 15}}
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
                Cập nhập
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
          title="Chọn trình độ"
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
          title="Chọn chuyên ngành"
          data={dataFunc}
          modalHeight={screenHeight / 2}
        />
      </ScrollView>
    </View>
  );
};

export default AddEducationComponent;
