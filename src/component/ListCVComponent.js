import React, { useState } from 'react'
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import Images from '../res/image';
import { screenWidth } from '../res/style/theme';
import Sizes from '../utils/Sizes';
import Header from './custom/Header';
import StatusBarView from './custom/StatusBarView'

const ListCVComponent = (props) => {
    const [dataMB, setDataMB] = useState([{ name: Images.ic_facebook, id: '1' }, { name: Images.bg_register, id: '2' }, { name: Images.google_png, id: '3' }, { name: Images.ic_facebook, id: '4' }, { name: Images.ic_facebook, id: '5' }, { name: Images.google_png, id: '6' }, { name: Images.ic_facebook, id: '7' }, { name: Images.apple, id: '8' }, { name: Images.bg_register, id: '9' }]);
    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{ marginHorizontal: 5, marginVertical: 15 }}>
                <Image style={{ height: 170, width: screenWidth / 3.5 }} source={require('../res/image/img/bg_register.png')} />
                <Text style={{ alignSelf: 'center' }}>
                    Basic
             </Text>

            </TouchableOpacity>
        )

    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBarView />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity

                    style={{
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
                <Text style={{ alignSelf: 'center', fontSize: 20, }}>
                    Please select a CV form to export
    </Text>

            </View>
            <View style={{ justifyContent: "center", alignItems: 'center' }}>

                <ScrollView nestedScrollEnabled
                    showsHorizontalScrollIndicator={false}>
                    <FlatList
                        data={dataMB}

                        keyExtractor={(item, index) => String(index)}
                        renderItem={renderItem}
                        numColumns={3}
                    />
                </ScrollView>

            </View>
        </View>
    )
}

export default ListCVComponent
