import { SafeAreaView, View, StyleSheet, Text, Pressable, GestureResponderEvent } from "react-native";
import {Svg, Path} from "react-native-svg" 
import React,{useState} from "react"
import { Ionicons } from "@expo/vector-icons";

export default function(){
    const [paths, setPaths] = useState<string[][]>([])
    const [currentPath, setCurrentPath] = useState<string[]>([])
    const [isClearButtonClicked, setClearButtonClicked] = useState(false)
    const [largura, setLargura] = useState(1)

    const onTouchMove = (event:GestureResponderEvent) =>{
        const newPath = [...currentPath]
        const locationX = event.nativeEvent.locationX
        const locationY = event.nativeEvent.locationY
        //atualizar para o formato do caminho "Mx,y"
        const newPoint = `${newPath.length===0 ? 'M' : ""} ${locationX.toFixed(0)}, ${locationY.toFixed(0)}`
        newPath.push(newPoint)
        setCurrentPath(newPath)
    }

    const onTouchEnd = () =>{
        paths.push(currentPath)
        console.log(currentPath)
        setCurrentPath([])
        setClearButtonClicked(false)
    }

    const clear = () =>{
        console.warn(paths[0])
        setPaths([])
        setCurrentPath([])
    }


    return(
        <SafeAreaView style={{display:"flex", alignItems:"center"}}>
            <View style={style.container} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                <Text style={style.text}>Vamos pintar</Text>
                <Svg>
                    <Path
                        d={paths.join("")}
                        stroke={"red"}
                        strokeWidth={largura}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill={"transparent"}
                    />
                    {paths.map((item,index)=>(
                        <Path
                        key={`path ${index}`}
                        d={currentPath.join('')}
                        stroke={isClearButtonClicked?"transparent":"red"}
                        strokeWidth={largura}
                        fill={"transparent"}
                        
                        />
                    )
                    )}
                </Svg>
            </View>
            <Pressable style={{
                    marginBottom:80, 
                    backgroundColor:"#dbdbdb", 
                    padding:10, 
                    borderRadius:8,
                    borderWidth:1, 
                    borderColor:"#9e9e9e"}} onPress={clear}>
                <Ionicons name="trash-outline" size={30} color={"#ff2c2c"}/>
            </Pressable>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff",
        alignItems:"center",
        textAlign:"center",
        justifyContent:"center",
        height:"85%",
        width:"100%"
    },
    text:{
        color:"#ffffff",
        fontSize:22,
        textAlign:"center"
    }
})
