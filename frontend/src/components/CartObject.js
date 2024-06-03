import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CartObject = ({ ainaYaKipimo }) => {

    const [ idadiYaNdiziZilizochaguliwa, setIdadiNdiziZilizochaguliwa ] = useState(0); // idadi ya ndizi ya ndizi zilizochaguliwa kulingana na kipimo ( mkungu au kichane )
    const [ subTotal, setSubTotal ] = useState(0);
    const MAXVALUE = 40
    const BeiYaKilaMoja = 5000 // bei ya kila kichane au mkungu
    let kipimo = ''
    if ( ainaYaKipimo === 'Kichane' ){
        kipimo = idadiYaNdiziZilizochaguliwa > 1 ? 'Vichane' : 'Kichane';
    }
    else {
        kipimo = idadiYaNdiziZilizochaguliwa > 1 ? 'Mikungu' : 'Mkungu';
    }

    const handleAmountUpdateAdd = () => {
        if ( idadiYaNdiziZilizochaguliwa < MAXVALUE ) {
            setIdadiNdiziZilizochaguliwa(idadiYaNdiziZilizochaguliwa + 1 );
            setSubTotal(subTotal + BeiYaKilaMoja);

    }
    }
    const handleAmountUpdateSub = () => {
        if ( idadiYaNdiziZilizochaguliwa > 0 ) {
            setIdadiNdiziZilizochaguliwa(idadiYaNdiziZilizochaguliwa - 1 );
            setSubTotal(subTotal - BeiYaKilaMoja);
        }
    }

    return (
        <View style={styles.cartObject}>
            <Image 
            source={require('@assets/Banana1.jpg')}
            style={styles.image}
            resizeMode='center'
            />
            <View style={{flex: 1}}>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 16}}>Mshare</Text>
                    <Text style={{marginBottom: 5}}>{kipimo} - {idadiYaNdiziZilizochaguliwa}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "baseline", justifyContent: "space-between"}}>
                    <View style={{flexDirection: "row"}}>
                    <TouchableOpacity activeOpacity={0.7} onPress={handleAmountUpdateAdd} style={[styles.boxes,styles.aligner, {backgroundColor: "#70c945"}]}><AntDesign name="plus" size={24} color="#f3fff3" /></TouchableOpacity>
                    <View style={[styles.boxes, styles.aligner,{borderWidth: 1}]}><Text>{idadiYaNdiziZilizochaguliwa}</Text></View>
                    <TouchableOpacity activeOpacity={0.7} onPress={handleAmountUpdateSub} style={[styles.boxes,styles.aligner, {backgroundColor: "red"}]}><AntDesign name="minus" size={24} color="#f3fff3" /></TouchableOpacity>
                    </View>
                    <Text>{subTotal}Tsh</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        marginRight: 20
    },
    cartObject: {
        width: 350,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: "gray",
        marginTop: 5
    },
    inputField: {
        width: 30,
        height: 30,
    },
    boxes: {
        width: 40,
        height: 30, 
        marginHorizontal: 2,
        borderRadius: 5
    },
    aligner: {
        alignItems: "center",
        justifyContent: "center"
    }
})

export default CartObject;