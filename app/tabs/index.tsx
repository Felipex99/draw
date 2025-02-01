import { Text, View, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons"
import {Image} from "expo-image"
import {Link} from "expo-router"
import ImageViewer from "@/app/components/ImageViewer";
import Btn  from "@/app/components/Btn."
const  PlaceholderImage = require("@/assets/images/background-image.png")

export default function Index() {
  return (
    <View style ={style.container}>
      <View style = {style.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <View style={style.footerContainer}>
        <Btn label="Novo Botao" theme={"primary"}/>
        <Btn label="Usar essa foto"/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#25292e",
    alignItems:"center",
    justifyContent:"center",
    paddingTop:70,
    paddingBottom:"10%",
    gap:22
  },
  imageContainer:{
    flex: 1,
  },
  footerContainer:{
    flex:1/3,
    alignItems:"center",
    gap:30,
  },

  text: {
    fontSize:18,
    color: "#000",
    textAlign:"center"
  },
})
