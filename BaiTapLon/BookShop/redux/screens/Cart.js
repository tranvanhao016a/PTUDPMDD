import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    ToastAndroid,
    FlatList,
    StyleSheet
  } from 'react-native';
  import React, 
  { useState, useEffect } from 'react';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import { COLOURS } from '../../Coler.js';
  import { useSelector, useDispatch } from 'react-redux';
  // import { items } from '../data/Database';
  import { removeItemCart, pust_quantity, minus_quantity } from '../actions/cartAction.js';


  const Cart = ({ navigation }) => {
    const dispatch = useDispatch();
    let items = useSelector((state) => state.cart.items);
    // console.log(items)
    const [total, setTotal] = useState(null);
    const feeShip = 5000;


  const pustQuantity = (id, quantityBuy) => {
    dispatch(pust_quantity(id, quantityBuy))
  }

  const minusQuantity = (id, quantityBuy) => {
    dispatch(minus_quantity(id, quantityBuy))
  }

    const removeItemFromCart = (id) => {
      dispatch(removeItemCart(id));
    };

    const renderProducts = (item,index ) => (
      <TouchableOpacity
        key={item.id}
        // onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
        style={styles.itemBody}>
        <View
          style={styles.itemViewImage}>
          <Image
            source={item.photoBook}
            style={styles.itemImage}
          />
        </View>
        <View
          style={styles.itemConten}>
          <View>
            <Text
              // numberOfLines={1}
              style={styles.itemName}>
              {item.nameBook}
            </Text>
            <View
              style={styles.itemViewPrice}>
              { item.isDiscount? 
                <Text
                  style={styles.itemPrice}>
                  &#8363; {item.price - item.price * 0.2}
                </Text> :              
                <Text
                  style={styles.itemPrice}>
                </Text> }
              { item.isDiscount ? 
                <Text style={styles.itemPrice}>
                 (~&#8363; {item.price })
                </Text> : 
                <Text style={styles.itemPrice}>
                  &#8363; {item.price} 
                </Text>
                }
            </View>
          </View>
          <View
            style={styles.itemContenTool}>
            <View
              style={styles.itemToolquanlity}>
              <View
                style={styles.itemViewPlusMinus}>
                <TouchableOpacity
                  onPress={() => minusQuantity(item.id, item.quantityBuy)}
                >
                  <MaterialCommunityIcons
                    name="minus"
                    style={styles.itemPlusMinus}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.itemNumQuanlity}>{item.quantityBuy}</Text>
              <View
                style={styles.itemViewPlusMinus}>
                <TouchableOpacity
                  onPress={() => pustQuantity(item.id, item.quantityBuy)}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    style={styles.itemPlusMinus}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => removeItemFromCart(item.id)}
              style={styles.itemViewDelete}
            >
              <MaterialCommunityIcons
                name="delete-outline"
                style={styles.itemBtnDelete}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  
    return (
      <View
        style={styles.container}>
        <ScrollView style={{ paddingTop: 15, paddingHorizontal: 16, }}>
          <View>
              {items ? items.map(renderProducts): null}
          </View>
          <View>
            <View
              style={styles.ViewTotalFee}>
              <View
                style={styles.infoViewTotal}>
                <Text
                  style={styles.infoTextTotal}>
                  Tổng cộng
                </Text>
                <Text
                  style={styles.infoMoneyTotal}>
                  &#8363; {total}
                </Text>
              </View>
              <View
                style={styles.infoViewShipFee}>
                <Text
                  style={styles.infoTextShipFee}>
                  Phí vận chuyển
                </Text>
                <Text
                  style={styles.infoMoneyShipFee}>
                  &#8363; {feeShip}
                </Text>
              </View>
            </View>
            <View
              style={styles.ViewPayment}>
              <View
                style={styles.infoViewPayment}>
                <Text
                  style={styles.infoTextPayment}>
                  Thành tiền
                </Text>
                <Text
                  style={styles.infoMoneyPayment}>
                  &#8363; {total != 0 ? total + feeShip : 0}
  
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={styles.paymentViewBtn}>
          <TouchableOpacity
            onPress={() =>
              //  (total != 0 ? checkOut() : null)
              checkOut()
            }
            style={styles.paymentBtn}>
            <Text
              style={styles.paymentBtnText}>
              {/* Thanh toán (&#8363;{total + total / 20} ) */}
              Thanh toán
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  export default Cart
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: COLOURS.backgroundLight,
      // marginTop: 40,
      // position: 'relative',
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 16,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: COLOURS.green,
    },
    headerBtnBack: {
      fontSize: 18,
      color: COLOURS.backgroundDark,
      padding: 12,
      backgroundColor: COLOURS.backgroundLight,
      borderRadius: 12,
    },
    headerTitle: {
      fontSize: 26,
      color: COLOURS.black,
      fontWeight: 'bold',
    },
    bodyTitle: {
      fontSize: 20,
      color: COLOURS.black,
      fontWeight: '500',
      letterSpacing: 1,
      paddingTop: 20,
      paddingLeft: 16,
      marginBottom: 10,
    },
    paymentViewBtn: {
      position: 'relative',
      bottom: 0,
      borderTopColor: COLOURS.backgroundDark,
      borderTopWidth: 1,
      height: '10%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLOURS.white,
      overflow: 'hidden',
      padding: 9
    },
    paymentBtn: {
      width: '86%',
      height: '90%',
      backgroundColor: COLOURS.blue,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    paymentBtnText: {
      fontSize: 12,
      fontWeight: '500',
      letterSpacing: 1,
      color: COLOURS.white,
      textTransform: 'uppercase',
    },
    ViewTotalFee: {
      padding: 16,
      marginTop: 40,
      // marginBottom: 10,
      backgroundColor: COLOURS.white,
      borderColor: COLOURS.white,
      borderWidth: 2,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    infoViewTotal: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    infoTextTotal: {
      fontSize: 16,
      fontWeight: '600',
      maxWidth: '80%',
      color: COLOURS.black,
      opacity: 0.8,
    },
    infoMoneyTotal: {
      fontSize: 16,
      fontWeight: '600',
      color: COLOURS.black,
      opacity: 0.8,
    },
    infoViewShipFee: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    infoTextShipFee: {
      fontSize: 16,
      fontWeight: '600',
      maxWidth: '80%',
      color: COLOURS.black,
      opacity: 0.8,
    },
    infoMoneyShipFee: {
      fontSize: 16,
      fontWeight: '600',
      color: COLOURS.black,
      opacity: 0.8,
    },
    ViewPayment: {
      padding: 16,
      marginTop: 15,
      marginBottom: 40,
      backgroundColor: COLOURS.white,
      borderColor: COLOURS.white,
      borderWidth: 2,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    infoViewPayment: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    infoTextPayment: {
      fontSize: 16,
      fontWeight: 'bold',
      maxWidth: '80%',
      color: COLOURS.black,
      // opacity: 0.5,
    },
    infoMoneyPayment: {
      fontSize: 16,
      fontWeight: 'bold',
      color: COLOURS.black,
    },
    itemBody: {
      width: '100%',
      height: 120,
      marginVertical: 6,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: COLOURS.white,
      borderColor: COLOURS.white,
      borderWidth: 2,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    itemViewImage: {
      width: '30%',
      height: '100%',
      padding: 9,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: COLOURS.green,
      borderRadius: 10,
      marginRight: 7,
    },
    itemImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      backgroundColor: COLOURS.white,
      borderRadius: 10,
    },
    itemConten: {
      // flex: 1,
      width: '67%',
      height: '100%',
      justifyContent: 'space-around',
      // backgroundColor: COLOURS.red,
    },
    itemName: {
      fontSize: 14,
      maxWidth: '100%',
      color: COLOURS.black,
      fontWeight: '700',
      letterSpacing: 1,
      overflow: 'hidden'
    },
    itemViewPrice: {
      marginTop: 8,
      flexDirection: 'row',
      alignItems: 'center',
      opacity: 0.6,
      // backgroundColor: COLOURS.green,
    },
    itemPrice: {
      fontSize: 14,
      fontWeight: 'bold',
      maxWidth: '85%',
      marginRight: 4,
      color: "red",
    },
    itemContenTool: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // backgroundColor: COLOURS.green,
    },
    itemToolquanlity: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemViewPlusMinus: {
      borderRadius: 100,
      marginRight: 20,
      padding: 3,
      borderWidth: 1.6,
      borderColor: COLOURS.black,
      opacity: 0.7,
    },
    itemPlusMinus: {
      fontSize: 16,
      color: COLOURS.black,
      opacity: 1,
    },
    itemNumQuanlity: {
      marginRight: 20,
      fontSize: 17
    },
    itemViewDelete: {
      borderRadius: 100,
      padding: 4,
      borderWidth: 2,
      borderColor: 'red',
      opacity: 0.5,
      marginRight: 5
    },
    itemBtnDelete: {
      fontSize: 20,
      color: COLOURS.backgroundDark,
      backgroundColor: COLOURS.backgroundLight,
      color: 'red'
      // borderRadius: 100,
    }
  });