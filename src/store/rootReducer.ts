import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import coursesReducer from "./reducers/coursesReducer";
import loadedReducer from "./reducers/loadedReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	courses: coursesReducer,
	loaded: loadedReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;