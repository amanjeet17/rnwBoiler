import React from 'react';
import VoltApp from './App';
import {Dimensions, Platform} from 'react-native';
import {
  View,Image,Text
} from 'react-native';
import DasboardScreen from './screens/Dashboard/Dashboard';
import WebRoutes from './navigationWeb/webRouter';
import App from './App';

const AppWeb = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <>
      <View style={{
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'rgb(242, 242, 242)',
          }}>
            <View
              style={{
                height: 60,
                width: '100%',
                backgroundColor: 'rgb(255, 255, 255)',
                marginBottom: '24px',
                paddingVertical: 20,
                paddingHorizontal:40,
                alignItems: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'space-between',
                }}>
              <Image
                style={{width: 64, height: 24}}
                source={{
                  uri: 'https://volt-images.s3.ap-south-1.amazonaws.com/volt-website-header.png',
                }}
              />
            </View>
            <View style={{
              overflow: 'auto',
              width:windowWidth> 767 ? 508 :windowWidth,
              height:windowHeight -85,
              paddinBottom:20
            }}>
              <App/>
            </View>
      </View>
    </>
  )
};

export default AppWeb ;
