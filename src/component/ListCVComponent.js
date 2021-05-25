import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Images from '../res/image';
import {screenWidth} from '../res/style/theme';
import Sizes from '../utils/Sizes';
import Header from './custom/Header';
import LoadingView from './custom/LoadingView';
import StatusBarView from './custom/StatusBarView';

const ListCVComponent = (props) => {
 
  const [listData, setListData] = useState('')
  useEffect(() => {
    if (props.status !== null) {
      if (props.status === 1) {
        // console.log('dtatatatatat===',props.data);
        setListData(props.data)
      } else {
        setTimeout(() => {
          Alert.alert('Thông báo', props.message);
        }, 10);
      }
    }
  }, [props.status]);
  useEffect(() => {
    props.listCvAction({template_cv_id:''});
  }, []);
  

  const renderItem = (item) => {
    //   console.log('dtatatatatat===',item);
    return (
      <TouchableOpacity 
      onPress={()=>{
           props.navigation.navigate('ResumeTitleContainer',{id :item.item.template_cv_id})
      }}
      style={{marginHorizontal: 5, marginVertical: 15}}>
        <Image
          style={{height: 170, width: screenWidth / 3.5}}
          source={{uri:item.item.template_cv_image}}
        />
        <Text style={{alignSelf: 'center'}}>Basic</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
        {props.loading && <LoadingView/>}
      <StatusBarView />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
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
        <Text style={{alignSelf: 'center', fontSize: 20}}>
          Please select a CV form to export
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center',flex: 1 }}>
        <ScrollView style={{flex: 1}} nestedScrollEnabled showsHorizontalScrollIndicator={false}>
          <FlatList
            data={listData}
            keyExtractor={(item, index) => String(index)}
            renderItem={renderItem}
            numColumns={3}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ListCVComponent;
