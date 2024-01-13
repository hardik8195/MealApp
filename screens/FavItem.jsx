import { FlatList, Text,Image ,View, StyleSheet, Pressable} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { deleteItems } from "../app/favSlice"
export default function FavItem(){
    const favourites = useSelector((state)=>state.favourites)
    const dispatch = useDispatch()


    return (
        <FlatList 
            data={favourites}
            renderItem={(itemData)=>(
                <Pressable>
                <Text>{itemData.item.text}</Text>
                <Image  source={{uri:itemData.item.imgUrl}} style={styles.image}/>
                </Pressable>
            )}
        />
    )
}
const styles = StyleSheet.create({
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 250,
        width: '100%'
    },
})