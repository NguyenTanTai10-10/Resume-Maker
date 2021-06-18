import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {set} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

const DatetimePicker = (props) => {
  const {t}= useTranslation()
  useEffect(() => {
    setDateStart(props.title)
  
  }, [props.title])


  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@birthday');
  //     if (value !== null) {
  //       setDateStart(value);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const [date, setDate] = useState(new Date(2000, 1));
  const [color, setColor] = useState(false);
  const [ClearBirthday, setClearBirthday] = useState(false);
  const [minDate, setMinDate] = useState(new Date());

  const [DateStart, setDateStart] = useState('');

  const [mode, setMode] = useState('');
  const [show, setShow] = useState(false);

  const onChange = async (event, selectedDate) => {
    const DayStart = moment(selectedDate).format('L');
    const kq = formatDate(DayStart);
    setShow(Platform.OS === 'ios');
    setDateStart(DayStart);
    setColor(true);
    setClearBirthday(true);

    props.chooseDay(kq);
    // try {
    //   await AsyncStorage.setItem('@birthday', DayStart);
    // } catch (e) {
    //   // saving error
    // }
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('');
  };
  const onPressDate = async() => {
    setDateStart(t('Ngày sinh'));
    setClearBirthday(false);
    props.chooseDay(t('Ngày sinh'));
    // const deleteDate = 'Ngày sinh'
    // try {
    //   await AsyncStorage.setItem('@birthday', deleteDate);
    // } catch (e) {
    //   // saving error
    // }
  };
  const formatDate = (dateChooose) => {
    console.log('dateChooose===', dateChooose);

    const y = `${dateChooose}`.slice(-4);
    const d = `${dateChooose}`.slice(3, 5);
    const m = `${dateChooose}`.slice(0, 2);
    return `${y}-${d}-${m}`;
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          showDatepicker();
        }}
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
            source={require('../../res/image/img/iconbirthday.png')}
            style={{height: 35, width: 35, resizeMode: 'contain'}}
          />
          {DateStart === t('Ngày sinh') ? (
            <Text style={{marginLeft: 15, color: '#BFBFBF'}}>{DateStart}</Text>
          ) : (
            <Text style={{marginLeft: 15, color: 'black'}}>{DateStart}</Text>
          )}
        </View>
        {ClearBirthday && (
          <TouchableOpacity
            onPress={() => {
              onPressDate()
            }}
            style={{
              height: 30,
              width: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../res/image/img/icon_close.png')}
              style={{height: 15, width: 15, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      {show && (
        <DateTimePicker
        
          maximumDate={new Date()}
          testID="dateTimePicker"
          value={date}
          mode={mode}
          // is24Hour={true}
          // display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatetimePicker;
