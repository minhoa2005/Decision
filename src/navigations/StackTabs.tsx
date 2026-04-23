import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { LoginForm } from "../screens/authentication/LoginForm";

const Stack = createNativeStackNavigator();

export const StackTabs = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginForm} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}