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
import {useTranslation} from 'react-i18next';

const DatetimeEnd = (props) => {
  const {t} = useTranslation();
  useEffect(() => {
    setTypes(chosseType(props.type));
  }, []);
  useEffect(() => {
    setDateStart(props.title);
  }, [props.title]);
  const chosseType = (item) => {
    switch (item) {
      case '0':
        return t('Năm học (đến)');
        break;
      case '1':
        return t('Thời gian nghỉ việc');
        break;
    }
  };
  const [date, setDate] = useState(new Date(2000, 1));
  const [color, setColor] = useState(false);
  const [ClearBirthday, setClearBirthday] = useState(false);
  const [minDate, setMinDate] = useState(new Date());

  const [DateStart, setDateStart] = useState('');
  const [types, setTypes] = useState('');

  const [mode, setMode] = useState('');
  const [show, setShow] = useState(false);
  const [checkNowDate, setCheckNowDate] = useState(false);

  const onChange = async (event, selectedDate) => {
    const DayStarts = moment(selectedDate).format('L');
    const kq = formatDate(DayStarts);
    setShow(Platform.OS === 'ios');
    setDateStart(kq);
    setColor(true);
    setClearBirthday(true);

    props.OnChooseDayEnd(kq);
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('');
  };
  const onPressDate = async () => {
    setDateStart(types);
    setClearBirthday(false);
    props.OnChooseDayEnd(types);
  };
  const formatDate = (dateChooose) => {
    const m = `${dateChooose}`.slice(0, 2);
    const y = `${dateChooose}`.slice(6, 10);
    return `${m}-${y}`;
  };
  const onNowDate = async () => {
    if (checkNowDate === true) {
      props.OnChooseDayEnd(t('Thời gian nghỉ việc'));
      props.OnNowDate(false)
    } else if (checkNowDate === false) {
      setClearBirthday(true)
      const x = moment(new Date()).format('L');

      props.OnChooseDayEnd(formatDate(x));
      props.OnNowDate(true)
    }
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
          {DateStart === types ? (
            <Text style={{marginLeft: 15, color: '#BFBFBF'}}>{DateStart}</Text>
          ) : (
            <Text style={{marginLeft: 15, color: 'black'}}>{DateStart}</Text>
          )}
        </View>
        {ClearBirthday && (
          <TouchableOpacity
            onPress={() => {
              onPressDate();
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
      {props.type ==="1" && <TouchableOpacity
        onPress={async () => {
          await setCheckNowDate(!checkNowDate);
          await  onNowDate();
        }}
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginHorizontal: 80,
        }}>
        {checkNowDate === false ? (
          <Image
            source={require('../../res/image/img/stop.png')}
            style={{height: 17, width: 17, resizeMode: 'contain'}}
          />
        ) : (
          <Image
            source={require('../../res/image/img/check.png')}
            style={{height: 17, width: 17, resizeMode: 'contain'}}
          />
        )}

        <Text style={{alignSelf: 'center', marginLeft: 15}}>{t('Hiện nay')}</Text>
      </TouchableOpacity>}
      
    </View>
  );
};

export default DatetimeEnd;
