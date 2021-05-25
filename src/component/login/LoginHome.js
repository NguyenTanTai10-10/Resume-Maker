import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Images from '../../res/image';
import Header from '../custom/Header';
import {screenHeight, screenWidth} from '../../res/style/theme';

const LoginHome = (props) => {
  const [Check, setCheck] = useState(false);

  const [username, setUsername] = useState(' ');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('1');
  const [registrationIds, setRegistrationIds] = useState('');
  const [FacebookId, setFacebookId] = useState('');
  const [GoogleId, setGoogleId] = useState('');
  const onPressLogin = () => {
    if (username === '') {
      Alert.alert('Lưu ý', 'Bạn phải nhập đầy đủ thông tin đăng nhập');
    } else {
      props.loginAction({
        email: username,
        password: password,
        userType: userType,
        registrationIds: registrationIds,
        FacebookId: FacebookId,
        GoogleId: GoogleId,
      });
    }
  };
  useEffect(() => {
    if (props.status !== null) {
      console.log('(this.props.status==', props.status);

      if (props.status === 1) {
        props.navigation.replace('Drawers');
      } else {
        setTimeout(() => {
          Alert.alert('Thông báo', props.message);
        }, 10);
      }
    }
  }, [props.status]);
  useEffect(() => {
    if (props.statusEmail !== null) {
      setCheck(true);
    } else if (props.errorEmail !== null) {
      Alert.alert(props.errorEmail);
    }
  }, [props.statusEmail]);

  useEffect(() => {
    if (emailValidation(username)) {
          props.checkEmailAction({email: username});
        }
    
  }, [username])


  const onChangeText = (text) => {
    setUsername(text);
   
  };
  const emailValidation = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header isShowBack onPressBack={() => props.navigation.goBack()} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../res/image/img/resumeicon.png')}
          style={{height: 120, width: 120}}
          resizeMode="contain"
        />

        <Text
          style={{
            fontSize: 30,
            color: '#FA8C16',
            fontWeight: '700',
            marginTop: 30,
          }}>
          Login
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 30,
            marginTop: 10,
          }}>
          <Image
            source={require('../../res/image/img/iconemail.png')}
            style={{height: 40, width: 40}}
          />
          <TextInput
            placeholder="Email"
            onChangeText={(text) => {
              onChangeText(text);
            }}
            style={{width: '70%'}}></TextInput>
        </View>
        {Check === true ? (
          <Text
            style={{
              color:
                props.messageEmail === 'email đã được đăng ký'
                  ? 'red'
                  : '#2EB553',
            }}>
            {props.messageEmail}
          </Text>
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: '#FA8C16',
            borderBottomWidth: 2,
            marginHorizontal: 30,
            paddingVertical: 8,
            marginTop: 10,
          }}>
          <Image
            source={require('../../res/image/img/padlock.png')}
            style={{height: 35, width: 35}}
          />
          <TextInput
            placeholder="Mật khẩu"
            // onChange={(text)=>{onChangeText()}}
            style={{width: '70%'}}></TextInput>
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={() => {
              onPressLogin();
            }}
            style={{
              borderRadius: 20,
              backgroundColor: '#FA8C16',
              height: 50,
              width: screenWidth / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.ic_facebook}
              style={{height: 50, width: 50}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.google_png}
              style={{height: 50, width: 50}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
              width: 60,
            }}>
            <Image
              source={require('../../res/image/img/apple(4).png')}
              style={{height: 50, width: 50}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress={()=>props.navigation.navigate('ListCVContainer')}
        
        style={{marginTop: 20}}>
          <Text>Create a new account</Text>
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <Text>Forget password</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginHome;
