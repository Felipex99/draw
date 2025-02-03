import { Text, View, StyleSheet } from "react-native";
import {useState}  from "react"
import {Ionicons} from "@expo/vector-icons"
import {Image} from "expo-image"
import {Link} from "expo-router"
import ImageViewer from "@/app/components/ImageViewer";
import Btn  from "@/app/components/Btn"
const  PlaceholderImage = require("@/assets/images/background-image.png")
import *  as ImagePicker  from "expo-image-picker"
import CircleBtn from "@/app/components/CircleBtn"
import IconBtn from "@/app/components/IconBtn"
import EmojiPicker from "@/app/components/EmojiPicker"
import EmojiList from "@/app/components/EmojiList"
import EmojiSticker from "@/app/components/EmojiSticker"
import {type ImageSource} from "expo-image"
import {GestureHandlerRootView} from "react-native-gesture-handler"

export default function Index() {
  const [imgSelect, setImgSelect] = useState<string | undefined>(undefined)
  const [show, setShow] =  useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource[]>([])
  const  pickImgAsync = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:["images"],
      allowsEditing:true,
      quality:1
    })
    if(!result.canceled){
      console.warn(result.assets[0].uri)
      setShow(true)
      setImgSelect(result.assets[0].uri)

    }else{
      console.log("Você não selecionou nenhuma imagem")
    }
  }
  return (
    <GestureHandlerRootView style ={style.container}>
      <View style = {style.imageContainer}>
        <ImageViewer imgSource={!imgSelect ? PlaceholderImage : imgSelect}/>
        {pickedEmoji.map((emoji, index)=>(
          <EmojiSticker key={index}imageSize={40} stickSource={pickedEmoji[index]} />
        ))
        }
      </View>  
        {show ? 
          <View style={[style.footerContainer,{flexDirection:"row", gap:0}]}>
            <IconBtn name = {"reply"} label={"Reset"}/>
            <CircleBtn onPress={()=>setIsModalVisible(true)}/>
            <IconBtn name ={"download"} label={"Salvar"}/>
            <EmojiPicker onClose={()=>setIsModalVisible(!isModalVisible)} isVisible={isModalVisible}>
              <EmojiList onSelect={(emoji:ImageSource)=>setPickedEmoji((prev)=>[...prev,emoji])} onCloseModal={()=>setIsModalVisible(!isModalVisible)}/>
            </EmojiPicker>
          </View> 
          :
          <View style={style.footerContainer}>
            <Btn label="Selecionar Foto" theme={"primary"} imgPick={pickImgAsync}/>
            <Btn label="Editar" imgPick={()=>setShow(!show)}/>
          </View> 
        }
    </GestureHandlerRootView>
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
    gap:20,

  },
  text: {
    fontSize:18,
    color: "#000",
    textAlign:"center"
  },
})
