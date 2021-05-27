import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {screenWidth} from '../../res/style/theme';

export default class ButtonChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrButton: ['1', '2'],
      select: '1',
    };
  }
  render() {
    const {arrButton, select} = this.state;
    return (
      <View>
        <View style={{paddingTop: 10}}>
          <View
            style={[
              {
                height: 40,
                width: screenWidth / 2,
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 20,
                borderWidth: 2,
                borderColor: 'white',
              },
              //    select===e && {boder}
            ]}>
            {arrButton.map((e, index) => (
              <TouchableOpacity
                onPress={
                  () => {
                    this.setState({select: e}); this.props.OnGender(e);
                  }
                  // console.log(index)
                }
                key={index}
                style={[
                  styles.btnFromMeToMe,
                  select === e && styles.btnFromMeToMeActive,
                  {
                    //   borderRadius:
                    //     index === 0 ? (select === e ? 20 : 20) : 0,
                    //   borderBottomLeftRadius:
                    //     index === 0 ? (select === e ? 20 : 0) : 0,
                    // backgroundColor: 'blue',
                    //   borderTopRightRadius:
                    //     index === 1 ? (select === e ? 20 : 0) : 0,
                    //   borderBottomRightRadius:
                    //     index === 1 ? (select === e ? 20 : 0) : 0,
                    // borderRadius:
                    // index === 1 ? (select === e ? 20 : 0) : 0,
                  },
                ]}>
                {e === '1' ? (
                  <Text
                    style={[
                      {
                        // fontSize: fonts.textTitleTab,
                        color: 'black',
                        fontSize: 15,
                      },
                      select === e && {color: 'white', fontWeight: '700'},
                    ]}>
                    Nam
                  </Text>
                ) : (
                  <Text
                    style={[
                      {
                        // fontSize: fonts.textTitleTab,
                        color: 'black',
                        fontSize: 15,
                      },
                      select === e && {color: 'white', fontWeight: '700'},
                    ]}>
                    Nữ
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btnFromMeToMe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  btnFromMeToMeActive: {
    backgroundColor: '#FA8C16',
    borderRadius: 20,
  },
});
