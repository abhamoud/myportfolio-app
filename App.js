import * as React from "react";
import { View, Text, StatusBar, Image, Dimensions, StyleSheet, Linking, Button, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

  
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import mockData from './components/Mock';


const Layout = { 
  height:Dimensions.get('window').height,
  width:Dimensions.get('window').width,
}



const Colors = {
  theme: "#24685b",
  white: "#fff",
  greyish: "#1f1f1f"
};

const skillIcons = [
  "language-html5",
  "language-css3",
  "language-javascript",
  "language-php",
  "language-python"
];

const projects = [
  {
    name:"Dew Rainmeter",
    icon:"airballoon"
    
  },
  {
    name:"Yula Assistant",
    icon:"microphone"
    
  },
  {
    name:"Bucket Trace",
    icon:"shopping-music"
    
  },
];








export default function App(props) {
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar 
      translucent={false} 
      barStyle="light-content"
      backgroundColor={Colors.theme}
       />

       <View style={{ 
         backgroundColor: Colors.theme,
         paddingBottom: Layout.height * 0.2,
         borderBottomLeftRadius: Layout.width * 0.1,
         borderBottomRightRadius: Layout.width * 0.1
        }}
         >
         <View 
          style={{ 
            alignItems: "flex-end",
            paddingHorizontal:32, 
            marginVertical: 20
            }}
            >

           <SimpleLineIcons 
           name="equalizer" 
           size={20} 
           style={{ color: Colors.white }} 
           />
         </View>

         <View style={{
           flexDirection:"row",
           paddingHorizontal: 32,
           marginVertical: 36,
           alignItems: "center",
           justifyContent: "flex-start"

         }}>
           <Image 
           source={require("./assets/user.png")} 
           style={{ width:50,height:50, borderRadius:25, marginRight: 16 }} 
           />
           <View>
             <Text style={{ fontSize: 17, color: Colors.white,  }}>Benyoucef Ahmed</Text>
             <Text style={{ fontSize: 12, color: Colors.greyish }}>Développeurs Web appli</Text>
           </View>
         </View>
       </View>



       <View
       style={{

         backgroundColor: Colors.white,
         marginHorizontal: 32,
         padding: 20,
         borderRadius: 20,
         elevation: 8,
         marginBottom: 16,
         marginTop: -Layout.height * 0.15
       }}
       
       >
         <View style={{
           flexDirection:"row",
           justifyContent:"space-between",
           marginVertical: 8
           }}
           >
             
           
           <Text style={{ fontSize: 17, color: Colors.greyish, fontWeight:"bold"}}>PROFILE</Text>
           <AntDesign name="user" size={20} color="black" />
         </View>
         <View style={{ marginVertical: 8 }}>
           <Text style={{ fontSize: 14, color: Colors.greyish, fontWeight:"bold" }}>
           Développeur web full stack qualifié. Capacité à mettre 
           en œuvre rapidement de nouvelles technologies. Mes compétences 
           incluent HTML5, CSS3, Javascript, jQuery, PHP, Wordpress. 
           Chercheur de solutions optimisées innovantes. </Text>
         </View>
       </View>

       <View
       style={{

         backgroundColor: Colors.white,
         marginHorizontal: 32,
         padding: 20,
         borderRadius: 20,
         elevation: 8,
         marginBottom: 16
         
       }}
       
       >
         <View style={{
           flexDirection:"row",
           justifyContent:"space-between",
           marginVertical: 8
           }}
           >
             
           
           <Text>COMPETENCES</Text>
           <MaterialCommunityIcons name="pen" size={20} color="black" />
         </View>
         <ScrollView horizontal style={{ marginVertical: 8 }}>
           {skillIcons.map(skill => (
             <View
             style={{
               width: 48,
               height: 48,
               borderRadius: 24,
               borderWidth: 2,
               borderColor: Colors.theme,
               justifyContent: "center",
               alignItems: "center",
               marginHorizontal: 5
               
             }}
             >
                <MaterialCommunityIcons 
                name={skill} 
                size={30}
                style={{ color: Colors.theme }}
                />
             </View>
          ))}
         </ScrollView>
       </View>

       <ScrollView horizontal >
         {mockData.map(({ title, image, link, linkText}, index) => (
           <View key={index} style={{
             backgroundColor:Colors.theme,
             marginHorizontal:8,
             padding:14,
             borderRadius:16,
             marginBottom:16,
             alignItems:"center",
             width: Layout.width * 0.6
             
           }}
           >
             <Text style={{ fontSize: 20, color: Colors.white }}>{title}</Text>
             <Image 
             source={image}
             style={{
               
               marginVertical: 10,
               width: 170,
               height: 120,
             }}
             />
             <TouchableOpacity>
               <View>
               <Pressable style={styles.button} onPress={ ()=>{ Linking.openURL(link)}} >
                 <Text style={{ color: Colors.theme}}>{linkText}</Text>
                 </Pressable>
 
               </View>
             </TouchableOpacity>
           </View>
         ))}
       </ScrollView>
       





       <View
       style={{

         backgroundColor: Colors.white,
         marginHorizontal: 32,
         padding: 20,
         borderRadius: 20,
         elevation: 8,
         marginBottom: 16
         
       }}
       
       >
         <View style={{
           flexDirection:"row",
           justifyContent:"space-between",
           marginVertical: 8
           }}
           >
             
           
           <Text>Statistiques</Text>
           <MaterialCommunityIcons name="trending-up" size={20} color="black" />
         </View>

         <View style={{
           flexDirection: "row",
           justifyContent: "center",
           marginVertical: 8,
           alignItems: "flex-end"
         }}>
         <Text style={{ fontSize: 50, color: Colors.theme }}>100</Text>
         <Text style={{ color: Colors.greyish }}>CUPS OF COFFEE</Text>
         </View>

          <View style={{
           flexDirection: "row",
           justifyContent: "center",
           marginVertical: 8,
           alignItems: "flex-end"
         }}>
         <Text style={{ color: Colors.greyish }}>PROJETS RÉALISÉS</Text>
         <Text style={{ fontSize: 50, color: Colors.theme }}>241</Text>
         </View>

         <View style={{
           flexDirection: "row",
           justifyContent: "center",
           marginVertical: 8,
           alignItems: "flex-end"
         }}>
         <Text style={{ fontSize: 50, color: Colors.theme }}>420</Text>
         <Text style={{ color: Colors.greyish }}>CLIENTS HEUREUX</Text>
         </View>

         
         
     
       </View>

       <View
       style={{

         backgroundColor: Colors.white,
         marginHorizontal: 32,
         padding: 20,
         borderRadius: 20,
         elevation: 8,
         marginBottom: 16
         
       }}
       
       >
         <View style={{
           flexDirection:"row",
           justifyContent:"space-between",
           marginVertical: 8
           }}
           >
             
           
           <Text>Trouve-moi</Text>
         </View>
         <ScrollView horizontal style={{ marginVertical: 8 }}>
           
            
                <MaterialCommunityIcons 
                name="facebook" 
                size={30}
                style={{ color: Colors.theme }}
                />
                <MaterialCommunityIcons 
                name="twitter" 
                size={30}
                style={{ color: Colors.theme }}
                />
                <MaterialCommunityIcons 
                name="instagram" 
                size={30}
                style={{ color: Colors.theme }}
                />
                <AntDesign 
                name="dribbble" 
                size={30}
                style={{ color: Colors.theme }}
                />
                <AntDesign
                name="behance" 
                size={30}
                style={{ color: Colors.theme }}
                />
               
         </ScrollView>
       </View>

    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    
  },
});
