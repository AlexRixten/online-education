import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EStatusLoading } from "../../enums/statusLoading.enum";

const initialState = {
	courses: [],
	status: EStatusLoading.PENDING
};

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
	const response = await axios.get("http://localhost:3001/courses");
	return response.data;
});

const coursesSlice = createSlice({
	name: "courses",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCourses.pending, (state, action) => {
			state.status = EStatusLoading.PENDING;
			state.courses = [];
		});

		builder.addCase(fetchCourses.fulfilled, (state, action) => {
			state.courses = action.payload;
			state.status = EStatusLoading.FULFILLED;
		});

		builder.addCase(fetchCourses.rejected, (state, action) => {
			state.status = EStatusLoading.REJECTED;
			state.courses = [];
		});
	}
});

export const {} = coursesSlice.actions;
export default coursesSlice.reducer;
