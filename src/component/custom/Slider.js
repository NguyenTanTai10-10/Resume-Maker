import React, {useState} from 'react';
import {View, Text} from 'react-native';

const Slider = (props) => {
  
  const render = () => {
    return (
      <View style={{flexDirection: 'row', width: 140, borderRadius: 20}}>
        <View
          style={{
            height: 7,
            width: props.kq1,
            backgroundColor: '#FFC069',
          }}>
          <Text>{}</Text>
        </View>
        <View
          style={{
            height: 7,
            width: props.kq2,
            backgroundColor: '#8C8C8C',
          }}>
          <Text>{}</Text>
        </View>
      </View>
    );
  };

  return <View style={{borderRadius: 20, marginTop: 5}}>{render()}</View>;
};

export default Slider;
