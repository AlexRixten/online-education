import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EStatusLoading } from "../../enums/statusLoading.enum";
import { ICoursesState } from "../../interfaces/courses";

interface IParameters{
	page?: number;
	limit?: number;
}

const initialState: ICoursesState = {
	courses: [],
	status: EStatusLoading.PENDING
};

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async (parameters:IParameters) => {
	const {page, limit} = parameters
	let queryParameters: string = ''
	if(page){
		queryParameters += `_page=${page}`
	}
	if(limit){
		queryParameters += `_limit=${limit}`
	}
	const response = await axios.get(`http://localhost:3001/courses${queryParameters ? `/?${queryParameters}` : ''}`);
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
