import { IBlogsState } from "../../interfaces/blogs";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IParameters } from "../../interfaces/global";
import axios from "axios";


const initialState: IBlogsState = {
	blogs: []
};

	export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async (parameters:IParameters) => {
		const {page, limit} = parameters
		let queryParameters: string = ''
		if(page){
			queryParameters += `_page=${page}`
		}
		if(limit){
			queryParameters += `_limit=${limit}`
		}
		const response = await axios.get(`http://localhost:3001/blogs${queryParameters ? `/?${queryParameters}` : ''}`);
		return response.data;
	});

const BlogsSlice = createSlice({
	name: "blogs",
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(fetchBlogs.pending, (state, action) => {
			state.blogs = [];
		});

		builder.addCase(fetchBlogs.fulfilled, (state, action) => {
			state.blogs = action.payload;
		});

		builder.addCase(fetchBlogs.rejected, (state, action) => {
			state.blogs = [];
		});
	}
});

export const {} = BlogsSlice.actions;
export default BlogsSlice.reducer;