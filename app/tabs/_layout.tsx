import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

export default function TabsLayout(){
    return(
        <Tabs
          screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: "#18ba09",
            headerStyle:{
              backgroundColor:'#25292e'
            },
            headerShadowVisible:false,
            headerTintColor:"#fff",
            tabBarStyle:{
              backgroundColor:"#25292e"
            }
          }}>
            <Tabs.Screen 
              name="index" 
              options = {{
                title:"Home", 
                headerTransparent:true,
                tabBarIcon:({color, focused})=>(
                  <Ionicons name={focused?"home-sharp":"home-outline"} color={color} size = {24}/>
                )
                ,headerShown:true,
              }}/>

            <Tabs.Screen
              name="draw"
              options={{
                title:"Draw",
                headerTransparent:true,
                tabBarIcon:(({color, focused}) =>(
                  <Ionicons name={focused?"brush-sharp":"brush-outline"} color={color} size={24}/>
                )),
                tabBarStyle:{
                  backgroundColor:"#25292e"
                }
              }}
            />
            <Tabs.Screen name="about" 
            options= {{
              title:"About", 
              headerShown:true,
              tabBarIcon:({color,focused})=>(
                <Ionicons name = {focused ? "information-circle": "information-circle-outline"} color={color} size={24}/>
              )
              }}/>
        </Tabs>
    )
}