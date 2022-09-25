<<<<<<< HEAD
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const item = [
  {id : 1, name: "Tôi thấy hoa Vàng trên cỏ xanh", price: 190000, image: require('../assets/images/toi_thay_hoa_Vang_tren_co_xanh.png')},
  {id : 2, name: "Cho tôi xin một Vé đi tuổi thơ", price: 190000, image: require('../assets/images/220px-Cho_tôi_xin_một_Vé_đi_tuổi_thơ.png')},
]

// function ListItemScreen(pops){
//   return(
    
//     )
// }

const HeaderComponent = () => {
  return(
    <View style={[{ flex: 1, alignItems: "left"}]}>
      <Text style={styles.title}>Sách</Text>
    </View>
  );
};

const ItemSeperator = () => {
  return(
    <View style={styles.seperator} />
  )
};

const ItemBox = ({item}) => (
  <View style={styles.product}>
    <Image style={styles.img_prod} source={{uri: item.image}} />
    <View style={styles.prod_details}>
      <TouchableOpacity>
        <Text style={styles.prod_name}>{item.name}</Text>
      </TouchableOpacity>
      <Text style={styles.prod_price}>{item.price}</Text>
    </View>
  </View>
);

const Home = () => {
  return (
    <View style={styles.list}>
      <FlatList 
        ListHeaderComponent={HeaderComponent}
        ItemSeperatorComponent={ItemSeperator}
        keyExtractor={(item, index) => index}
        data={item}
        renderItem={ItemBox}   
      />
        
=======
import { View, Text,  TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',alignContent:'center',justifyContent:'center'}}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Cart')}>
          <Text>Next</Text>
        </TouchableOpacity>
>>>>>>> c88e8d6dc78525b3d470ef0c17436926c1a630d1
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
  
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
    marginTop: 10,
  },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
    // flexDirection: "column",
    flex: "center",
  },
  product: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    border: "1px solid black",
    borderRadius: 10,
    width: 150,
  },
  img_prod: {
    width: 100,
    height: 200,
    marginTop: 10,
    marginLeft: 25,
  },
  prod_details: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  prod_name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    width: 150,
  },
  prod_price: {
    fontSize: 13,
    color: "black",
  },
  
});