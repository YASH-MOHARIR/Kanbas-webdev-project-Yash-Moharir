import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database/database.tsx";

const initialState = {
  enrollments: enrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: enrollment._id,
        user: enrollment.user,
        course: enrollment.course,
      };

      state.enrollments = [...state.enrollments, newEnrollment] as any;
      console.log(state.enrollments);
    },
    deleteEnrollment: (state, { payload: enrollmentID }) => {
        console.log(enrollmentID);
        
        state.enrollments = state.enrollments.filter((e: any) => !(e.user === enrollmentID.user && e.course === enrollmentID.course));
    },
  },
});

export const { addEnrollment, deleteEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
