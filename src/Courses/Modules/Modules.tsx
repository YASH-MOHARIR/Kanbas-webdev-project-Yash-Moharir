import React, { useEffect, useState } from "react";
import ModulesControls from "./ModulesControls.tsx";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { setModules,addModule, editModule, updateModule, deleteModule } from "./reducer.ts";
import { useSelector, useDispatch } from "react-redux";

import * as coursesClient from "../client.ts";
import * as modulesClient from "./client.ts";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };


  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };


  useEffect(() => {
    fetchModules();
  }, []);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  return (
    <div className="">
      {isFaculty && (
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={ createModuleForCourse}
        />
      )}

      <ul id="wd-modules" className="list-group rounded-0 m-3">
        {modules 
          .map((module: any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray w-100">
              <div className="wd-title p-3 ps-2 bg-secondary w-100">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing ? (
                  module.name
                ) : (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={ removeModule}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0 w-100">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1 w-100">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                      <ModuleControlButtons moduleId={module._id} deleteModule={deleteModule} editModule={editModule} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
