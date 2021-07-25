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
import BottomSheetLeverSc6 from './custom/BottomSheetLeverSc6';
import DatetimeEnd from './custom/DatetimeEnd';
import DatetimePass from './custom/DatetimePass';
import LoadingView from './custom/LoadingView';
import StatusBarView from './custom/StatusBarView';
import {useTranslation} from 'react-i18next';

const AddExperiencesComponent = (props) => {
  const {t} = useTranslation();
  useEffect(() => {
    getData()
  }, []);
  useEffect(() => {
    if (props.statusLever !== null) {
      if (props.statusLever === 1) {
        // console.log(props.dataLever);
        setDataLever(props.dataLever);
      }
    }
  }, [props.statusLever]);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('lang');
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      const kq = jsonValue != null ? JSON.parse(jsonValue) : null;
      props.getLeverSr6Action({level_id: '',language: value != null ? value : 'vi',});
      setUserId(kq);
    } catch (e) {}
  };
  useEffect(() => {
    if (props.statusInsert !== null) {
      if (props.statusInsert === 1) {
        Alert.alert(
          t('Thêm Thành Công'),
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
                await props.logoutInsertSkillAction();
                await props.navigation.navigate('ListExperienContainer');
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

  //================================================
  const [dataLever, setDataLever] = useState('');
  const [exp, setExp] = useState('');
  const [dayPass, setDayPass] = useState(t('Thời gian bắt đầu làm việc từ'));
  const [monthPass, setMonthPass] = useState('');
  const [yearPass, setYearPass] = useState('');
  const [dayEnd, setDayEnd] = useState(t('Thời gian nghỉ việc'));
  const [monthEnd, setMonthEnd] = useState('');
  const [yearEnd, setYearEnd] = useState('');
  const [nameCompany, setNameCompany] = useState('');
  const [lever_Name, setLever_Name] = useState(t('Cấp bậc'));
  const [lever_Id, setLever_Id] = useState('');
  const [nowDate, setNowDate] = useState(0);
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  //================================================
  const [check, setCheck] = useState(false);
  const [checkExp, setCheckExp] = useState(false);
  const [clearExp, setClearExp] = useState(false);
  const [checkNameCom, setCheckNameCom] = useState(false);
  const [clearNameCom, setClearNameCom] = useState(false);
  const [checkDayPass, setCheckDayPass] = useState(false);
  const [checkDayEnd, setCheckDayEnd] = useState(false);
  const [checkDayEnd1, setCheckDayEnd1] = useState(false);
  const [checkDayEnd2, setCheckDayEnd2] = useState(false);
  const [checkLever, setCheckLever] = useState(false);
  const [clearLever, setClearLever] = useState(false);
  const modal = React.createRef();

  //================================================
  const textExp = (text) => {
    setClearExp(true);
    setExp(text);
    setCheckExp(false);
  };
  const onClearExp = (text) => {
    setClearExp(false);
    setExp('');
  };
  const textNameCom = (text) => {
    setClearNameCom(true);
    setNameCompany(text);
    setCheckNameCom(false);
  };
  const onClearNameCom = (text) => {
    setClearNameCom(false);
    setNameCompany('');
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
  const onChooseLever = (item) => {
    setClearLever(true);
    setCheckLever(false);
    setLever_Name(item);
  };
  const onChooseLever_id = (item) => {
    setLever_Id(item);
  };
  const onClearLever = (text) => {
    setClearLever(false);
    setClearNameCom(false);
    setLever_Name(t('Cấp bậc'));
    setLever_Id('');
  };
  const onNowDate = (text) => {
    if (text === true) {
      setNowDate(1);
    } else if (text === false) {
      setNowDate(0);
    }
  };
  const textContent = (text) => {
    setContent(text);
  };
  //==================================================
  const onSubmit = () => {
    if (
      exp === null ||
      exp.trim() === '' ||
      nameCompany === null ||
      nameCompany.trim() === '' ||
      dayPass === t('Thời gian bắt đầu làm việc từ') ||
      dayEnd === t('Thời gian nghỉ việc') ||
      (monthEnd < monthPass && yearPass === yearEnd) ||
      yearPass > yearEnd ||
      lever_Name === t('Cấp bậc')
    ) {
      if (exp === null || exp.trim() === '') {
        setExp('');
        setCheckExp(true);
      }
      if (nameCompany === null || nameCompany.trim() === '') {
        setNameCompany('');
        setCheckNameCom(true);
      }
      if (dayPass === t('Thời gian bắt đầu làm việc từ')) {
        setCheckDayPass(true);
      }
      if (dayEnd === t('Thời gian nghỉ việc')) {
        setCheckDayEnd(true);
      } else if (monthEnd < monthPass && yearPass === yearEnd) {
        setCheckDayEnd1(true);
      } else if (yearPass > yearEnd) {
        setCheckDayEnd2(true);
      }
      if (lever_Name === t('Cấp bậc')) {
        setCheckLever(true);
      }
    } else {
      console.log('====================================');
      console.log('exp===', exp);
      console.log('nameCompany===', nameCompany);
      console.log('monthPass===', monthPass);
      console.log('yearPass===', yearPass);
      console.log('monthEnd===', monthEnd);
      console.log('yearEnd===', yearEnd);
      console.log('lever_Id===', lever_Id);
      console.log('nowDate===', nowDate);
      console.log('content===', content);
      console.log('userId===', userId);
      console.log('====================================');
      props.insertSkillAction({
        skill_name: exp,
        company_name: nameCompany,
        main_job: content,
        experience_month_begin: monthPass,
        experience_year_begin: yearPass,
        experience_month_end: monthEnd,
        experience_year_end: yearEnd,
        is_now: nowDate,
        level_id: lever_Id,
        user_id: userId
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      {props.loadingInsert && <LoadingView />}
      {props.loadingLever && <LoadingView/>}
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
          <Text style={{fontSize: 20, color: '#2EB553'}}>
           {t('Kinh nghiệm làm việc')} 
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkExp && (
            <Text style={{color: 'red'}}>* {t('Vui lòng nhập kinh nghiệm')}</Text>
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
              source={require('../res/image/img/iconskill.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <TextInput
              defaultValue={exp}
              onChangeText={(text) => {
                textExp(text);
              }}
              placeholder={t('Kinh nghiệm')}
              style={{width:clearExp== true? '70%':'80%', marginLeft: 15, }}></TextInput>
          </View>
          {clearExp && (
            <TouchableOpacity
              onPress={() => {
                onClearExp();
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
          {checkNameCom && (
            <Text style={{color: 'red'}}>* {t('Vui lòng nhập tên công ty')}</Text>
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
              source={require('../res/image/img/iconnamecompany.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <TextInput
              defaultValue={nameCompany}
              placeholder={t('Tên công ty')}
              onChangeText={(text) => {
                textNameCom(text);
              }}
              style={{width: clearNameCom== true? '70%':'80%', marginLeft: 15,}}></TextInput>
          </View>
          {clearNameCom && (
            <TouchableOpacity
              onPress={() => {
                onClearNameCom();
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
          {checkLever && (
            <Text style={{color: 'red'}}>* {t('Vui lòng chọn cấp bậc')}</Text>
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
              source={require('../res/image/img/icondegree.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <Text
              style={{
                marginLeft: 15,
                color: lever_Name === t('Cấp bậc') ? '#BFBFBF' : 'black',
              }}>
              {lever_Name}
            </Text>
          </View>
          {clearLever && (
            <TouchableOpacity
              onPress={() => {
                onClearLever();
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
          }}></View>
        <View
          style={{
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 80,
            paddingVertical: 10,
          }}>
          <Text>{t('Công việc chính')}</Text>
          <TextInput
            onChangeText={(text) => {
              textContent(text);
            }}
            placeholder={t("Nhập thông tin...")}
            numberOfLines={5}
            multiline={true}
            style={{
              textAlignVertical: 'top',

              height: 100,
              borderColor: '#D9D9D9',
              borderWidth: 1,
              paddingVertical: 10,
              borderRadius: 10,
            }}></TextInput>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkDayPass && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng chọn thời gian bắt đầu làm việc')}
            </Text>
          )}
        </View>

        <DatetimePass
          OnChooseDayPass={(item) => {
            onChooseDayPass(item);
          }}
          title={dayPass}
          type="1"
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkDayEnd && (
            <Text style={{color: 'red'}}>* {t('Vui lòng chọn thời gian nghỉ')} </Text>
          )}
          {checkDayEnd1 && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng chọn thời gian nghỉ lớn hơn')}
            </Text>
          )}
          {checkDayEnd2 && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng chọn thời gian nghỉ lớn hơn')}
            </Text>
          )}
        </View>

        <DatetimeEnd
          OnChooseDayEnd={(item) => {
            onChooseDayEnd(item);
          }}
          OnNowDate={(item) => {
            onNowDate(item);
          }}
          title={dayEnd}
          type="1"
        />

        

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
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

        <BottomSheetLeverSc6
          OnChooseLever_id={(item) => {
            onChooseLever_id(item);
          }}
          OnChooseLever={(item) => {
            onChooseLever(item);
          }}
          ref={modal}
          title={t('Cấp bậc')}
          data={dataLever}
          modalHeight={screenHeight / 2}
        />
      </ScrollView>
    </View>
  );
};

export default AddExperiencesComponent;
