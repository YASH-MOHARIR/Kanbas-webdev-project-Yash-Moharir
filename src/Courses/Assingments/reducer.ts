import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database/database.tsx"; 
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {

    //name, description, points, due date, available from date, and available until date.

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        title: assignment.title,
        description : assignment.description,
        _id: assignment._id, 
        course: assignment.course,
        points:assignment.points,
        dueDate:assignment.dueDate,
        availableFrom:  assignment.availableFrom,
        availableUntil: assignment.availableUntil
      };
      state.assignments = [...state.assignments, newAssignment] as any;
      console.log(newAssignment);
      
    },


    deleteAssignment: (state, { payload: assignmentID }) => {
      // eslint-disable-next-line no-restricted-globals
      const userResponse = confirm("Are you sure you want to delete?");
 
      if (userResponse) {
        state.assignments = state.assignments.filter(
          (a: any) => a._id !== assignmentID);
      } 

    },
    
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentID }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentID ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
 
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
assignmentsSlice.actions;

export default assignmentsSlice.reducer;

