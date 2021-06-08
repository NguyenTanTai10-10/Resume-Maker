import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Images from '../res/image';
import { screenWidth } from '../res/style/theme';
import Sizes from '../utils/Sizes';
import BottomSheetChoose from './custom/BottomSheetChoose';
import StatusBarView from './custom/StatusBarView';

const ListEducationComponent = (props) => {
  const [dataEducation, setDataEducation] = useState('');
  const [eductionId, setEductionId] = useState('');
  const modal = React.createRef();
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (props.statusUser !== null) {
      if (props.statusUser === 1) {
        setDataEducation(props.dataUser.qualifications);
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

  const renderItem = (item) => {
    console.log(item);
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
              <Image
                source={require('../res/image/img/icondegree.png')}
                style={{height: 25, width: 25, resizeMode: 'contain'}}
              />
              <Text>Trình độ : </Text>
              <Text style={{marginLeft: 10}}>{item.item.qualification}</Text>
            </View>
            <TouchableOpacity
              onPress={async () => {
                 setEductionId(item.item.eduction_id);
                 modal.current.open();
              }}
              style={{
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../res/image/img/more(1).png')}
                style={{height: 25, width: 25, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={require('../res/image/img/iconspeci.png')}
              style={{height: 25, width: 25, resizeMode: 'contain'}}
            />
            <Text>Chuyên ngành : </Text>
            <Text style={{marginLeft: 10}}>{item.item.functional_role}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={require('../res/image/img/iconbirthday.png')}
              style={{height: 25, width: 25, resizeMode: 'contain'}}
            />
            <Text>Thời gian : </Text>
            <Text
              style={{
                marginLeft: 10,
              }}>{`${item.item.month_of_pass}/${item.item.year_of_pass} - ${item.item.month_of_end}/${item.item.year_of_end}`}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={require('../res/image/img/iconshool.png')}
              style={{height: 25, width: 25, resizeMode: 'contain'}}
            />
            <Text>Trường : </Text>
            <Text style={{marginLeft: 10}}>{item.item.institute}</Text>
          </View>
        </View>
      </View>
    );
  };
  //=====================
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
              }}
              onPress={() => {
                props.navigation.navigate('AddEducationContainer');
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
            data={dataEducation}
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
              style={{height: 35, width: 35, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
        <BottomSheetChoose
          onPressNavigation={() => {
            props.navigation.navigate('EditEducationContainer');
          }}
         
          ref={modal}
          title="Chỉnh sửa thông tin"
          data={eductionId}
          modalHeight={200}
        />
      </ScrollView>
    </View>
  );
};

export default ListEducationComponent;
