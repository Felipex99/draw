import {StyleSheet, Text, View, Pressable, Alert} from "react-native"
import FontAwesome from"@expo/vector-icons/FontAwesome"
type Props = {
    label: string,
    theme?: "primary"
}

export default function Btn({label, theme}:Props){
    if(theme==="primary"){
        return(
            <View style={[style.btnContainer,{borderColor:"#f0e007", borderRadius:20, borderWidth:5,}]}>
                <Pressable style={[style.btn,{backgroundColor:"#fff"}]} onPress={()=>alert("Clique")} onLongPress={()=>alert("LONG")} onPressIn={()=>alert("triscou")}>
                    <FontAwesome name={"image"} size={20}/>
                    <Text style={style.btnLabel}>{label}</Text>
                </Pressable>
        </View>
        )
    }
    return(
        <View style={style.btnContainer}>
            <Pressable style={style.btn} onPress={()=>alert("Clique")} onLongPress={()=>alert("LONG")} onPressIn={()=>alert("triscou")}>
                <FontAwesome name="picture-o" size={18} color="#25292e" style={style.buttonIcon} />
                <Text style={style.btnLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const style  = StyleSheet.create({
    btnContainer:{
        flex:1,
        width:320,
        height:68,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal: 20,
        padding:3,
    },
    btn:{
        borderRadius: 10,
        width:"100%",
        height:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    btnLabel:{
        color:"#000000",
        fontSize:16
    },
    buttonIcon: {
        paddingRight: 8,
    },
})