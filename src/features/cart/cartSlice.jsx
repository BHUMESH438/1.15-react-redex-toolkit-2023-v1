import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
import axios from 'axios';
import { openmodal } from '../modal/modalSlice';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
  isLoading: false
};

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkapi) => {
  try {
    const res = await axios.get(url);
    console.log(res, 'response>>>>>');
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearcart: state => {
      state.cartItem = [];
      state.amount = 0;
      state.total = 0;
      state.isLoading = true;
    },
    removeitem: (state, action) => {
      const itemID = action.payload;
      state.cartItem = state.cartItem.filter(items => {
        return items.id !== itemID;
      });
    },
    increaseitem: (state, { payload }) => {
      const itemID = payload;
      //reducer return the function so that will update the sate
      const ItemUP = state.cartItem.find(item => item.id === itemID);
      ItemUP.amount = ItemUP.amount + 1;
    },
    decreaseitem: (state, action) => {
      const itemID = action.payload;
      const itemDown = state.cartItem.find(item => item.id === itemID);
      itemDown.amount = itemDown.amount - 1;
    },
    calculateTotals: state => {
      let amount = 0;
      let total = 0;
      state.cartItem.forEach(item => {
        amount = amount + item.amount;
        total = total + item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCartItems.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItem = action.payload;
      })
      .addCase(getCartItems.rejected, state => {
        state.isLoading = true;
      });
  }
  // extraReducers: {
  //   [getCartItems.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     console.log(action);
  //     state.isLoading = false;
  //     state.cartItem = action.payload;
  //   },
  //   [getCartItems.rejected]: state => {
  //     state.isLoading = true;
  //   }
  // }
});

console.log(cartSlice);
console.log(cartSlice.reducer);
export const { clearcart, removeitem, increaseitem, calculateTotals, decreaseitem } = cartSlice.actions;
export default cartSlice.reducer;
