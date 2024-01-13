import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useEffect } from "react";

export default function MealsOverview() {
    const route = useRoute()
    const navigation = useNavigation()
    const { CategoryId, CategoryName } = route.params
    const diplayedMeals = MEALS.filter((MealItem) => (
        MealItem.categoryIds.indexOf(CategoryId) >= 0
    ))
    useEffect(() => {
        navigation.setOptions({
            title: CategoryName
        })
    }, [navigation, CategoryName])

    return (
        <View style={styles.container}>
            {/* <Text>MEAL Overview section - {catName} and {catId}</Text> */}
            <FlatList
                data={diplayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => (
                    <View>
                        <Pressable onPress={() => navigation.navigate('MealsDescription', {
                            MealId: itemData.item.id,

                        })}>
                            <View style={styles.imageContainer}>

                                <Image source={{ uri: itemData.item.imageUrl }} style={styles.image} />
                                <Text style={styles.title}>{itemData.item.title}</Text>
                                <View style={{ flexDirection: "row", gap: 10 }}>
                                    <Text>{itemData.item.duration}m</Text>
                                    <Text>{itemData.item.affordability}</Text>
                                    <Text>{itemData.item.complexity}</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>

                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        margin: 20,
        alignItems: 'center',
        elevation: 20,
        backgroundColor: 'white',
        borderRadius: 10
    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 250,
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
})