import React, { useState, useEffect } from 'react';
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
    
    const [date, setDate] = useState(new Date());
    const [color, setColor] = useState(false);
    const [minDate, setMinDate] = useState(new Date());

    const [DateStart, setDateStart] = useState(props.title);

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const DayStart = moment(selectedDate).format('L');
        // console.log('DayStart=======', DayStart);
        setShow(Platform.OS === 'ios');
        setDateStart(DayStart);
        setMinDate(selectedDate)
        setDate(selectedDate)
        setColor(true)

    };

    const showMode = (currentMode) => {
        setShow(!show);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    return (
        <View>
            <TouchableOpacity
                onPress={() => { showDatepicker() }}
                style={{ marginTop:10,flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 80 }}>
                <Image source={require('../../res/image/img/iconbirthday.png')} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
                {color === false ? <Text


                    style={{ marginLeft: 15, color: '#BFBFBF' }}>
                    {DateStart}
                </Text> :
                    <Text


                        style={{ marginLeft: 15, }}>
                        {DateStart}
                    </Text>}
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
    )
}

export default DatetimePicker
