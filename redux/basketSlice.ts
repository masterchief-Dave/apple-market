import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit'
import { RootState } from "./store";
interface BasketState {
  items: Product[]
}
const initialState: BasketState = {
  items: []
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state: BasketState, action: PayloadAction<{id: string}>) => {
      // const index  = state.items.findIndex((item) => {
      //  return item._id === action.payload.id
      // })

      state.items.filter((item) => {
        return item._id !== action.payload.id
      })
    }
  }
})

export const {addToBasket, removeFromBasket} = basketSlice.actions

// selectors 
export const selectBasketItems = (state: RootState) => state.basket
export const selectBasketItemsWithId = (state: RootState, id:string) => (
  state.basket.items.filter((item: Product) => item._id === id)
)
export const selectBasketTotal = (state: RootState) => (
  state.basket.items.reduce((total: number, item: Product) => total += item.price, 0)
)

export default basketSlice.reducer