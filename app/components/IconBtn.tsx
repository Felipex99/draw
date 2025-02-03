import {View, StyleSheet, Pressable, Text} from "react-native"
import FontAwesome from  "@expo/vector-icons/FontAwesome" 

type Props  = {
    onPress?: ()=>void,
    name?: "reply" | "download",
    label?: string
}

export default function IconBtn({onPress, label,  name}: Props){    
    return(
        <View>
        <Pressable style={[style.btn,{flexDirection:"column", gap:6,}]} onPress={onPress}>
            <FontAwesome name={name} size={20} color={"white"}/>
            <Text style={style.btnLabel}>{label}</Text>
        </Pressable>
    </View>
)
}

const style  = StyleSheet.create({
    btn:{
        alignItems:"center"
    },
    btnLabel:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"bold"
    },
    buttonIcon: {
        paddingRight: 8,
    },
})