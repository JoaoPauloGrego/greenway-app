import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

<Tab.Navigator screenOptions={({ route }) => {
    tabBarIcon: ({ color, size })
    let iconName = route.name == 'Home' ? 'home' : 'settings';
    return <Ionicons name={iconName = route.name === 'Settings' ? 'settings' : 'person'} />
}
}>

<Tab.Screen name = "Settings" component = {SettingsScreen} />
</Tab.Navigator>
