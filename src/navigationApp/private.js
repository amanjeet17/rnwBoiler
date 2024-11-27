import DashboardScreen from "../screens/Dashboard/Dashboard";
import UserScreen from "../screens/User/User";
import {
    CardStyleInterpolators,
    TransitionPresets,
  } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const PrivateRoutes = () =>{
    return(
        <Stack.Navigator
            screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>
                 <Stack.Screen
                    name="UserScreen"
                    component={UserScreen}
                    // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DashboardScreen"
                    component={DashboardScreen}
                    // options={{ headerShown: false }}
                />
               
        </Stack.Navigator>
    )
}

export default PrivateRoutes