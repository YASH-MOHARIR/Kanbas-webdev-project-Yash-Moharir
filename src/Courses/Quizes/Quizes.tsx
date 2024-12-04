import React, { useEffect, useState } from "react";
import "../Assingments/Assignments.css";
import "./Quizes.css";
import { LiaSearchSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { RxRocket } from "react-icons/rx";
import { MdBlock } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import * as quizClient from "./client.ts";

export default function Quizes() {
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

  const [quizes, setQuizes] = useState([
    // {
    //   _id: "123321",
    //   title: "Q1 - SAMPLE QUIZ",
    //   course: "CS101",
    //   published: true,
    //   description: "This quiz is dummy description.",
    //   points: 100,
    //   questionNumber: 10,
    //   availableFrom: "2024-12-20",
    //   dueDate: "2024-12-30",
    // },
  ]);

  const fetchQuizesInCourse = async (courseID) => {
    const allQuizes = await quizClient.fetchQuizesInCourse(courseID);
    setQuizes(allQuizes);
  };

  const deleteQuiz = async (courseID, quizID) => {
    await quizClient.deleteQuiz(courseID, quizID);
    fetchQuizesInCourse(cid);
  };

  const updatePublish = async (quiz) => {
    await quizClient.updateQuiz({ ...quiz, published: !quiz.published });
    fetchQuizesInCourse(cid);
  };

  useEffect(() => {
    fetchQuizesInCourse(cid);
  }, [cid]);

  const today = new Date();

  return (
    <div id="wd-assignments">
      <div className="search actions">
        <div className="input-group  mb-3 w-50 d-inline " id="wd-search-quiz">
          <span className="input-group-text d-inline search-icon" id="basic-addon1">
            <LiaSearchSolid />
          </span>
          <input
            type="text"
            className="form-control w-50 d-inline"
            placeholder="Search..."
            aria-describedby="basic-addon1"></input>
        </div>
        {isFaculty ? (
          <div className="action-btns">
            <Link key={cid} to={`/Courses/${cid}/Quizes/new`}>
              <button className="btn btn-danger mx-3" id="wd-add-quiz">
                + Quizes
              </button>
              <button className="btn btn-danger mx-3" id="wd-add-quiz">
                <BsThreeDotsVertical className="grip-icon" />
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <hr />
      <div className="quiz-heading mt-3 p-3 bg-secondary">
        <h3 id="wd-assignments-title">
          <IoMdArrowDropdown className="mx-3" />
          Assignment Quizes
        </h3>
      </div>

       {(quizes.length == 0)?
       <div className="disply-3 h1 text-center p-5">
        No Quizes here, the faculty needs to add quizes.
       </div>
       :
      <ul className="list-group quiz-cards " id="wd-quiz-list">
        {quizes.map((quiz: any, index: number) => {
          // Convert availableFrom and dueDate strings to Date objects
          const availableFromDate = new Date(quiz.availableFrom);
          const dueDate = new Date(quiz.dueDate);
          // quiz should be either published or the viewer must be a faulty 
          if(quiz.published || isFaculty)
          return (
            <li key={index} className="wd-quiz-list-item list-group-item quiz-card p-4">
              <RxRocket className="document-editor-icon mx-3" />

              <div className="card-body d-inline ml-5">
                <Link
                  className="wd-quiz-link "
                  // to={`/Courses/${cid}/Quizes/${quiz._id}`}
                  to={`/Courses/${cid}/Quizes/${quiz._id}/${isFaculty ? "" : "attempt"}`}
                >
                  {quiz.title}
                </Link>

                <p>
                  {/* Status Logic */}
                  {today < availableFromDate && <>Not available until {quiz.availableFrom.split("T")[0]}</>}
                  {today >= availableFromDate && today <= dueDate && <>Available</>}
                  {today > dueDate && <>Closed</>}
                  {/* Other Quiz Details */} | Due {quiz.dueDate.split("T")[0]} | {quiz.points} pts |{" "}
                  {quiz.questionNumber} Questions | Score :
                </p>
              </div>

              <div className="card-right">
                {isFaculty ? (
                  <div className="quiz-control">
                    {quiz.published ? (
                      <FaCheckCircle className="check-icon text-success" />
                    ) : (
                      <MdBlock className="unpublished-icon text-danger" />
                    )}
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle-btn"
                        type="button"
                        id="quizContextMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <BsThreeDotsVertical />
                      </button>
                      <ul className="dropdown-menu z-10 " aria-labelledby="quizContextMenuButton">
                        <li>
                          <button className="dropdown-item">
                            <Link className="wd-quiz-link nav-link " to={`/Courses/${cid}/Quizes/${quiz._id}/update`}>
                              Edit
                            </Link>
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item text-danger"
                            data-bs-toggle="modal"
                            data-bs-target={`#${quiz._id}`}>
                            Delete
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" id="publishButton" onClick={() => updatePublish(quiz)}>
                            {" "}
                            {quiz.published ? "Un-Publish" : "Publish"}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* Delete Modal */}
              <div className="modal fade" id={quiz._id}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Are you sure you want to delete?
                      </h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Cancel
                      </button>
                      <button
                        onClick={() => deleteQuiz(cid, quiz._id)}
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );

        })}
      </ul>
      }
    </div>
  );
}
 
