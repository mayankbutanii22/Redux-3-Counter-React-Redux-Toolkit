import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counter",
    initialState : { counterVal : 0},
    reducers : {
      increment : (state) => {
        state.counterVal ++;
      },
      decrement : (state) => {
        state.counterVal --;
      },
      add : (state , action) => {
        state.counterVal += Number(action.payload);
      },
      subtract : (state , action) => {
        state.counterVal -= Number(action.payload);
      },
      privacyToggle : (state,action) => {
        console.log(state,action);
      }
    }
  });
  
  export const counterActions = counterSlice.actions;
  
  export default counterSlice;