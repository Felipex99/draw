import {View, Pressable, StyleSheet, Modal, Text} from "react-native"
import {PropsWithChildren} from "react"
import MaterialsIcons from "@expo/vector-icons/MaterialIcons"

type Props = PropsWithChildren<{
    isVisible: boolean,
    onClose:()=>void
}>

export default function EmojiPicker({isVisible,children,onClose}:Props){
    return(
        <Modal animationType = "slide" transparent={true} visible={isVisible}>
            <View style = {style.modalContent}>
                <View style = {style.titleContainer}>
                    <Text style = {style.title}>Escolha um sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialsIcons name={"close"} color={"#ffff"} size ={22}/>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    modalContent:{
        height:"25%",
        width:"100%",
        backgroundColor:"#25292e",
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        position:"absolute",
        bottom:0
    },
    titleContainer:{
        height:"20%",
        backgroundColor:"#464C55",
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    title:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold"
    }
})