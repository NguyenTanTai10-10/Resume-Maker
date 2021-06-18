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
import {screenHeight, screenWidth} from '../res/style/theme';
import BottomSheetIndustry from './custom/BottomSheetIndustry';
import BottomSheetLever from './custom/BottomSheetLever';
import BottomSheetListCity from './custom/BottomSheetListCity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingView from './custom/LoadingView';
import {useTranslation} from 'react-i18next';

const BasicInfoComponent = (props) => {
  const {t} = useTranslation();
  const [dataIndustry, setDataIndustry] = useState([]);
  const [dataLever, setDataLever] = useState([]);
  const [dataCity, setDataCity] = useState([]);
  const [getDataCity, setGetDataCity] = useState([]);
  const [totalCity, setTotalCity] = useState([]);
  useEffect(() => {
    getdata();

    props.getIndustryAction({industry_id: ''});
    props.getLeverAction({level_group_id: ''});
    props.getCityAction({city_id: '', country_id: ''});
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
        setFuncRole(props.dataUser.industry);
        setMoneyNow(props.dataUser.current_annual_salary.toLocaleString());
        setHideMoneyNow(props.dataUser.is_hide_current_salary);
        setMoneyNew(props.dataUser.expected_annual_salary.toLocaleString());
        setHideMoneyNew(props.dataUser.is_negotiation);
        setResumeTitle(props.dataUser.resume_title);
        dataIndustry.map((item) => {
          if (item.industry_id === props.dataUser.functional_role_id) {
            setIndustry(item.industry);
            setFuncRole(item.industry_id);
          }
        });
        dataLever.map((item) => {
          if (item.level_group === props.dataUser.levelGroup) {
            setLeverGroup(item.level_group);
            setLeverGroupId(item.level_group_id);
          }
        });
        if (props.dataUser.is_hide_current_salary === 1) {
          setCheckShow(true);
          setHideMoneyNow(1);
        } else {
          setCheckShow(false);
          setHideMoneyNow(0);
        }
        if (props.dataUser.is_negotiation === 1) {
          setCheckShow1(true);
          setHideMoneyNew(1);
        } else {
          setCheckShow1(false);
          setHideMoneyNew(0);
        }

        if (props.dataUser.location_id === '') {
          console.log('flase1');
        } else if (props.dataUser.location_id !== '') {
          // console.log("props.dataUser.location_id",props.dataUser.location_id);
          const kq = props.dataUser.location_id;
          const kqc = kq.split(',');
          kqc.map((item) => {
            const data = {};
            data[`city_id`] = item;
            getDataCity.push(data);

            const x = Array.from(new Set(getDataCity.map(JSON.stringify))).map(
              JSON.parse,
            );
            const arrMin = x.sort(function (a, b) {
              return a.city_id - b.city_id;
            });
            setCityName_Id(arrMin);
            setGetDataCity(arrMin);
            const arrMaxc = dataCity.sort(function (a, b) {
              return a.city_id - b.city_id;
            });
            arrdataCity();
          });
        }
      }
    } else if (props.errorUser !== null) {
      Alert.alert(t('Thông báo'), t(props.errorUser));
    }
  }, [props.statusUser]);

  const arrdataCity = () => {
    const arrmin = Array.from(new Set(getDataCity.map(JSON.stringify))).map(
      JSON.parse,
    );
    // console.log("arrmin",arrmin);
    const arrMaxc = dataCity.sort(function (a, b) {
      return a.id - b.id;
    });
    // console.log(arrMaxc);

    for (let i = 0; i < arrmin.length; i++) {
      const parseInts = parseInt(arrmin[i].city_id);

      arrMaxc.map((item) => {
        // console.log(typeof(parseInts));
        // console.log(typeof(item.id));
        if (parseInts === item.id) {
          totalCity.push(item);
          const xyz = Array.from(new Set(totalCity.map(JSON.stringify))).map(
            JSON.parse,
          );

          setCityName(xyz);
          setCheckCity(true);
        }
      });
    }
  };

  useEffect(() => {
    if (props.statusIndustry !== null) {
      if (props.statusIndustry === 1) {
        setDataIndustry(props.dataIndustrys);
      }
    }
  }, [props.statusIndustry]);

  useEffect(() => {
    if (props.statusCity !== null) {
      if (props.statusCity === 1) {
        setDataCity(props.dataCity);
      }
    }
  }, [props.statusCity]);
  useEffect(() => {
    if (props.statusLever !== null) {
      if (props.statusLever === 1) {
        setDataLever(props.dataLever);
      }
    }
  }, [props.statusLever]);
  useEffect(() => {
    if (props.statusEditCv !== null) {
      if (props.statusEditCv === 1) {
        Alert.alert(t('Thông báo'), t(props.messageEditCv));
         setCheck(true);
      } else if (props.statusEditCv === 0) {
        Alert.alert(t('Thông báo'), t(props.messageEditCv));
      }
    } else if (props.errorEditCv !== null) {
      Alert.alert(t('Thông báo'), t(props.errorEditCv));
    }
  }, [props.statusEditCv]);

  const [cityName, setCityName] = useState([]);
  const [city, setCity] = useState([]);
  const [cityName_Id, setCityName_Id] = useState([]);
  const [city_Id, setCity_Id] = useState([]);
  const [checkCity, setCheckCity] = useState(false);
  const [check, setCheck] = useState(false);
  const [checkShow, setCheckShow] = useState(false);
  const [checkShow1, setCheckShow1] = useState(false);
  const [checkFuncRole, setCheckFuncRole] = useState(false);
  const [checkOnFuncRole, setCheckOnFuncRole] = useState(false);
  const [checkMoneyNow, setCheckMoneyNow] = useState(false);
  const [checkOnMoneyNow, setCheckOnMoneyNow] = useState(false);
  const [checkMoneyNew, setCheckMoneyNew] = useState(false);
  const [checkOnMoneyNew, setCheckOnMoneyNew] = useState(false);
  const [checkLever, setCheckLever] = useState(false);
  const [checkOnLever, setCheckOnLever] = useState(false);
  const [checkCityError, setCheckCityError] = useState(false);

  //================================================
  const [funcRole, setFuncRole] = useState('');
  const [userId, setUserId] = useState('');
  const [moneyNow, setMoneyNow] = useState('');
  const [moneyNew, setMoneyNew] = useState('');
  const [industry, setIndustry] = useState(t('Lĩnh vực'));
  const [leverGroup, setLeverGroup] = useState(t('Vị trí'));
  const [leverGroupId, setLeverGroupId] = useState(t('Vị trí'));
  const [hideMoneyNow, setHideMoneyNow] = useState(0);
  const [hideMoneyNew, setHideMoneyNew] = useState(0);
  const [resumeTitle, setResumeTitle] = useState('');

  //================================================

  const textMoneyNow = (text) => {
    setCheck(false);
    const kq = text.replace(/^0+/, '');
    setMoneyNow(kq);
    setCheckMoneyNow(false);
    setCheckOnMoneyNow(true);
  };
  const textMoneyNew = (text) => {
    setCheck(false);
    const kq = text.replace(/^0+/, '');

    setMoneyNew(kq);
    setCheckMoneyNew(false);
    setCheckOnMoneyNew(true);
  };

  const modal = React.createRef();
  const modal1 = React.createRef();
  const modal2 = React.createRef();

  const onChooseIndustry = (item) => {
    setCheck(false);
    setIndustry(item);
  };
  const onChooseIndustry_id = (item) => {
    setCheck(false);
    setCheckFuncRole(false);
    setCheckOnFuncRole(true);
    setFuncRole(item);
  };
  const onChooseLever = (item) => {
    setCheck(false);
    setLeverGroup(item);
  };
  const onChooseLever_id = (item) => {
    setCheck(false);
    setCheckLever(false);
    setCheckOnLever(true);
    setLeverGroupId(item);
  };
  const onChooseCity = async (item) => {
    setCheck(false);
    setCheckCityError(false);
    setCheckCity(true);
    city.push(item);
    var x = Array.from(new Set(city.map(JSON.stringify))).map(JSON.parse);
    setCityName(x);
  };
  const onChooseCity_id = (item) => {
    setCheck(false);
    console.log(item);
    const kq = {};
    kq['city_id'] = item;
    city_Id.push(kq);
    var x = Array.from(new Set(city_Id.map(JSON.stringify))).map(JSON.parse);
    setCityName_Id(x);
  };
  //===========================================

  const onSubmit = async () => {
    if (
      industry === null ||
      industry === t('Lĩnh vực') ||
      moneyNow === null ||
      moneyNow.trim() === '' ||
      moneyNew === null ||
      moneyNew.trim() === '' ||
      leverGroup === null ||
      leverGroup === t('Vị trí') ||
      cityName.length === 0
    ) {
      if (industry === null || industry === t('Lĩnh vực')) {
        setCheckFuncRole(true);
        setFuncRole('');
        setCheckOnFuncRole(false);
      }
      if (moneyNow === null || moneyNow.trim() === '') {
        setCheckMoneyNow(true);
        setMoneyNow('');
        setCheckOnMoneyNow(false);
      }
      if (moneyNew === null || moneyNew.trim() === '') {
        setCheckMoneyNew(true);
        setMoneyNew('');
        setCheckOnMoneyNew(false);
      }
      if (leverGroup === null || leverGroup === t('Vị trí')) {
        setCheckLever(true);
        setLeverGroup(t('Vị trí'));
        setCheckOnLever(false);
      }
      if (cityName.length === 0) {
        setCheckCityError(true);
      }
    } else {
      console.log('====================================');

      console.log('resumeTitle===', resumeTitle);
      console.log('hideMoneyNow===', hideMoneyNow);
      console.log('hideMoneyNew===', hideMoneyNew);
      console.log('funcRole==', funcRole);
      console.log('moneyNow==', moneyNow);
      console.log('moneyNew==', moneyNew);
      console.log('leverGroupId==', leverGroupId);
      console.log('cityName_Id==', cityName_Id);
      console.log('cityName==', cityName);
      console.log('userId==', userId);

      await props.editCiviAction({
        cv_tittle: resumeTitle,
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
      console.log('====================================');
      
    }
  };
  //===============================
  const onDeleteCity = (items) => {
    setCheck(false);
    const new_arr = cityName.filter((item) => item !== items);
    setCityName(new_arr);
    setCity(new_arr);
    if (new_arr.length === 0) {
      setCheckCity(false);
    }
  };
  const onDeleteCity_Id = (items) => {
    setCheck(false);
    const new_arr = cityName_Id.filter(
      (item) => item.city_id !== items.toLocaleString(),
    );
    // console.log('new_arr', new_arr);
    setCityName_Id(new_arr);
    setCity_Id(new_arr);
  };

  //=======================================

  const onFuncRole = (items) => {
    setCheck(false);
    setCheckOnFuncRole(false);
    setIndustry(t('Lĩnh vực'));
    setFuncRole('');
  };
  const onLever = (items) => {
    setCheck(false);
    setCheckOnLever(false);
    setLeverGroup(t('Vị trí'));
    setLeverGroupId('');
  };
  const onMoneyNow = (items) => {
    setCheck(false);
    setCheckOnMoneyNow(false);
    setMoneyNow('');
  };
  const onHideMoneyNow = (items) => {
    setCheck(false);
    if (checkShow === false) {
      setCheckShow(!checkShow);
      setHideMoneyNow(1);
    } else {
      setCheckShow(!checkShow);
      setHideMoneyNow(0);
    }
  };
  const onMoneyNew = (items) => {
    setCheck(false);
    setCheckOnMoneyNew(false);
    setMoneyNew('');
  };
  const onHideMoneyNew = (items) => {
    setCheck(false);
    if (checkShow1 === false) {
      setCheckShow1(!checkShow1);
      setHideMoneyNew(1);
    } else {
      setCheckShow1(!checkShow1);
      setHideMoneyNew(0);
    }
  };

  return (
    <View style={{flex: 1}}>
      {props.loadingUser && <LoadingView />}
      {props.loadingEditCv && <LoadingView />}
      {/* {props.loadingLever && <LoadingView />}
      {props.loadingIndustry && <LoadingView />} */}

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
                props.navigation.goBack();
                props.logoutEditCiviAction();
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
           {t("Thông tin xin việc")} 
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkFuncRole && (
            <Text style={{color: 'red'}}>* {t('Vui lòng chọn lĩnh vực')}</Text>
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
              source={require('../res/image/img/iconskill.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />

            <Text
              style={{
                width: '70%',
                marginLeft: 15,
                color: industry === t('Lĩnh vực') ? '#BFBFBF' : 'black',
              }}>
              {industry}
            </Text>
          </View>
          {checkOnFuncRole && (
            <TouchableOpacity
              onPress={() => {
                onFuncRole();
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
          {checkMoneyNow && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng nhập lương hiện tại')}
            </Text>
          )}
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
            source={require('../res/image/img/iconsalary.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
          <TextInput
            defaultValue={moneyNow}
            onChangeText={(text) => {
              textMoneyNow(text);
            }}
            keyboardType="number-pad"
            placeholder={t('Lương hiện tại')}
            style={{width: '58%', marginLeft: 15}}></TextInput>

          <Text style={{}}>VND</Text>
          {checkOnMoneyNow && (
            <TouchableOpacity
              onPress={() => {
                onMoneyNow();
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
        <TouchableOpacity
          onPress={() => {
            onHideMoneyNow();
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
            {t('Không hiển thị')}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkMoneyNew && (
            <Text style={{color: 'red'}}>
              * {t('Vui lòng nhập lương mong muốn')}
            </Text>
          )}
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
            source={require('../res/image/img/iconsalary.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
          <TextInput
            defaultValue={moneyNew}
            keyboardType="number-pad"
            onChangeText={(text) => textMoneyNew(text)}
            placeholder={t('Lương mong muốn')}
            style={{width: '58%', marginLeft: 15}}></TextInput>

          <Text style={{}}>VND</Text>
          {checkOnMoneyNew && (
            <TouchableOpacity
              onPress={() => {
                onMoneyNew();
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
        <TouchableOpacity
          onPress={() => {
            onHideMoneyNew();
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
            {t('Thỏa thuận')}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {checkLever && (
            <Text style={{color: 'red'}}>* {t('Vui lòng chọn vị trí')}</Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => modal1.current.open()}
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
              source={require('../res/image/img/iconformofwork.png')}
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
            <Text
              style={{
                marginLeft: 15,
                color: leverGroup === t('Vị trí') ? '#BFBFBF' : 'black',
              }}>
              {leverGroup}
            </Text>
          </View>
          {checkOnLever && (
            <TouchableOpacity
              onPress={() => {
                onLever();
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
          {checkCityError && (
            <Text style={{color: 'red'}}>* {t('Vui lòng chọn khu vực')}</Text>
          )}
        </View>

        <View
          onPress={() => modal2.current.open()}
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
              width: '85%',
            }}>
            <TouchableOpacity onPress={() => modal2.current.open()}>
              <Image
                source={require('../res/image/img/iconlocation.png')}
                style={{height: 35, width: 35, resizeMode: 'contain'}}
              />
            </TouchableOpacity>

            {checkCity === false ? (
              <Text style={{color: '#BFBFBF', marginLeft: 15}}>
                {t('Khu vực bạn muốn')}
              </Text>
            ) : (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{}}>
                {cityName.map((item, index) => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#E6E7E9',
                        marginLeft: 10,
                      }}>
                      <Text>{item.city}</Text>
                      <TouchableOpacity
                        onPress={async () => {
                          onDeleteCity(item);
                          onDeleteCity_Id(item.id);
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

          <TouchableOpacity onPress={() => modal2.current.open()}>
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
                {t('Cập nhập')}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ListLanguageContainer');
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
            marginBottom: 20,
            marginTop: 10,

            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('HomeContainer');
              props.logoutEditCiviAction();
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
              style={{height: 30, width: 30, resizeMode: 'contain'}}
            />
            <Text style={{color: 'black'}}>{t('Trang chủ')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('ListLanguageContainer')}
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
        <BottomSheetIndustry
          OnChooseIndustry={(item) => {
            onChooseIndustry(item);
          }}
          OnChooseIndustry_id={(item) => {
            onChooseIndustry_id(item);
          }}
          ref={modal}
          title={t('Chọn lĩnh vực')}
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
          title={t('Chọn vị trí')}
          data={dataLever}
          modalHeight={screenHeight / 2}
        />
        <BottomSheetListCity
          OnChooseCity={(item) => {
            onChooseCity(item);
          }}
          OnChooseCity_id={(item) => {
            onChooseCity_id(item);
          }}
          ref={modal2}
          title={t('Chọn khu vực')}
          data={dataCity}
          modalHeight={screenHeight / 2}
        />
      </ScrollView>
    </View>
  );
};

export default BasicInfoComponent;
