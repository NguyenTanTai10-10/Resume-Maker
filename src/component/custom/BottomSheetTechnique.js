import React, {
    useState,
    useImperativeHandle,
    forwardRef,
    useEffect,
  } from 'react';
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
    TextInput,
    KeyboardAvoidingView,
  } from 'react-native';
  import Images from '../../res/image';
  import Sizes from '../../utils/Sizes';
  
  const BottomSheetTechnique = forwardRef((props, ref) => {
    // console.log('123',props.data);
    const [show, setShow] = useState(false);
    const [selectItem, setSelectItem] = useState('');
    const time = 300;
    const modalHeight = props.modalHeight;
    const animation = new Animated.Value(modalHeight);
    // console.log(props);
  
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
    
    const renderItems = ({item, index}) => {
      
      
      return (
        <TouchableOpacity
        key={item.id}
          onPress={() => {
            // props.onPress();
            setSelectItem(item.term);
            props.OnChooseTech_id(item.id)
            props.OnChooseTech(item)
            
  
            setShow(false);
          }}
          style={{
            padding: Sizes.h16,
            borderBottomWidth: 1,
            borderColor: '#F5F5F5',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>{item.term}</Text>
          {selectItem === item.term ? (
            <Image
              source={require('../../res/image/img/checked.png')}
              style={{width: Sizes.s30, height: Sizes.s30, resizeMode: 'contain'}}
            />
          ) : null}
        </TouchableOpacity>
      );
    };
    useEffect(() => {
      // console.log('show===', show);
      show ? slideUp() : onHide();
    }, [show]);
  
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <Modal
          visible={show}
          transparent
          statusBarTranslucent
          animationType="fade">
          <TouchableWithoutFeedback onPress={onHide}>
            <View style={styles.container}>
              <TouchableWithoutFeedback>
                <Animated.View
                  style={[
                    styles.modal,
                    {height: modalHeight, transform: [{translateY: animation}]},
                  ]}>
                  <View style={styles.title}>
                    <Text style={{fontSize: 17}}>{props.title}</Text>
                  </View>
  
                  <FlatList
                    data={props.data}
                    renderItem={renderItems}
                    keyExtractor={(item, index) => String(index)}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </KeyboardAvoidingView>
    );
  });
  
  export default BottomSheetTechnique;
  BottomSheetTechnique.defaultProps = {
    modalHeight: Dimensions.get('window').height * 0.4,
    data: [],
    onPressTime: () => {},
    onPressSession: () => {},
    OnChooseTech_id:() => {},
    OnChooseTech:()=>{}
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
      height: Sizes.s80,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#E6E7E9',
    },
  });
  