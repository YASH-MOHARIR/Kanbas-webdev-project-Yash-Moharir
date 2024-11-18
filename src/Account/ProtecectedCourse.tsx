import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedCourse({ children }: { children: any }) {

    const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  console.log(currentUser);
  const isEnrolled = enrollments.some((enrollment) => enrollment.user === currentUser._id && enrollment.course === cid);

//   if (currentUser && isEnrolled) {
//     return children;
//   } else {
//     return <Navigate to="/Dashboard" />;
// }
return <Navigate to="/Dashboard" />;

}
