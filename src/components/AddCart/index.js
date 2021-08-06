import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'; /* hook pra navegar entre as telas */
import Cart from '../../pages/Cart';

export default function AddCart() {
    
 return (
   <View style={styles.container}>
       <TouchableOpacity style={styles.btnContainer} >
           <Text style={styles.title}>Adicionar ao carrinho</Text>
       </TouchableOpacity>
       
       
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent: 'center'
    },
    btnContainer:{
        width:'90%',
        height:50,
        backgroundColor:'#17181a',
        borderRadius: 5,
        marginVertical:'5%',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:17,
        color:'#FFF'
    }
})