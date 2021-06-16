import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
  Share,
} from 'react-native';

import {screenWidth} from '../../res/style/theme';
import Header from '../custom/Header';
import LoadingView from '../custom/LoadingView';
import Slider from '../custom/Slider';
import { useTranslation } from 'react-i18next';



const Home = (props) => {
  const {t,i18n} = useTranslation()
  const [data, setData] = useState('');
  const [ImagesAVT, setImagesAVT] = useState(false);

  const [widthPercent, setWidthPercent] = useState();
  const [widthNoPercent, setWidthNoPercent] = useState();
  const [dataEducation, setDataEducation] = useState('');
  const [dataSkill, setDataSkill] = useState('');
  const [percent_cv, setPercent_cv] = useState('');

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (props.statusUser !== null) {
      if (props.statusUser === 1) {
        setImagesAVT(true);

        setData(props.dataUser);
        setPercent_cv(props.dataUser.percent_cv);

        const kq1 = (props.dataUser.percent_cv * 140) / 100;
        setWidthPercent(kq1);

        const kq2 = 140 - (props.dataUser.percent_cv * 140) / 100;
        setWidthNoPercent(kq2);
        setDataEducation(props.dataUser.qualifications);
        setDataSkill(props.dataUser.skills);
      } else {
        setTimeout(() => {
          Alert.alert('Thông báo', props.messageUser);
        }, 10);
      }
    } else if (props.errorUser !== null) {
      Alert.alert('Thông báo', props.errorUser);
    }
  }, [props.statusUser]);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      props.navigation.addListener('focus', async () => {
        props.infoUserAction({
          user_id: jsonValue != null ? JSON.parse(jsonValue) : null,
          lang_code: '',
          emp_id: '',
          is_app_cv: 1,
        });
      });
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

  //========================
  const onEducation = () => {
    if (dataEducation.length === 0) {
      props.navigation.navigate('AddEducationContainer');
    } else if (dataEducation.length > 0) {
      props.navigation.navigate('ListEducationContainer');
    }
  };
  const onSkill = () => {
    if (dataSkill.length === 0) {
      props.navigation.navigate('AddExperiencesContainer');
    } else if (dataEducation.length > 0) {
      props.navigation.navigate('ListExperienContainer');
    }
  };

  //==========================
  const onShare = async (item) => {
    try {
      const result = await Share.share({
        message: item,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  //=================================
  const onPressVn = () => {
    console.log('123');
     
    i18n.changeLanguage('vn')

    // this.props.i18n.changeLanguage('en')
  };
  const onPressEn = () => {
    i18n.changeLanguage('en');

    // this.props.i18n.changeLanguage('en')
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      {props.loadingUser && <LoadingView />}

      <Header
        isShowMenu
        onPressMenu={() => props.navigation.openDrawer()}
        isShowRight
        onPressRightVN={() => onPressVn()}
        onPressRightEN={() => onPressEn()}
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 30,
            paddingTop: 50,
          }}>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              height: screenWidth * 0.7,
              width: screenWidth * 0.8,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              alignItems: 'center',
            }}>
            {ImagesAVT === false ? (
              <Image
                source={require('../../res/image/img/avatar.png')}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode: 'cover',
                  borderRadius: 100,
                  borderColor: '#FA8C16',
                  borderWidth: 1,

                  bottom: '85%',
                  position: 'absolute',
                  flex: 0.5,
                }}
              />
            ) : (
              <Image
                source={{uri: data.profile_image}}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode: 'cover',
                  borderRadius: 100,
                  borderColor: '#FA8C16',
                  borderWidth: 1,

                  bottom: '85%',
                  position: 'absolute',
                  flex: 0.5,
                }}
              />
            )}

            <View
              style={{
                marginTop: 55,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <Text style={{fontSize: 25, fontWeight: '700'}}>{data.name}</Text>

              <View
                style={{
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <TouchableOpacity style={{}}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={require('../../res/image/img/icon_restore_purcharse.png')}
                  />
                </TouchableOpacity>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 17,
                    alignSelf: 'center',
                    textAlign: 'center',

                    color: '#FA8C16',
                    width: '40%',
                  }}>
                  {data.resume_title}
                </Text>
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    // onPressVn('vn')
                    // console.log('123');
                    Linking.openURL(data.link_web);
                  }}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={require('../../res/image/img/icon_link_website.png')}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{marginTop: 10}}>
                {t('Mức độ hoàn thiện CiVi')} : {percent_cv}%
              </Text>
              <Slider
                kq1={widthPercent === undefined ? 0 : widthPercent}
                kq2={widthPercent === undefined ? 140 : widthNoPercent}
              />

              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  marginTop: 10,
                  borderColor: '#E6E7E9',
                }}>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Liên kết của ban
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      borderRadius: 10,
                      width: '90%',
                      backgroundColor: '#E8E8E8',
                    }}>
                    <Text
                      numberOfLines={3}
                      style={{
                        alignSelf: 'flex-start',
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                      }}>
                      {data.link_web}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      onShare(data.link_web);
                    }}>
                    <Image
                      style={{height: 30, width: 30}}
                      source={require('../../res/image/img/new_icon_yourr_resume_link.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 30, marginVertical: 20}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ResumeHomeContainer')}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
              paddingVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_resume_title.png')}
              />
              <Text style={{marginLeft: 10}}>Tiêu đề Civi</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ContactHomeContainer')}
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_contact_information.png')}
              />
              <Text style={{marginLeft: 10}}>Thông tin liên lạc</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // BasicInfoComponent
            onPress={() => props.navigation.navigate('BasicsInfoContainer')}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
              paddingVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_basic_information.png')}
              />
              <Text style={{marginLeft: 10}}>Thông tin xin việc</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            // LanguageComponent
            onPress={() => props.navigation.navigate('ListLanguageContainer')}
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/translate.png')}
              />
              <Text style={{marginLeft: 10}}>Ngôn ngữ</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onEducation()}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
              paddingVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/new_icon_education.png')}
              />
              <Text style={{marginLeft: 10}}>Trình độ học vấn</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onSkill()}
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/new_icon_experiences.png')}
              />
              <Text style={{marginLeft: 10}}>Kinh nghiệm làm việc</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SkillsContainer')}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#BFBFBF',
              paddingVertical: 15,
            }}>
            <View
              style={{flexDirection: 'row', flex: 0.8, alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/new_icon_skills.png')}
              />
              <Text style={{marginLeft: 10}}>Kỹ năng</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 0.2,
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../res/image/img/icon_empty_tick.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 60,
          }}>
          <TouchableOpacity
            style={{
              width: screenWidth / 2,
              height: 50,
              backgroundColor: '#FA8C16',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 13,
            }}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
              Xuất PDF
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
