import {View} from "react-native"
import Animated,{useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated"
import {Gesture, GestureDetector} from "react-native-gesture-handler"
import {Image, type ImageSource} from "expo-image"
import { onMode } from "venom-bot/dist/api/model/enum"

type Props = {
    imageSize: number,
    stickSource: ImageSource
}

export default function EmojiSticker({imageSize, stickSource}:Props){
    const scaleImage = useSharedValue(imageSize)
    const x = useSharedValue(0)
    const y = useSharedValue(0)

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(()=>{
            if (scaleImage.value !== imageSize * 2){
                scaleImage.value = scaleImage.value * 2
            }else{
                scaleImage.value = Math.round(scaleImage.value / 2)
            }
        })
    
    const imageStyle = useAnimatedStyle(()=>{
        return{
            width: withSpring(scaleImage.value),
            height:withSpring(scaleImage.value)
        }
    })

    const drag = Gesture.Pan().onChange(event=>{
        x.value += event.changeX,
        y.value += event.changeY
    })

    const dragStyle = useAnimatedStyle(()=>{
        return{
            transform:[
                {translateX: x.value},
                {translateY: y.value}
            ]
        }
    })
    return(
        <GestureDetector gesture={drag}>
            <Animated.View style={[dragStyle,{top:-350}]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image 
                        source={stickSource}
                        style={[imageStyle,{width: imageSize, height: imageSize}]}
                        resizeMode="contain"
                        />  
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    )
}
