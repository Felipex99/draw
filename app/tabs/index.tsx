import { Text, View, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons"
import {Link} from "expo-router"

export default function Index() {
  return (
    <View style ={style.container}>
      <View style={style.button}>
        <Ionicons name={"image"} size={20}/>
        <Text style={style.text}> Escolha uma foto</Text>
      </View>
      <Text style={[style.text,{color:"white"}]}>Usar essa foto</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#313131",
    alignItems:"center",
    justifyContent:"center",
    padding:18,
    gap:30
  },
  button:{
    backgroundColor:"white",
    gap:6,
    paddingVertical:20,
    minWidth:"100%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
    borderWidth:5,
    borderColor:"#f0e007",
  },
  text: {
    fontSize:18,
    color: "#000",
    textAlign:"center"
  },
  link:{
    fontSize:20,
    textDecorationLine:"underline",
    color:"#4a9bf8"
  }
})
