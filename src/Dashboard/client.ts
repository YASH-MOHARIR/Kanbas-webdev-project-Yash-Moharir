import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const getAllEnrollments = async () => {
  const enrollments = await axios.get(`${ENROLLMENTS_API}`);
  return enrollments;
};

export const enrollUserInCourse = async (userID, courseID) => {
    console.log("enrolling..");
  console.log(userID, courseID);
  const newEnollment = await axios.post(`${ENROLLMENTS_API}/enroll/${userID}/${courseID}`);
  return newEnollment;
};

export const unEnrollFromCourse = async (userID, courseID) => {
    console.log("unenrolling..");
    
  console.log(userID, courseID);
 await axios.delete(`${ENROLLMENTS_API}/unenroll/${userID}/${courseID}`);

};
