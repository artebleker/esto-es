import React from "react";
import "./projectTable.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { testProjects } from "../../test/testProjects";
const ProjectTable = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Project info</th>
            <th>Project Manager</th>
            <th>Assigned to</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {testProjects.map((project, index) => (
            <tr key={index}>
              <th className="project-info">
                {project.name}
                <span>Creation date: {project.creation_date}</span>
              </th>
              <th className="project-manager">
                <div>
                  {project.project_manager
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                {project.project_manager}
              </th>
              <th className="assigned-to">
                <img src={project.photo} alt="" />
                {project.assigned_to}
              </th>
              <th className="status">{project.status}</th>
              <th className="action">
                <button>
                  <BiDotsVerticalRounded />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
