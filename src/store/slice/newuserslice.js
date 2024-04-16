import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloggedin: false,
  user: [],
};

export const newUserSlice = createSlice({
  name: "newUserSlice",
  initialState,
  reducers: {
    newUserReducer: (state, action) => {
      console.log(action.payload);

      return {
        ...state,
        user: [...state.user, { ...action.payload }],
      };
    },
    loginReducer: (state, action) => {
      return {
        ...state,
        isloggedin: action.payload.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { newUserReducer, loginReducer } = newUserSlice.actions;

export default newUserSlice.reducer;
