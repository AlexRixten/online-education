import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  limit: 6,
  category: 1,
  sort: 1,
  search: ""
};

const filtersLecturesSlice = createSlice({
  name: "filtersLectures",
  initialState,
  reducers: {
	setFilter(state, action) {

	}
  }
});

export const { setFilter } = filtersLecturesSlice.actions;
export default filtersLecturesSlice.reducer;