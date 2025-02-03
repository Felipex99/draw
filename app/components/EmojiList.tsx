import {View, FlatList, Pressable, Platform, StyleSheet } from "react-native"
import {useState} from "react"
import {Image, type ImageSource} from "expo-image"

type Props = {
    onSelect: (image:ImageSource) => void
    onCloseModal: () => void
}

export default function EmokiList({onSelect, onCloseModal}:Props){
    const [emoji] = useState<ImageSource[]>([
        require("../../assets/images/emoji1.png"),
        require("../../assets/images/emoji2.png"),
        require("../../assets/images/emoji3.png"),
        require("../../assets/images/emoji4.png"),
        require("../../assets/images/emoji5.png"),
        require("../../assets/images/emoji6.png"),
        require("../../assets/images/emoji7.png"),
        require("../../assets/images/emoji8.png"),
        require("../../assets/images/emoji9.png"),
    ])
    return(
        <FlatList 
            horizontal 
            showsHorizontalScrollIndicator
            data={emoji}
            style={style.listContainer}
            renderItem = {
                ({item,index})=>(
                    <Pressable onPress={()=>{
                        onSelect(item)
                        onCloseModal()
                    }} >
                        <Image source={item} key={index} style={style.image}/>
                    </Pressable>
                )
            }
     
        />

    )
}

const style = StyleSheet.create({
    listContainer:{
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection:"row",
        padding:10,
    },
    image:{
        width:100,
        height:100,
        marginRight: 20
    }
})
