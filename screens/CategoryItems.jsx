import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import { FlatGrid } from "react-native-super-grid"
import { useNavigation } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
export default function CategoryItems(){
    const navigation=useNavigation()
    const Drawer = createDrawerNavigator()
    return (
        <FlatGrid
            data = {CATEGORIES}
            spacing={20}
            style={styles.gridView}
            keyExtractor={(item)=>item.id}
            renderItem={(itemData)=>(
                <Pressable
                onPress={()=>navigation.navigate('MealsOverView',{
                    CategoryId:itemData.item.id,
                    CategoryName:itemData.item.title
                })} 
                android_ripple={{color:'white'}}
                >
                <View style={[styles.itemContainer,{backgroundColor:itemData.item.color}]}>
                    <Text>{itemData.item.title}</Text>
                </View>
                </Pressable>
            )}
        />
    )
}
const styles = StyleSheet.create({
    gridView:{
        flex:1,
    },
    itemContainer:{
        height:170,
        width:170,
        justifyContent:'center',
        alignItems:'center', 
        borderRadius:20,
        elevation:4
    }
})