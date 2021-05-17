import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { colors } from '../../res/style/theme';

//import bỏ vào đầu
const StatusBarView = () => {
   return (
      <View>
         <SafeAreaView style={{ backgroundColor: '#FFD8BF' }} />
         <View style={{ height: StatusBar.currentHeight, backgroundColor: '#FFD8BF'}} />
         <StatusBar
            barStyle="light-content"
            backgroundColor={'transparent'}
            hidden={false}
            translucent={true}
         />
      </View>
   );
};

export default StatusBarView;