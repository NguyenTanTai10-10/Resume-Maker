import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform,
  
} from 'react-native';


import Images from '../../res/image';
import {colors, screenWidth, screenHeight} from '../../res/style/theme';
import Sizes from '../../utils/Sizes';
import StatusBarView from './StatusBarView';

const Header = props => {
 
  // console.log('props===',props);
  const iconBack = () => (
    <TouchableOpacity
      
      style={styles.iconBack}
      onPress={() => props.onPressBack()}>
      <Icon name="arrow-left" size={Sizes.s40} color={colors.white} />
    </TouchableOpacity>
  );
  const iconMenu = () => (
    <TouchableOpacity
      
      style={styles.iconBack}
      onPress={() => props.onPressMenu()}>
      <Icon name="bars" size={Sizes.s40} color={colors.white} />
    </TouchableOpacity>
  );
  const iconRight = () => (
    <TouchableOpacity
      style={{
        width: Sizes.s80,
        height: Sizes.s80,
        marginHorizontal: Sizes.s20,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
      onPress={() => props.iconRight()}>
        
        <Icon name="plus-circle" size={Sizes.s50} color={colors.white} />
      
    </TouchableOpacity>
  );
  
  const textRight = () => (
    <TouchableOpacity
      
      style={{ marginHorizontal: Sizes.s20,
      width: Sizes.s80,
        height: Sizes.s80,
        justifyContent: 'center',
        alignItems: 'center',}}
      onPress={() => props.onPressNavigate()}>
      <Text  style={{color:'white', fontSize:Sizes.h34 ,fontWeight: '700',}} >
        abc
      </Text>
    </TouchableOpacity>
  );
  //////////////////////////////////
  return (
    <View>
      
      <StatusBarView />
      {/* <View style={styles.container}> */}
      <ImageBackground
        source={Images.ic_header_salary}
        style={{
          height: Platform.OS === 'ios' ? Sizes.s100 : Sizes.s110,

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // flex: 3,
          // flex:1
        }}>
        <View style={{justifyContent: 'center', alignItems: 'flex-start' , flex:0.2}}>
          {props.isShowMenu ? iconMenu() : null}
          {props.isShowBack ? iconBack() : null}
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center' , flex:0.6}}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'flex-end' ,flex:0.2}}>
          {props.isShowImage ? images(props.image) : null}
          {/* isShowRight */}
          {props.isShowRight ? iconRight() : null}
          
          
          

          {props.isShowTextRight ? textRight() : null}
        </View>
      </ImageBackground>
      {/* </View> */}
    </View>
  );
};

export default Header;
Header.defaultProps = {
  onPressBack: () => {},
  onPressMenu: () => {},
  iconRight :()=>{},
  onPressNavigate:()=>{},
  onPressImage :()=>{}
};
const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? Sizes.s100 : Sizes.s110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor: '#bb64a1',
    // borderColor: colors.gray,
    // borderBottomWidth: 1,
  },
  title: {
    fontSize: Sizes.h36,
    fontWeight: 'bold',
    color: colors.white,
  },
  iconBack: {
    position: 'absolute',
    left: 0,
    height: Sizes.h95,
    paddingHorizontal: Sizes.h32,
    justifyContent: 'center',
    alignItems: 'center',
     
  },
});