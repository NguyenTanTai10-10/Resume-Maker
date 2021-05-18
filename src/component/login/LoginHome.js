import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import Images from '../../res/image'
import Header from '../custom/Header'
import { screenHeight, screenWidth } from '../../res/style/theme'

const LoginHome = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Header
                isShowBack
                onPressBack={() => props.navigation.goBack()}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../res/image/img/resumeicon.png')} style={{height:120, width:120}} resizeMode="contain" />

                
                <Text style={{fontSize:30,color:'#FA8C16',fontWeight:"700",marginTop:30}}>
                    Login
            </Text>
                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 30 , marginTop:10}}>
                    <Image source={require('../../res/image/img/iconemail.png')} style={{ height: 40, width: 40 }} />
                    <TextInput
                        placeholder="Email"
                        style={{ width: '70%' }}>

                    </TextInput>



                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', borderBottomColor: "#FA8C16", borderBottomWidth: 2, marginHorizontal: 30, paddingVertical: 8, marginTop: 10 }}>
                    <Image source={require('../../res/image/img/padlock.png')} style={{ height: 35, width: 35 }} />
                    <TextInput
                        placeholder="Email"
                        style={{ width: '70%' }}>

                    </TextInput>



                </View>
                <View style={{ marginTop: 20 }}>

                    <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#FA8C16', height: 50, width: screenWidth / 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                            Log in
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row' }}>


                    <TouchableOpacity style={{  height: 60, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                        
                    <Image source={Images.ic_facebook} style={{ height: 50, width: 50 }} resizeMode='contain' />

                    </TouchableOpacity>
                    <TouchableOpacity style={{  height: 60, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Images.google_png} style={{ height: 50, width: 50 }} resizeMode='contain' />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 60, width: 60,}}>
                    <Image source={require('../../res/image/img/apple(4).png')} style={{ height: 50, width: 50 }} resizeMode='contain' />

                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, }}>
                    <Text>
                        Create a new account
                    </Text>
                </View>
                <View style={{ marginTop: 20, }}>
                    <Text>
                        Forget password
                    </Text>
                </View>

            </View>

        </View>
    )
}

export default LoginHome
