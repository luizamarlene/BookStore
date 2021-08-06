import React, {useEffect} from 'react'; /* rnfunc */
import { View, Text, StyleSheet,ScrollView, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Shoes from '../../components/Shoes';
import {useNavigation} from '@react-navigation/native'; /* hook pra navegar entre as telas */
import {Feather} from '@expo/vector-icons'; 

function Home() {
  const navigation = useNavigation();
  useEffect(()=> {
    navigation.setOptions({
      headerTitle: 'Magazine Luiza',
      headerRight:() => (
        <TouchableOpacity style={{marginRight:15}}>
            <Feather
                name='shopping-cart'
                size={24}
                color='black'
                onPress={()=>navigation.navigate('Cart')}>
            </Feather>
        </TouchableOpacity>
    )
    });
  });
 return (
   <View style={styles.container}>
    <View style={styles.header}>
      <Image 
      source={require('../../assets/banner.png')}
      style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.text}>TÊNIS</Text>
        <Text style={[styles.text, {color:'#CECECF'}]}>•</Text>
        <Text style={[styles.text, {color:'#CECECF'}]}>MASCULINO</Text>
        <TouchableOpacity style={{position:'absolute',right:0, alignSelf:'center'}}>
          <MaterialIcons
          name='filter-list'
          size={24}
          color='#000'
          />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.line}/>
    <ScrollView>
      <Text style={styles.text}>LANÇAMENTOS</Text>
      <View style={styles.produtoContainer}>
        <Shoes img={require('../../assets/1.png')} cost="R$ 140,99" onClick={()=> navigation.navigate('Detail_1')}>Nike Air Max Dia</Shoes>

        <Shoes img={require('../../assets/2.png')} cost="R$ 340,99" onClick={()=> navigation.navigate('Detail')
        }>Nike Downshifter</Shoes>
      </View>
      <View style={styles.produtoContainer}>
        <Shoes img={require('../../assets/3.png')} cost="R$ 140,99" onClick={()=> navigation.navigate('Detail')} >Nike Squidward </Shoes>
        <Shoes img={require('../../assets/4.png')} cost="R$ 340,99">Nike Epic </Shoes>
      </View>
      <View style={styles.produtoContainer}>
        <Shoes img={require('../../assets/5.png')} cost="R$ 140,99" >Nike Joyride </Shoes>
        <Shoes img={require('../../assets/6.png')} cost="R$ 340,99" >Nike go</Shoes>
      </View>
     
    </ScrollView>
   </View>
  );}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'#FFF'
  },
  header: {
    marginBottom: 8
  },
  image:{
    width:'100%'
  },
  textContainer: {
    flexDirection:'row',
    marginVertical:'5%',
    marginHorizontal:'5%'
   
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize:26,
    marginHorizontal:'1%'
  },
  line:{
    borderBottomColor:'#D8d8d8',
    borderBottomWidth:2
  },
  produtoContainer: {
    flexDirection:'row', 
    justifyContent:'space-around',
    marginBottom:5
  }

})
export default Home;