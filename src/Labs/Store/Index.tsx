import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../A4/ReduxExamples/HelloRedux/helloReducer.tsx";
import CounterReducer from "../A4/ReduxExamples/CounterRedux/CounterReducer.tsx";
import addReducer from "../A4/ReduxExamples/AddRedux/addReducer.tsx"; 
import todosReducer from "../A4/ReduxExamples/todos/todosReducer.tsx";
const store = configureStore({
  reducer: { helloReducer, CounterReducer, addReducer,todosReducer },
});
export default store;