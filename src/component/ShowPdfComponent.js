import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Share,
} from 'react-native';
import Pdf from 'react-native-pdf';
import Images from '../res/image';
import Sizes from '../utils/Sizes';
import LoadingView from './custom/LoadingView';
import RNFetchBlob from 'rn-fetch-blob';
import StatusBarView from './custom/StatusBarView';
import BottomSheetDown from './custom/BottomSheetDown';

import {useTranslation} from 'react-i18next';

import {
  BannerAd,
  BannerAdSize,
  TestIds,
  InterstitialAd,
  AdEventType,
} from '@react-native-firebase/admob';
const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-2243198721344643~4768875832';

const ShowPdfComponent = (props) => {
  const {t} = useTranslation();
  const [source, setSource] = useState('');
  const [loadDown, setLoadDown] = useState(false);

  const modal = React.createRef();
  useEffect(() => {
    console.log('====================================');
    console.log(props.route.params);
    const kq = props.route.params.dataPDF;
    setSource(kq.linkPdf);
    console.log('====================================');
    admob();
  }, []);
  const admob = () => {
    let interstitial = InterstitialAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['fashion', 'clothing'],
    });
    let interstitialer = interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        interstitial.show();
      } else if (type === AdEventType.CLOSED) {
        // onExport()
      }
    });
    interstitial.load();
    return () => {
      interstitialer = null;
    };
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: source !== '' ? source :'' ,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const historyDownload = () => {
    //Function to check the platform
    //If iOS the start downloading
    //If Android then ask for runtime permission
    if (Platform.OS === 'ios') {
      setLoadDown(true);
      downloadHistory();
    } else {
      setLoadDown(true);
      try {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'storage title',
            message: 'storage_permission',
          },
        ).then((granted) => {
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
        setLoadDown(false);
        //To handle permission related issue
        console.log('error', err);
      }
    }
  };
  const downloadHistory = async () => {
    const {config, fs} = RNFetchBlob;
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
        await setLoadDown(false);
        //Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        await alert('Tải thành công');
      });
  };
  return (
    <View style={styles.container}>
      <StatusBarView />
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

        <View
          style={{

            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{fontSize: 20, color: '#2EB553'}}>{t('Xuất PDF')}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            modal.current.open();
          }}
          style={{
            flex: 0.1,
            left: 0,
            height: Sizes.h95,
            paddingHorizontal: Sizes.h32,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../res/image/img/more(3).png')}
            style={{
              width: Sizes.s50,
              height: Sizes.s50,
            }}
          />
        </TouchableOpacity>
      </View>
      {source === '' ? (
        <LoadingView />
      ) : (
        <Pdf
          source={{uri: source}}
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
        title={t("Chi tiết")}
        modalHeight={200}
      />
      <BannerAd unitId={adUnitId} size={BannerAdSize.SMART_BANNER} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#FFFFFF'
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // backgroundColor:'#FFFFFF'
  },
});

export default ShowPdfComponent;
