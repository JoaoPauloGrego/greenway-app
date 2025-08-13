import React from 'react';
import {createStackNavigator} from '@react-native/stack';
import TelaInicial from '../views/TelaInicial';
import TelaDetalhes from '../views/TelaDetalhes';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="TelaInicial" component={TelaInicial}
            options={{title: 'Bicicletas'}}/>
            <Stack.Screen name="TelaDetalhes" component={TelaDetalhes}
            options={{title: 'Detalhes'}}/>
        </Stack.Navigator>
    )
}