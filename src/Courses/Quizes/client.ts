import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZES_API = `${REMOTE_SERVER}/api/quizes`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const createNewQuiz = async (newQuizData, courseId) => {
  const { data } = await axios.post(`${QUIZES_API}/${courseId}/new`, newQuizData);
  return data;
};

export const fetchQuizesInCourse = async (courseID) => {
  const { data } = await axios.get(`${QUIZES_API}/${courseID}`);
  return data;
};

export const fetchQuizesInCourseByID = async (courseID, quizID) => {
  const { data } = await axios.get(`${QUIZES_API}/${courseID}/${quizID}`);
  return data;
};

export const deleteQuiz = async (courseID, quizID) => {
  const { data } = await axios.delete(`${QUIZES_API}/${courseID}/${quizID}`);
  return data;
};

export const updateQuiz = async (updatedQuiz) => {
  const { data } = await axios.put(`${QUIZES_API}/update`, updatedQuiz);
  return data;
};

// Quiz Attempts
export const addQuizAttempt = async (newQuizAttempt) => {
  // /api/quizes/:quizID/attempt/:userID/new
  const { data } = await axios.post(
    `${QUIZES_API}/${newQuizAttempt.quizId}/attempt/${newQuizAttempt.userId}/new`,
    newQuizAttempt
  );
  return data;
};

// /api/quizes/:quizId/attempts/:userId
export const findQuizAttemptDataforUser = async (quizId, userId) => {
  const { data } = await axios.get(`${QUIZES_API}/${quizId}/attempts/${userId}`);
  return data;
};

// /api/quizes/attempts/all/:userId"
export const fetchAllQuizAttempts = async (userId) => {
  const { data } = await axios.get(`${QUIZES_API}/attempts/all/${userId}`);  
  return data;
};
