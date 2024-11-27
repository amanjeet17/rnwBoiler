import LoginScreen from "../screens/Login/Login";
import MainScreen from "../screens/MainScreen/MainScreen";
import {
    CardStyleInterpolators,
    TransitionPresets,
  } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const PublicRoutes = () =>{
    return(
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
export default PublicRoutes
