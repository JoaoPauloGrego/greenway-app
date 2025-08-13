import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

<NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" />
        <Drawer.Screen name="Home" component={HomeScreen} />
        
</NavigationContainer>