import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    cacheSuggestion: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSuggestion } = cacheSlice.actions;
export default cacheSlice.reducer;
