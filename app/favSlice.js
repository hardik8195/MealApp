import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    favourites:[
        {
            id:1,
            text:"favourites meals",
            imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'
        }
    ]
}

export const favSlice = createSlice({
    name:'favourite',
    initialState,
    reducers:{
        addItems:(state,action) => {
            const favourite = {
                id:action.payload.id,
                text:action.payload.text,
                imgUrl:action.payload.imgUrl
            
            }
            state.favourites.push(favourite)
        },
        deleteItems:(state,action) => {
            state.favourites = state.favourites.filter((item)=>item.id!==action.payload.id)
        }
    }
})

export  const {addItems,deleteItems} = favSlice.actions
export default favSlice.reducer
