import React, {useState,useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import Images from '../res/image';
import {screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import Header from './custom/Header';
import StatusBarView from './custom/StatusBarView';

const ResumeTitleComponent = (props) => {
   useEffect(() => {
    setIdCV(props.route.params.id)
       console.log(props.route.params.id);

     
   }, [])

  const [title, setTitle] = useState('');
  const [idCV, setIdCV] = useState('');
  const [check, setCheck] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);

  const onChangeText = (text) => {
    if (text.length === 0 || text.trim() === '') {
      setTitle('');
    } else {
      setTitle(text.trim());
    }
  };
  const onUpdate = () => {
    if (title === null || title.trim() === '') {
      if (title === null || title.trim() === '') {
        setCheck(false);
        setErrorTitle(true);
      }
    } else {
      setCheck(true);
      setErrorTitle(false);
    }
  };

  return (
    <View style={{flex: 1}}>
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
          <Text style={{paddingHorizontal: Sizes.h32}}>{}</Text>
        </View>
      </View>

      <View
        style={{marginTop: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: '#2EB553'}}>Tiêu đề</Text>
      </View>
      <View style={{marginTop: 35}}>
        {errorTitle && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'red'}}>* Vui lòng nhập tiêu đề của bạn</Text>
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
            onChangeText={(text) => {
              onChangeText(text);
            }}
            placeholder="Tiêu đề 
                    "
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
              Cập nhập
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ContactContainer',{id :idCV , title:title });
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
              Tiếp tục
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
          }}>
          
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{props.navigation.navigate('ContactContainer')}}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',

            height: 50,
            width: (screenWidth * 0.7) / 2,

            borderRadius: 13,
          }}>
          <Text style={{color:'black'}}>Tiếp tục</Text>
          <Image
            source={require('../res/image/img/right-arrow.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResumeTitleComponent;
