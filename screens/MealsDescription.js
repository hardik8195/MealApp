import { useNavigation, useRoute } from "@react-navigation/native"
import { Button, FlatList, ScrollView, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItems, deleteItems } from "../app/favSlice"
import { AntDesign } from '@expo/vector-icons'; 
export default function MealsDescription() {
    const route = useRoute()
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const favourites = useSelector((state)=>state.favourites)
    const { MealId } = route.params
    const checkItem = favourites.find((item)=>(
        item.id===MealId
    ))
    function favouriteItem(){
        if(!checkItem){
        dispatch(addItems(
            {
                id:SelectedMeals.id,
                text:SelectedMeals.title,
                imgUrl:SelectedMeals.imageUrl
            }
            ))
        }
        else{
            dispatch(deleteItems(checkItem))
        }
    }

    useEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return (
                    <Button title={checkItem?"DeleteFav":"AddFav"} onPress={favouriteItem} />
                )
            }
        })
    },[favouriteItem])

    const SelectedMeals = MEALS.find((meal) => (
        meal.id === MealId
    ))
    let countIN = 1
    let countSteps = 1

    return (
        <ScrollView>
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', margin: 20 }}>
                <Text style={{ fontSize: 20, fontStyle: 'normal' }}>{SelectedMeals.title}</Text>
            </View>
            <View>
                <View style={{ alignItems: "center" ,marginBottom:15}}>
                    <Text style={{ fontSize: 15, fontStyle: 'normal' }}>INGREDINTS</Text>
                </View>
                {

                    SelectedMeals.ingredients.map((MealIngredient) => (
                        <Text key={MealIngredient}>{countIN++}.) {MealIngredient}</Text>
                    ))

                }
            </View>
            <View>
            <View style={{alignItems: "center" ,marginBottom:15}}>
                <Text style={{ fontSize: 15, fontStyle: 'normal' }}>STEPS</Text>
            </View>
                {

                    SelectedMeals.steps.map((step) => (
                        <Text key={step}>{countSteps++}.) {step}</Text>
                    ))

                }
            </View>
        </View>
        </ScrollView>
    )
}
