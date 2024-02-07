import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userdata: [],
};

export const userdatadata = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    featchinguserdataSuccessful: (state, action) => {
      state.userdata = action.payload;
    },
  },
});

export default userdatadata.reducer;
export const {
  featchinguserdataSuccessful,
} = userdatadata.actions;
