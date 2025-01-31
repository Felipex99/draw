import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router"

export default function Index() {
  return (
    <View style ={style.container}>
      <Text style = {style.text}>Seja bem vindo ao nosso app de desenho</Text>
      <Link href = "/about" style = {style.link}>Acessar mais informações</Link>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#313131",
    alignItems:"center",
    justifyContent:"center"
  },
  text: {
    fontSize:24,
    color: "#fff",
    textAlign:"center"
  },
  link:{
    fontSize:20,
    textDecorationLine:"underline",
    color:"#4a9bf8"
  }
})
