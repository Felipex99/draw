import {StyleSheet, Text, View, Pressable, Alert} from "react-native"
import FontAwesome from"@expo/vector-icons/FontAwesome"


type Props = {
    label: string,
    theme?: "primary",
    imgPick?: ()=>void
}

export default function Btn({label, theme, imgPick}:Props){
    if(theme==="primary"){
        return(
            <View style={[style.btnContainer,{
                borderColor:"#f0e007", 
                borderRadius:20, 
                borderWidth:5,
                }]}>
                <Pressable style={[style.btn,{backgroundColor:"#fff",flexDirection:"row", gap:6,}]} onPress={imgPick} >
                    <FontAwesome name={"image"} size={20}/>
                    <Text style={style.btnLabel}>{label}</Text>
                </Pressable>
        </View>
        )
    }
    return(
        <View style={style.btnContainer}>
            <Pressable style={[style.btn,{flexDirection:"row", gap:6,}]} onPress={imgPick}>
                <FontAwesome name={"edit"} size={20} color={"white"}/>
                <Text style={[style.btnLabel,{color:"#fff"}]}>{label}</Text>
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