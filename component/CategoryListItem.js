import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native'


export default function CategoryListItem(props) {
    const {image, content} = props
    return <View style={styles.box}>
        <Text style={styles.text}>{content}</Text>
        <Image source={image} style={styles.image}/>
    </View>
}

const styles = StyleSheet.create({
    image: {
        width:64,
        height:64,
    },
    box: {
        marginTop: 10,
        padding: 20 ,
        flexDirection: 'column',
        justifyContent:'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset: {
            width: 0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius:3.84,
        elevation:5
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
        textTransform: 'uppercase',
        fontWeight: '800'
    }
  });