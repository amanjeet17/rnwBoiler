import {View,Text,Pressable, Platform} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authActions';
const LoginScreen = ({navigation}) =>{
    const dispatch = useDispatch();
    console.log('LoginScreen navigator')
    const ctaAction = ()=>{ 
        dispatch(login());
        navigation.navigate('DashboardScreen', { user: 'jane' })
    }
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
            <Text>Login Screen</Text>
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

export default LoginScreen