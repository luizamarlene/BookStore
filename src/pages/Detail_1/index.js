import React , {useEffect} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import SizeButton from '../../components/SizeButton';
import Dot from '../../components/Dot';
import Footer from '../../components/Footer';
import AddCart from '../../components/AddCart'
import {Feather} from '@expo/vector-icons';
import Shoes from '../../components/Shoes'


export default function Detail({navigation}) {
  useEffect(()=> {
    navigation.setOptions({
      headerTitle: 'Nike Air Max Dia',
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
  <ScrollView style={styles.container}>
      
      <Image 
      source={require('../../assets/detail.png')}
      style={styles.image}
      resizeMode='cover'
      />
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24}]}>R$ 140,99 </Text>
        </View>
        <View opacity={0.4}>
          <Text  style={[styles.title, { fontSize: 30}]}>Nike Air Max Dia </Text>
        </View>
        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
         </View>
        <View style={{flexDirection:'row', width:'100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor='#17181a' color='#FFF'>40</SizeButton>
            <SizeButton>38</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>35</SizeButton>
          </ScrollView>
        </View>
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Nike Air Max Dia</Text>
          <Text style={styles.textContent}>
            O Tênis Nike Air Max Dia traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético
          </Text>
          <Text style={styles.textList}> 
            - Categoria: Amortecimento 
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh
          </Text>
        </View>
        <AddCart/>
        <View style={styles.line}></View>
      </View>
      <Footer></Footer>

  </ScrollView>
);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'#FFF'
  },
  imagem: {
    width:'100%'
  },
  title:{
    fontFamily:'Anton_400Regular',
    paddingHorizontal:'2%'
  },
  dotContainer:{
    flexDirection:'row',
    marginVertical:'7%'
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical:'2%',
    paddingHorizontal:'2%'
  },
  textTitle: {
    fontSize:22,
    marginVertical:'2%'

  },
  textList: {
    fontSize: 16,
    lineHeight: 25
  },
  line:{
    borderWidth:1,
    borderBottomColor:'#DDD',
    marginVertical:'2%'
  }
})
