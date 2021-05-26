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

const DatetimePicker = (props) => {
    console.log(props.title);
    useEffect(() => {
        setDateStart(props.title)
       
    }, [])
    
    
  const [date, setDate] = useState(new Date());
  const [color, setColor] = useState(false);
  const [minDate, setMinDate] = useState(new Date());

  const [DateStart, setDateStart] = useState('');

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
      console.log(selectedDate);
    const DayStart = formatDate(selectedDate);
    const kq = formatDate(selectedDate);
    // console.log('DayStart=======', DayStart);
    setShow(Platform.OS === 'ios');
    setDateStart(DayStart);
    setMinDate(selectedDate);
    setDate(selectedDate);
    setColor(true);
    props.chooseDay(kq);
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const formatDate = (dateChooose) => {
      
    const h = `${dateChooose.getFullYear()}`;
    const m = `0${dateChooose}`.slice(-2);
    console.log('1234==',dateChooose.slice(-4))
    const s = `0${dateChooose.getDay()}`.slice(-2);
    return `${h}-${m}-${s}`;
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
            }}><Image
          source={require('../../res/image/img/iconbirthday.png')}
          style={{height: 35, width: 35, resizeMode: 'contain'}}
        />
        {DateStart === 'Ngày sinh' ? (
          <Text style={{marginLeft: 15, color: '#BFBFBF'}}>{DateStart}</Text>
        ) : (
          <Text style={{marginLeft: 15, color: 'black'}}>{DateStart}</Text>
        )}</View>
        { props.ClearBirthday &&   <TouchableOpacity
        onPress={()=>props.onClearBirthDay()}
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
        </TouchableOpacity>}
        
      
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          maximumDate={new Date()}
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatetimePicker;
