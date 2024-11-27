import {View,Text,Pressable} from 'react-native';

const UserScreen = ({props,navigation}) =>{
    const ctaAction = ()=>{
        console.log('UserScreen',navigation)
        navigation.navigate('DashboardScreen')
    }
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>User Screen</Text>
            <Pressable onPress={ctaAction} style={{
                width:100,
                height:40,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'red'
            }}>
                <Text>User</Text>
            </Pressable>
        </View>
    )
}
export default UserScreen