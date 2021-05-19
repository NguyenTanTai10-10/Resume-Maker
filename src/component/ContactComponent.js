import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import Images from '../res/image'
import { screenWidth } from '../res/style/theme'
import Sizes from '../utils/Sizes'
import ButtonChoose from './custom/ButtonChoose'
import StatusBarView from './custom/StatusBarView'

const ContactComponent = () => {
    const [check, setCheck] = useState(false)
    return (
        <View style={{ flex: 1 }}>
            <StatusBarView />
            <ScrollView style={{ flex: 1 }}>

            
            <View style={{}}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            left: 0,
                            height: Sizes.h95,
                            paddingHorizontal: Sizes.h32,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => props.navigation.goBack()}>
                        <Image source={Images.arrow} style={{
                            width: Sizes.s50,
                            height: Sizes.s50,
                        }} />
                    </TouchableOpacity>

                    <Image source={require('../res/image/img/iconnumber02.png')} style={{
                        width: Sizes.s140,
                        height: Sizes.s140,
                        resizeMode: 'contain'
                    }} />
                    <Text style={{ paddingHorizontal: Sizes.h32, }}>
                        { }
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#2EB553' }}>
                    Contact information
                </Text>
            </View>
            <View style={{ marginTop: 35, }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={require('../res/image/img/ic_facebook.png')} style={{ height: 60, width: 60, resizeMode: 'contain', borderRadius: 100, }} />
                    <Image source={require('../res/image/img/uploadavatar.png')} style={{ height: 30, width: 30, resizeMode: 'contain', borderRadius: 100, position: 'absolute', right: 170, top: 40 }} />



                </TouchableOpacity>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ color: 'red' }}>
                        * Vui lòng nhập đầy đủ họ và tên của bạn
                </Text>


                </View>

                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 100 }}>
                    <Image source={require('../res/image/img/iconfullname.png')} style={{ right: 15, height: 35, width: 35, resizeMode: 'contain' }} />
                    <TextInput

                        placeholder="Họ và tên"
                        style={{ width: '70%' }}>
                    </TextInput>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}><ButtonChoose /></View>



            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: 'red' }}>
                    * Vui lòng nhập đầy đủ ngày sinh của bạn
                </Text>


            </View>

            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 100 }}>
                <Image source={require('../res/image/img/iconbirthday.png')} style={{ right: 15, height: 35, width: 35, resizeMode: 'contain' }} />
                <TextInput

                    placeholder="Ngày sinh"
                    style={{ width: '70%' }}>
                </TextInput>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: 'red' }}>
                    * Vui lòng nhập đầy đủ họ và tên của bạn
                </Text>


            </View>

            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 100 }}>
                <Image source={require('../res/image/img/iconemail.png')} style={{ right: 15, height: 35, width: 35, resizeMode: 'contain' }} />
                <TextInput

                    placeholder="Email"
                    style={{ width: '70%' }}>
                </TextInput>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: 'red' }}>
                    * Vui lòng nhập đầy đủ họ và tên của bạn
                </Text>


            </View>

            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 100 }}>
                <Image source={require('../res/image/img/iconphonenumber.png')} style={{ right: 15, height: 35, width: 35, resizeMode: 'contain' }} />
                <TextInput

                    placeholder="Phone"
                    style={{ width: '70%' }}>
                </TextInput>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: 'red' }}>
                    * Vui lòng nhập đầy đủ họ và tên của bạn
                </Text>


            </View>

            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 100 }}>
                <Image source={require('../res/image/img/iconlocation.png')} style={{ right: 15, height: 35, width: 35, resizeMode: 'contain' }} />
                <TextInput

                    placeholder="Tỉnh/thành phố"
                    style={{ width: '70%' }}>
                </TextInput>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: 'red' }}>
                    * Vui lòng nhập đầy đủ họ và tên của bạn
                </Text>


            </View>

            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 100 }}>
                <Image source={require('../res/image/img/iconformofwork.png')} style={{ right: 15, height: 35, width: 35, resizeMode: 'contain' }} />
                <TextInput

                    placeholder="Địa chỉ"
                    style={{ width: '70%' }}>
                </TextInput>
            </View>








            <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                {check === false ? <TouchableOpacity

                    style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: screenWidth * 0.8 / 2, backgroundColor: '#FA8C16', borderRadius: 13 }}>
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', }}>
                        Cập nhập
                    </Text>
                </TouchableOpacity> :
                    <TouchableOpacity
                        onPress={() => { props.navigation.navigate('') }}
                        style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: screenWidth * 0.8 / 2, backgroundColor: '#2EB553', borderRadius: 13 }}>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', }}>
                            Tiếp tục
                </Text>
                    </TouchableOpacity>

                }


            </View>
            </ScrollView>

        </View>
    )
}

export default ContactComponent

