import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EStatusLoading } from "../../enums/statusLoading.enum";
import axios from "axios";
import { IParameters } from "../../interfaces/global";
import { ILecturesState } from "../../interfaces/lectures";

const initialState: ILecturesState = {
  lectures: [],
  filters: {
	page: 1,
	limit: 3,
	category: 1,
	sort: 'asc',
	search: ""
  },
  status: EStatusLoading.PENDING
};

export const fetchLectures = createAsyncThunk("lectures/fetchLectures", async (parameters: IParameters) => {
  const { page, limit, category, sort, search } = parameters;
  let queryParameters: string = "";

  if (page) {
	queryParameters += `_page=${page}`;
  }
  if (limit) {
	queryParameters += `&_limit=${limit}`;
  }
  if (category) {
	queryParameters += `&category_like=${category}`;
  }
  if (sort) {
	queryParameters += `&_sort=date&_order=${sort}`;
  }
  if (search) {
	queryParameters += `&title_like=${search}`;
  }

  const response = await axios.get(`http://localhost:3001/lectures${queryParameters ? `/?${queryParameters}` : ""}`);
  return response.data;
});

const lecturesSlice = createSlice({
  name: "lectures",
  initialState,
  reducers: {
	setFilters(state, action) {
	  const { page, limit, category, sort, search  } = action.payload;
	  if (page) {
		state.filters.page = page;
	  }
	  if (limit) {
		state.filters.limit = limit;
	  }
	  if (category) {
		state.filters.category = category;
	  }
	  if(sort){
		state.filters.sort = sort;
	  }
	  if(search || search === ''){
		state.filters.search = search;
	  }
	}
  },
  extraReducers: (builder) => {
	builder.addCase(fetchLectures.pending, (state, action) => {
	  state.status = EStatusLoading.PENDING;
	  state.lectures = [];
	});

	builder.addCase(fetchLectures.fulfilled, (state, action) => {
	  state.lectures = action.payload;
	  state.status = EStatusLoading.FULFILLED;
	});

	builder.addCase(fetchLectures.rejected, (state, action) => {
	  state.status = EStatusLoading.REJECTED;
	  state.lectures = [];
	});
  }
});

export const { setFilters } = lecturesSlice.actions;

export default lecturesSlice.reducer;