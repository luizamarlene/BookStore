import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'; /* carrinho */


import Home from './pages/Home'; /* pág principal */
import Detail from './pages/Detail'; /* pag de detalhes */
import Cart from './pages/Cart';
import Detail_1 from './pages/Detail_1';

const Stack = createNativeStackNavigator();

function Routes() {
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen /* tela da Home */ 
                /* propriedades */
                name='Home'
                component={Home}
                options={{
                    
                }}> 
                </Stack.Screen>
                <Stack.Screen /* tela de detalhes */
                name='Detail'
                component={Detail}
                options={{
                    headerRight:() => (
                        <TouchableOpacity style={{marginRight:15}}>
                            <Feather
                                name='shopping-cart'
                                size={24}
                                color='black'>
                            </Feather>
                        </TouchableOpacity>
                    )
                }}
                >
                </Stack.Screen>   
                <Stack.Screen /* tela de detalhes */
                name='Detail_1'
                component={Detail_1}
                options={{
                    headerRight:() => (
                        <TouchableOpacity style={{marginRight:15}}>
                            <Feather
                                name='shopping-cart'
                                size={24}
                                color='black'>
                            </Feather>
                        </TouchableOpacity>
                    )
                }}
                >    
                </Stack.Screen>
                <Stack.Screen
                name='Cart'
                component={Cart}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;