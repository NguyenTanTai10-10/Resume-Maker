import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import {set} from 'react-native-reanimated';
import Images from '../res/image';
import {screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import BottomSheetChoose from './custom/BottomSheetChoose';
import LoadingView from './custom/LoadingView';
import StatusBarView from './custom/StatusBarView';

const ListExperienComponent = (props) => {
  const [dataExp, setDataExp] = useState('');
  const [skill_Id, setSkill_Id] = useState('');
  const [eduction_Id, setEduction_Id] = useState('');
  const [user_Id, setUser_Id] = useState('');
  const modal = React.createRef();
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (props.statusUser !== null) {
      if (props.statusUser === 1) {
        setDataExp(props.dataUser.skills);
      } else {
        setTimeout(() => {
          Alert.alert('Thông báo', props.messageUser);
        }, 10);
      }
    } else if (props.errorUser !== null) {
      Alert.alert('Thông báo', props.errorUser);
    }
  }, [props.statusUser]);
  useEffect(() => {
    if (props.statusDelete !== null) {
      if (props.statusDelete === 1) {
        Alert.alert(
          ' Xóa Thành Công',
          '',
          [
            {
              text: 'Cancel',
              onPress: () => getData(),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                getData();
              },
            },
          ],
          {cancelable: false},
        );
      }
    } else if (props.errorDelete !== null) {
      Alert.alert('Thông báo', props.errorDelete);
    }
  }, [props.statusDelete]);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@jobseeker_id');
      setUser_Id(jsonValue != null ? JSON.parse(jsonValue) : null);
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

  const onDelete = (item) => {
    Alert.alert(
      'Bạn có muốn xóa không',
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
            props.deleteSkillAction({
              education_id: item,
              user_id: user_Id,
            });
          },
        },
      ],
      {cancelable: false},
    );
  };
  const OnNavigate = (item) => {
    setTimeout(() => {
      props.navigation.navigate('EditExpContainer', {
        Skill_Id: item,
      });
    }, 300);
  };

  const renderItem = (item) => {
    // console.log(item);
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 17,
                  fontWeight: '700',
                  color: 'gray',
                }}>
                {item.item.skill}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={async () => {
                  OnNavigate(item.item);
                }}
                style={{
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../res/image/img/edit.png')}
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => {
                  //  setSkill_Id(item.item);
                  // await setEduction_Id(item.item.skill_id);
                  onDelete(item.item.skill_id);
                }}
                style={{
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../res/image/img/trash.png')}
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text
              style={{marginLeft: 10, width: '50%', color: '#FFA39E'}}
              numberOfLines={1}>
              {item.item.company_name} -{' '}
              {`${item.item.working_time_month_begin}/${item.item.working_time_year_begin} - ${item.item.working_time_month_end}/${item.item.working_time_year_end}`}
            </Text>
          </View>

          <View style={{borderRadius: 10, borderColor: '#D9D9D9'}}>
            <Text numberOfLines={3} style={{marginLeft: 10, color: '#FFC069'}}>
              Công việc chính : {item.item.main_job}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  //=====================
  return (
    <View style={{flex: 1}}>
      {props.loadingUser && <LoadingView />}
      {props.loadingDelete && <LoadingView />}

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
                await props.logoutDeleteSkillAction();
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
              }}
              onPress={() => {
                props.navigation.navigate('AddExperiencesContainer');
              }}>
              <Image
                source={require('../res/image/img/add.png')}
                style={{
                  width: Sizes.s50,
                  height: Sizes.s50,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: 20}}>
          <FlatList
            data={dataExp}
            keyExtractor={(item, index) => String(index)}
            renderItem={renderItem}
          />
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
              await props.logoutDeleteSkillAction();
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
              style={{height: 30, width: 30, resizeMode: 'contain'}}
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
            <Text style={{color: 'black'}}>Tiếp tục</Text>
            <Image
              source={require('../res/image/img/right-arrow.png')}
              style={{height: 30, width: 30, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        {/* <BottomSheetChoose
          onPressNavigation={() => {
            OnNavigate()
          }}
          OnDelete={() => {
            onDelete();
          }}
          ref={modal}
          title="Chỉnh sửa thông tin"
          // data={eductionId}
          modalHeight={200}
        /> */}
      </ScrollView>
    </View>
  );
};

export default ListExperienComponent;
