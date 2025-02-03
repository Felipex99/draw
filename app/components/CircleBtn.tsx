import {View, StyleSheet, Pressable} from "react-native"
import {Ionicons} from  "@expo/vector-icons" 

type Props  = {
    onPress?: ()=>void  
}

export default function CircleBtn({onPress}:Props){
    return(
        <View style={style.container}>
            <Pressable style = {style.circle} onPress={onPress}>
                <Ionicons name="add" size={38}/>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width:84,
        height:84,
        marginHorizontal:60,
        borderWidth:4,
        borderRadius:42,
        padding:3,
        borderColor:"#f0e007"
    },
    circle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:42,
        backgroundColor:"#fff"
    }
})