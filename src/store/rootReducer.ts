import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import coursesReducer from "./reducers/coursesReducer";
import loadedReducer from "./reducers/loadedReducer";
import lecturesReducer from "./reducers/lecturesReducer";
import blogsReducer from "./reducers/blogsReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	courses: coursesReducer,
	loaded: loadedReducer,
	lectures: lecturesReducer,
	blogs: blogsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;