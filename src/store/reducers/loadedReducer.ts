import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loaded: false
};

const loadedSlice = createSlice({
	name: "loaded",
	initialState,
	reducers: {
		loading(state, action) {
			state.loaded = !action.payload;
		},
	}
});

export const { loading } = loadedSlice.actions;
export default loadedSlice.reducer;
