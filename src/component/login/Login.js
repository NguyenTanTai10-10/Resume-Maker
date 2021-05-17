import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import Images from '../../res/image'
import { screenHeight, screenWidth } from '../../res/style/theme'
import Sizes from '../../utils/Sizes'

import StatusBarView from '../custom/StatusBarView'

const Login = (props) => {
   // console.log('props===',props.navigation);
   return (
      <View>
         <StatusBarView />
         <ImageBackground style={{ width: screenWidth, height: screenHeight, justifyContent: 'center', alignItems: 'center' }}
            source={Images.bg_register}
         >
            <TouchableOpacity
               style={{ flexDirection: 'row', backgroundColor: '#4267b2', justifyContent: 'center', alignItems: "center", paddingRight: 10, width: "55%" }}
            onPress={() => props.navigation.navigate('HomeContainer')}
            >

               <Image source={Images.ic_facebook} style={{ height: 40, width: 40 }} resizeMode='contain' />
               <Text style={{ color: 'white', paddingLeft: 10, fontSize: Sizes.h30, }}>Sign in with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ flexDirection: 'row', backgroundColor: '#f44336', justifyContent: 'center', alignItems: "center", paddingRight: 10, width: "55%", marginTop: 10 }}
            
            >

               <Image source={Images.google_png} style={{ height: 40, width: 40 }} resizeMode='contain' />
               <Text style={{ color: 'white', paddingLeft: 10, fontSize: Sizes.h30, }}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ height:40, flexDirection: 'row', backgroundColor: 'black', justifyContent: 'center', alignItems: "center", paddingRight: 10, width: "55%", marginTop: 10 }}
            
            >

               <Image source={Images.apple} style={{ height: 35, width: 35 }} resizeMode='contain' />
               <Text style={{ color: 'white', paddingLeft: 10, fontSize: Sizes.h30, }}>Sign in with Apple</Text>
            </TouchableOpacity>

         </ImageBackground>
         
      </View>
   )
}

export default Login
