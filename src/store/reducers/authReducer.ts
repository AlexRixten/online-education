import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuth: false,
	status: "pending"
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logIn(state) {
			state.isAuth = true;
		},
		logOut(state) {
			state.isAuth = false;
		}
	}
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
