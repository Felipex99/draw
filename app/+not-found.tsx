import {View, Text, StyleSheet} from "react-native"
import {Link, Stack} from "expo-router"
export default function NotFoundScreen(){
    return(
        <View style = {style.container}>
            <Stack.Screen options={{title: "Oops! Not Found."}}/>
            <Text style = {style.text}>Essa tela não existe</Text>
            <Link href={"/"} style = {style.link}>Voltar para a tela inicial</Link>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        gap:40
    },
    text:{
        backgroundColor:"red",
        padding:10,
        borderRadius:5,
        color:"#fff",
        fontSize:30,
        fontWeight:"bold"
    },
    link:{
        color:"#3a8fff",
        textDecorationLine:"underline"
    }
})