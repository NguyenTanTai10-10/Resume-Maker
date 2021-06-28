import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Images from '../../res/image';
import Sizes from '../../utils/Sizes';

const BottomSheetDown = forwardRef((props, ref) => {
  const {t} = useTranslation();

  const [show, setShow] = useState(false);
  const [selectItem, setSelectItem] = useState('');
  const time = 300;
  const modalHeight = props.modalHeight;
  const animation = new Animated.Value(modalHeight);

  useImperativeHandle(ref, () => ({
    open: () => {
      onShow();
    },
    close: () => {
      onHide();
    },
  }));
  const slideUp = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: time,
      useNativeDriver: true,
    }).start();
  };
  const slideDown = () => {
    Animated.timing(animation, {
      toValue: modalHeight,
      duration: time,
      useNativeDriver: true,
    }).start();
  };
  const onShow = () => {
    setShow(true);
  };
  const onHide = () => {
    slideDown();
    setTimeout(() => {
      setShow(false);
    }, time);
  };

  useEffect(() => {
    show ? slideUp() : onHide();
  }, [show]);

  return (
    <Modal visible={show} transparent statusBarTranslucent animationType="fade">
      <TouchableWithoutFeedback onPress={onHide}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.modal,
                {height: modalHeight, transform: [{translateY: animation}]},
              ]}>
              <View style={styles.title}>
                <Text style={{color: '#FA8C16', fontWeight: '700'}}>
                  {props.title}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: Sizes.h16,
                  marginVertical: Sizes.h16,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    props.OnShare();
                  }}
                  style={{
                    padding: Sizes.h16,
                    borderWidth: 1,
                    backgroundColor: '#FA8C16',
                    width: '70%',
                    borderRadius: 6,
                    borderColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Chia sẽ</Text>
                  {/* {selectItem===item?<Image source={require("../../res/image/img/arrow-up.png")} style={{ width: Sizes.h16, height: Sizes.h16, resizeMode: 'contain' }} />:null} */}
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: Sizes.h16,
                  marginVertical: Sizes.h16,
                }}>
                <TouchableOpacity
                  onPress={async () => {
                    await onHide();
                    await props.OnDown();
                  }}
                  style={{
                    padding: Sizes.h16,
                    borderWidth: 1,
                    backgroundColor: '#FA8C16',
                    width: '70%',
                    borderRadius: 6,
                    borderColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Tải xuống</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

export default BottomSheetDown;
BottomSheetDown.defaultProps = {
  modalHeight: Dimensions.get('window').height * 0.4,
  data: [],
  onPress: () => {},
  OnShare: () => {},
  OnDown: () => {},
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: 'white',
    borderTopLeftRadius: Sizes.h24,
    borderTopRightRadius: Sizes.h24,
  },
  title: {
    height: Sizes.h65,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#F5F5F5',
  },
});
