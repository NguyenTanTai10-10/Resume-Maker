import React,{useEffect} from 'react'
import { View, Text } from 'react-native'

const ShowPdfComponent = (props) => {
    useEffect(() => {
        console.log('====================================');
        console.log(props.route.params);
        console.log('====================================');
      
    }, [])
    return (
        <View>
            <Text>abc</Text>
        </View>
    )
}

export default ShowPdfComponent
