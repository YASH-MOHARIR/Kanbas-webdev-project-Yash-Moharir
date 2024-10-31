import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer.ts";
import accountReducer from "../Account/reducer.ts"; 
import assignmentsReducer from "../Courses/Assingments/reducer.ts"
import enrollmentsReducer from "../Dashboard/enrollementsReducer.ts";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer
  },
});
export default store;