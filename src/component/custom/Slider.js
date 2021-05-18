import React, { useState } from 'react'
import { View, Text } from 'react-native'

const Slider = () => {
    const fomaHeight1 =(x)=>{
        const kq1 = (x *140)/100
        return kq1

    }
    const fomaHeight2 =(y)=>{
        const kq2 = 140-((y *140)/100)
        console.log('kq2===',kq2);
        return kq2

    }
    

    const [press, setPress] = useState(90)
    const render = (press) => {
        return (
            <View style={{ flexDirection: 'row',  width: 140,borderRadius: 20 }}>
                <View style={{ height: 7, width:fomaHeight1(press) , backgroundColor: "#FFC069" }}>
                    <Text>{ }</Text>
                </View>
                <View style={{ height: 7, width: fomaHeight2(press), backgroundColor: "#8C8C8C" }}>
                    <Text>{ }</Text>
                </View>
            </View>


        )
    }
        
        
        
        
    return (
        <View style={{borderRadius: 20, marginTop:5}}>
            {render(press)}



        </View>
    )
}

export default Slider
