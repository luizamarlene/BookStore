import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Shoes from '../Shoes'

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
       <View style={{flexDirection:'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           <View style={{marginHorizontal:10}}>
            <Shoes img={require('../../assets/3.png')} cost="R$ 140,99">Nike Squidward</Shoes>
           </View>
           <View style={{marginHorizontal:10}}>
            <Shoes img={require('../../assets/4.png')} cost="R$ 340,99">Nike Epic </Shoes>
            </View>
           <View style={{marginHorizontal:10}}>
            <Shoes img={require('../../assets/5.png')} cost="R$ 340,99">Nike Joyride </Shoes>
            </View>
           <View style={{marginHorizontal:10}}>
            <Shoes img={require('../../assets/6.png')} cost="R$ 340,99">Nike go</Shoes>
            </View>
        </ScrollView>
       </View> 
   </View>
  );
}
const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily:'Anton_400Regular',
        marginVertical:'2%',
        paddingHorizontal: '2%'

    }
})