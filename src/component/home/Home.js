import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView,  } from 'react-native'
import Images from '../../res/image'
import { screenWidth } from '../../res/style/theme'
import Header from '../custom/Header'
import Slider from '../custom/Slider'
// import Slider from '../custom/Slider'

const Home = (props) => {

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Header
        isShowMenu
        onPressMenu={() => props.navigation.openDrawer()}
        isShowRight
        onPressRightVN={() => console.log('VN')}
        onPressRightEN={() => console.log('EN')}
      />
      <ScrollView style={{flex: 1}}>

      
      <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 30,paddingTop:50, }}>
        <View style={{
          
          borderRadius: 10,
          backgroundColor: 'white',
          height: screenWidth *0.7,
          width: screenWidth * 0.8,

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          alignItems:'center'
          
        }}>
         
            <Image source={Images.ic_facebook} style={{ height: 80, width: 80,resizeMode:'cover',borderRadius: 100 , backgroundColor:'red',bottom:'85%',position:"absolute" , flex:0.5, backgroundColor: "red",}} />
          
          <View style={{marginTop:55,justifyContent: 'center', alignItems: 'center',marginHorizontal: 20, }}>
            <Text style={{fontSize:25, fontWeight:"700"}}>
              Cao Minh Phat
            </Text>
            
            <View style={{justifyContent: 'space-evenly', alignItems: 'center' ,flexDirection:'row',width:'100%' }}>
              
            <TouchableOpacity>
              <Image style={{height:30, width:30, right:40}} source={require('../../res/image/img/icon_restore_purcharse.png')}/>
            </TouchableOpacity>
             <Text style={{fontSize:17,alignSelf:'center' , color:'#FA8C16'}}>
              Developer
            </Text>
            <TouchableOpacity>
              <Image style={{height:30, width:30, left:40}} source={require('../../res/image/img/icon_link_website.png')}/>
            </TouchableOpacity>

            

            
           
            </View> 
            <Text style={{marginTop:10}}>
              Muc do hoan thien CV : 100%
            </Text>
            <Slider/>

            <View style={{borderRadius:10,borderWidth: 1,paddingHorizontal: 5, paddingVertical:5,marginTop:10 , borderColor:'#E6E7E9'}}> 
            <Text style={{alignSelf:'flex-start', fontSize:15, fontWeight: "700",}}>
              Your resume link
              
            </Text>
            <View style={{flexDirection:'row',}}>
              <View style={{borderRadius: 10,width:"90%",backgroundColor:'#E8E8E8'}}>
                <Text style={{alignSelf:'flex-start'  ,paddingHorizontal:5, paddingVertical:5}}>
            https://drive.google.com/drive/folders/1MO9PT30ZKFjumSdhBCMe9S996cTVZU5j
              
            </Text>
              </View>
              <TouchableOpacity>
                <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: 30,marginVertical:20 ,}}>
        <View style={{flexDirection:'row',borderBottomWidth:1, borderBottomColor:'#BFBFBF'}}>
          <View style={{flexDirection:'row',flex:0.8 ,alignItems:'center'}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
        <Text>Resume title</Text>
          </View>
          <View style={{justifyContent:"flex-end", alignItems:'flex-end',flex:0.2}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
          </View>
        </View>
        <View style={{flexDirection:'row', marginVertical:15,borderBottomWidth:1, borderBottomColor:'#BFBFBF'}}>
          <View style={{flexDirection:'row',flex:0.8 ,alignItems:'center'}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
        <Text>Resume title</Text>
          </View>
          <View style={{justifyContent:"flex-end", alignItems:'flex-end',flex:0.2}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
          </View>
        </View><View style={{flexDirection:'row',borderBottomWidth:1, borderBottomColor:'#BFBFBF'}}>
          <View style={{flexDirection:'row',flex:0.8 ,alignItems:'center'}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
        <Text>Resume title</Text>
          </View>
          <View style={{justifyContent:"flex-end", alignItems:'flex-end',flex:0.2}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
          </View>
        </View><View style={{flexDirection:'row',marginVertical:15,borderBottomWidth:1, borderBottomColor:'#BFBFBF'}}>
          <View style={{flexDirection:'row',flex:0.8 ,alignItems:'center'}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
        <Text>Resume title</Text>
          </View>
          <View style={{justifyContent:"flex-end", alignItems:'flex-end',flex:0.2}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
          </View>
        </View><View style={{flexDirection:'row',borderBottomWidth:1, borderBottomColor:'#BFBFBF'}}>
          <View style={{flexDirection:'row',flex:0.8 ,alignItems:'center'}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
        <Text>Resume title</Text>
          </View>
          <View style={{justifyContent:"flex-end", alignItems:'flex-end',flex:0.2}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
          </View>
        </View><View style={{flexDirection:'row',marginVertical:15,borderBottomWidth:1, borderBottomColor:'#BFBFBF'}}>
          <View style={{flexDirection:'row',flex:0.8 ,alignItems:'center'}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
        <Text>Resume title</Text>
          </View>
          <View style={{justifyContent:"flex-end", alignItems:'flex-end',flex:0.2}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
          </View>
        </View><View style={{flexDirection:'row',borderBottomWidth:1, borderBottomColor:'#BFBFBF'}}>
          <View style={{flexDirection:'row',flex:0.8 ,alignItems:'center'}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
        <Text>Resume title</Text>
          </View>
          <View style={{justifyContent:"flex-end", alignItems:'flex-end',flex:0.2}}>
            <Image style={{height:30, width:30}} source={require('../../res/image/img/new_icon_yourr_resume_link.png')}/>
          </View>
        </View>
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>

      </View>
      </ScrollView>

    </View>
  )
}

export default Home
