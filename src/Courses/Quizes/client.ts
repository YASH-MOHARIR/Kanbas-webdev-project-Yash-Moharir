import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZES_API = `${REMOTE_SERVER}/api/quizes`;
const axiosWithCredentials = axios.create({ withCredentials: true });


export const createNewQuiz = async (newQuizData,courseId) => {
    const { data } = await axios.post(`${QUIZES_API}/${courseId}/new`, newQuizData);
    return data;
  };

export const fetchQuizesInCourse = async (courseID) => {
    const { data } = await axios.get(`${QUIZES_API}/${courseID}`);
    return data;
  };

export const fetchQuizesInCourseByID = async (courseID,quizID) => {
    const { data } = await axios.get(`${QUIZES_API}/${courseID}/${quizID}`);
    console.log("fetch single quiz", data);  
    return data;
  };
 
  export const deleteQuiz = async (courseID, quizID) => {
    const { data } = await axios.delete(`${QUIZES_API}/${courseID}/${quizID}`);
    return data;
  };
  

  export const updateQuiz = async (updatedQuiz) => {
    const { data } = await axios.put(`${QUIZES_API}/update`, updatedQuiz);
    console.log("updated ", data);
    
    return data;
  };
  