import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions,TouchableOpacity,Image, Platform, PermissionsAndroid} from 'react-native';
import Pdf from 'react-native-pdf';
import Images from '../res/image';
import Sizes from '../utils/Sizes';
import Header from './custom/Header';
import LoadingView from './custom/LoadingView';
import RNFetchBlob from 'rn-fetch-blob';
import StatusBarView from './custom/StatusBarView';
import BottomSheetDown from './custom/BottomSheetDown';
import { screenHeight } from '../res/style/theme';

const ShowPdfComponent = (props) => {
  const [source, setSource] = useState('');
  const [loadDown, setLoadDown] = useState(false);
  
  const modal = React.createRef();
  useEffect(() => {
    console.log('====================================');
    console.log(props.route.params);
    const kq = props.route.params.dataPDF;
    setSource(kq.linkPdf);
    console.log('====================================');
  }, []);

  const  historyDownload=()=> {
    //Function to check the platform
    //If iOS the start downloading
    //If Android then ask for runtime permission
    if (Platform.OS === 'ios') {
      setLoadDown(true)
      downloadHistory();
    } else {
      setLoadDown(true)
      try {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title:'storage title',
            message:'storage_permission',
          },
        ).then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //Once user grant the permission start downloading
            console.log('Storage Permission Granted.');
            downloadHistory();
          } else {
            //If permission denied then show alert 'Storage Permission 
            // 'Not Granted'
           Alert.alert('storage_permission');
          }
        });
      } catch (err) {
        setLoadDown(false)
        //To handle permission related issue
        console.log('error', err);
      }
    }
  }
  const  downloadHistory = async() =>{
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let date = new Date();
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        //Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/Report_Download' +
          Math.floor(date.getTime() + date.getSeconds() / 2),
        description: 'Risk Report Download',
      },
    };
    config(options)
      .fetch('GET', source)
      .then(async (res) => {
        await setLoadDown(false)
        //Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        await alert('Tải thành công');
      });
  }
  return (
    <View style={styles.container}>
      <StatusBarView/>
      {loadDown && <LoadingView />}
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                left: 0,
                height: Sizes.h95,
                paddingHorizontal: Sizes.h32,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.goBack()}>
              <Image
                source={Images.arrow}
                style={{
                  width: Sizes.s50,
                  height: Sizes.s50,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              
              style={{
                width: Sizes.s140,
                height: Sizes.s140,
                resizeMode: 'contain',
              }}
            />
            <TouchableOpacity
            onPress={()=>{modal.current.open()}}
              style={{
                flex: 0.1,
                left: 0,
                height: Sizes.h95,
                paddingHorizontal: Sizes.h32,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Image
              source={require('../res/image/img/more(3).png')}
              style={{
                width: Sizes.s50,
                height: Sizes.s50,
              }}
            /></TouchableOpacity>
          </View>
      {source === '' ? (
        <LoadingView />
      ) : (
          
        <Pdf
          source={{uri:source}}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link presse: ${uri}`);
          }}
          style={styles.pdf}
        />
      )}
       <BottomSheetDown
          OnShare={() => onShare()}
          OnDown={() => historyDownload()}
          ref={modal}
          title="Chi tiết"
          modalHeight={200}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
    
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor:'#FFFFFF'
  },
});

export default ShowPdfComponent;
