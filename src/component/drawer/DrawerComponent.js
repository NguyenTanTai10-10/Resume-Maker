import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Images from '../../res/image'
import StatusBarView from '../custom/StatusBarView'

const DrawerComponent = (props) => {
  return (
    <View style={{flex:1}}>
      <StatusBarView/>
      <View style={{flex:1}}>
        <View style={{flex:0.1, }}>
          <View style={{flexDirection:'row',flex:1}}>
            <View style={{flex:0.3 , justifyContent:'center', alignItems:'center'}}>
            <Image source={Images.ic_facebook} style={{ height: 60, width: 60,resizeMode:'cover',borderRadius: 100 , position:"absolute" , flex:0.5,}} />

            </View>
            <View style={{flex:0.7 ,justifyContent:'center', alignItems:'flex-start'}}>
              <Text style={{fontSize: 23,fontWeight: '700',}}>
                Cao Minh Phat
              </Text>
              <Text style={{color:'#FA8C16', fontSize: 15,}}>
                Developer
              </Text>
              <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#FF4D4F', borderRadius:20 , paddingHorizontal:10, paddingVertical:5, marginTop:5}}>
                <Text style={{color:'white'}}>
                  Restore Purchase
                </Text>
              </View>

            </View>
            

          </View>

        </View>
        <View style={{marginHorizontal:20,marginTop:20, flex:0.7}}>
          <Text style={{fontSize: 17,}}>
            ACCOUNT SETTING
          </Text>
          <TouchableOpacity style={{ alignItems:'center',flexDirection :'row',marginLeft:30, marginVertical:10}}>
          <Image style={{height:20, width:20 }} source={require('../../res/image/img/icon_edit_account.png')}/>
          <Text style={{marginLeft:15, fontSize: 12}}>
            EDIT ACCOUNT
          </Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems:'center',flexDirection :'row',marginLeft:30, marginVertical:10}}>
          <Image style={{height:25, width:25 }} source={require('../../res/image/img/icon_change_password.png')}/>
          <Text style={{marginLeft:15, fontSize: 12}}>
            CHANGE PASSWORD
          </Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems:'center',flexDirection :'row',marginLeft:30, marginVertical:10}}>
          <Image style={{height:25, width:25 }} source={require('../../res/image/img/icon_sns_connection.png')}/>
          <Text style={{marginLeft:15, fontSize: 12,}}>
            SNS CONNECTION
          </Text>

          </TouchableOpacity>
          <Text style={{fontSize: 17,marginTop:15}}>
            SETTING
          </Text>
          <TouchableOpacity style={{ alignItems:'center',flexDirection :'row',marginLeft:30, marginVertical:10}}>
          <Image style={{height:25, width:25 }} source={require('../../res/image/img/icon_rating_app.png')}/>
          <Text style={{marginLeft:15, fontSize: 12}}>
            RETING APP
          </Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems:'center',flexDirection :'row',marginLeft:30, marginVertical:10}}>
          <Image style={{height:25, width:25 }} source={require('../../res/image/img/icon_send_feedback.png')}/>
          <Text style={{marginLeft:15, fontSize: 12}}>
            SEND FEEBACK
          </Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems:'center',flexDirection :'row',marginLeft:30, marginVertical:10}}>
          <Image style={{height:25, width:25 }} source={require('../../res/image/img/icon_privacy_policy.png')}/>
          <Text style={{marginLeft:15, fontSize: 12}}>
            PRIVACYPOLICY
          </Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems:'center',flexDirection :'row',marginLeft:30, marginVertical:10}}>
          <Image style={{height:25, width:25 }} source={require('../../res/image/img/icon_term_and_condition.png')}/>
          <Text style={{marginLeft:15, fontSize: 12}}>
            TERM AND CONDITION
          </Text>

          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:15}} onPress={()=>{
             props.logoutAction();
           props.navigation.replace('LoginHomeContainer')
          }
         }>
          <Text style={{fontSize: 17,}}>
            LOGOUT
          </Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}

export default DrawerComponent
