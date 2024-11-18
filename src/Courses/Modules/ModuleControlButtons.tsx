import React from "react";
import GreenCheckmark from "./GreenCheckmark.tsx";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

  return (
    <div className="float-end d-flex ">

      {isFaculty && (
        <div className="module-edit-btns">
          <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
          <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />
        </div>
      )}
      <div>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      </div>
    </div>
  );
}
