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

const Header = (props) => {
  // console.log('props===',props);
  const iconBack = () => (
    <TouchableOpacity
      style={styles.iconBack}
      onPress={() => props.onPressBack()}>
      <Image
        source={Images.arrow}
        style={{width: Sizes.s50, height: Sizes.s50}}
      />
    </TouchableOpacity>
  );
  const iconMenu = () => (
    <TouchableOpacity
      style={styles.iconBack}
      onPress={() => props.onPressMenu()}>
      <Image
        source={require('../../res/image/img/list.png')}
        style={{width: Sizes.s50, height: Sizes.s50}}
      />
    </TouchableOpacity>
  );
  const iconRight = () => (
    <View
      style={{
        height: Sizes.s80,
        marginHorizontal: Sizes.s20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity onPress={() => props.onPressRightVN()}>
        <Image
          source={require('../../res/image/img/flag_vietnam.png')}
          style={{width: Sizes.s50, height: Sizes.s50}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPressRightEN()}>
        <Image
          source={require('../../res/image/img/flag_english.png')}
          style={{width: Sizes.s50, marginLeft: 10, height: Sizes.s50}}
        />
      </TouchableOpacity>
    </View>
  );

  const textRight = () => (
    <TouchableOpacity
      style={{
        marginHorizontal: Sizes.s20,
        width: Sizes.s80,
        height: Sizes.s80,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => props.onPressNavigate()}>
      <Text style={{color: 'white', fontSize: Sizes.h34, fontWeight: '700'}}>
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            flex: 0.2,
          }}>
          {props.isShowMenu ? iconMenu() : null}
          {props.isShowBack ? iconBack() : null}
        </View>

        <View
          style={{justifyContent: 'center', alignItems: 'center', flex: 0.6}}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View
          style={{justifyContent: 'center', alignItems: 'flex-end', flex: 0.2}}>
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
  onPressRightVN: () => {},
  onPressRightEN: () => {},
  onPressNavigate: () => {},
  onPressImage: () => {},
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
