import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import Shoes from '../../components/Shoes';
export default function Cart({navigation}) {
    useEffect(()=> {
        navigation.setOptions({
          headerTitle: 'Seu carrinho',
          
        });
      });   
 return (
    
    <View></View>

  );
}