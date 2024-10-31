import React from "react";
import { assignments } from "../../Database/database.tsx";
import { useParams } from "react-router";

export default function AssignmentDetails() {
  const { cid, aid } = useParams();

  var currAssingment = assignments.filter((assignment) => assignment._id == aid).map((assignment) => assignment)[0];

  return (
    <div>
      <h1>Assignment Details:</h1>
      <h3>{currAssingment.title}</h3>
      <h6>Due : {currAssingment.dueDate} | Points : {currAssingment.points}</h6>
      <h6>Available From : {currAssingment.availableFrom} | Available Until : {currAssingment.availableUntil}</h6>
      <p>{currAssingment.description}</p>
    </div>
  );
}
