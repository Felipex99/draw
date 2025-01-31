import {Text, View, StyleSheet} from "react-native"

export default function AboutScreen(){
    return(
        <View style={style.container}>
            <Text style={style.text}>Esse App é fruto de aprendizado, erros e esforços</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#353535",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color: "#fff"
    }
})