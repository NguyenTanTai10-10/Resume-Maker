import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import Images from '../../res/image';
import Header from '../custom/Header';
import {screenHeight, screenWidth} from '../../res/style/theme';
import LoadingView from '../custom/LoadingView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
GoogleSignin.configure({
  webClientId:
    '585809866706-f7ohvdh2of7v48u6su4v7gud050t122o.apps.googleusercontent.com',
});

const LoginHome = (props) => {
  const [initializing, setInitializing] = useState(true);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChang);
    return subscriber; // unsubscribe on unmount
  }, []);
  
  const [userId, setUserId] = useState();
  const onAuthStateChang=(user) =>{
    console.log('====================================');
      console.log('user2',user);
      console.log('====================================');
    
    if(user !== null){
      props.loginAction({
      email: user.email,
      password: '',
      userType: 1,
      registrationIds: '',
      FacebookId: '',
      GoogleId: user.uid,
    });
    }
    else{
      console.log('====================================');
      console.log('error2');
      console.log('====================================');
    }
    
    if (initializing) setInitializing(false);
    
  }
  const OnPessGG = async() => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential2 = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential2);
  };
  const {t} = useTranslation();
  const [clearPassword, setClearPassword] = useState(false);
  const [clearUser, setClearUser] = useState(false);
  const [saveLogin, setSaveLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [Check, setCheck] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('1');
  const [registrationIds, setRegistrationIds] = useState('');
  const [FacebookId, setFacebookId] = useState('');
  const [GoogleId, setGoogleId] = useState('');
  const onPressLogin = () => {
    if (
      username === '' ||
      password === '' ||
      password.trim() === '' ||
      username.trim() === ''
    ) {
      Alert.alert(t('Lưu ý'), t('Bạn phải nhập đầy đủ thông tin đăng nhập'));
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
  const SaveLogin = async () => {
    if (saveLogin) {
      try {
        const jsonValue = JSON.stringify({
          username: username,
          password: password,
        });
        await AsyncStorage.setItem('@saveLogin', jsonValue);
      } catch (e) {
        // saving error
      }
    }
  };
  const onPressSaveLogin = async() => {
    if (saveLogin=== false) {
      setSaveLogin(!saveLogin) 
      try {
        await AsyncStorage.removeItem('@saveLogin');
      } catch (e) {
        // remove error
      }
    }
    else if(saveLogin===true){
      setSaveLogin(!saveLogin)
    }
    

      
    
  };

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@saveLogin');
      if (jsonValue != null) {
        var data = JSON.parse(jsonValue);
        setUsername(data.username);
        setPassword(data.password);
        setSaveLogin(true);

      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    console.log(props.status);
    if (props.status !== null) {
      if (props.status === 1) {
        SaveLogin();
        storeData(props.data.jobseeker_id);
        // Alert.alert(t(props.message));
      } else if (props.status === 0) {
        Alert.alert(t(props.message));
      }
    } else if (props.error !== null) {
      Alert.alert(t(props.error));
    }
  }, [props.status]);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@jobseeker_id', jsonValue);
      await Alert.alert(
        t(props.message),
        '',
        [
          {
            text: 'OK',
            onPress: async () => {
              props.navigation.replace('Drawers');
            },
          },
        ],
        {cancelable: false},
      );
      // await props.navigation.replace('Drawers');
    } catch (e) {
      // saving error
    }
  };

  const onChangeUser = (text) => {
    setClearUser(true)
    setUsername(text);
  };
  const onChangePass = (text) => {
    setClearPassword(true);
    setPassword(text);
  };
  const onClearPassword =()=>{
    setPassword('')
    setClearPassword(false)
  }
  const onClearUser =()=>{
    setUsername('')
    setClearUser(false)
  }

  return (
    <View style={{flex: 1}}>
      {props.loading && <LoadingView />}
     
    </View>
  );
};

export default LoginHome;
