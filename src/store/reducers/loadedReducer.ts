import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false
};

const loadedSlice = createSlice({
	name: "loaded",
	initialState,
	reducers: {
		loading(state, action) {
			state.isLoading = !action.payload;
		},
	}
});

export const { loading } = loadedSlice.actions;
export default loadedSlice.reducer;
