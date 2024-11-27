import {View,Text,Pressable} from 'react-native';

const MainScreen = ({props,navigation}) =>{
    const ctaAction = ()=>{
        console.log('DashboardScreen',navigation,props)
    }
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
            <Text>Welcome to Volt Money Nigga MainScreen</Text>
            <Pressable onPress={ctaAction} style={{
                width:100,
                height:40,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#ddd'

            }}>
                <Text>Login</Text>
            </Pressable>
        </View>
    )
}

export default MainScreen