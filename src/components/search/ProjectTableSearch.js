import React, { useContext, useState, useEffect } from "react";
import { testEmployee } from "../../test/testProjects";
import Options from "../project_table/Options";
import { DataContext } from "../../context/DataContext";
const ProjectTableSearch = () => {
  const dataContext = useContext(DataContext);

  const [showProjects, setShowProjects] = useState(dataContext.seartchQuery);
console.log(showProjects)
  useEffect(() => {
    let q = dataContext.newProjects.find((f)=> f.ProjectName === dataContext.seartchQuery)
    setShowProjects(q);
    // console.log(dataContext.seartchQuery)
  }, []);
  
  return (
    <div className="table-container">
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
        {showProjects &&
              showProjects.map((project, index) => {
                if (project.ProjectName)
                  return (
                    <tr key={project.ProjectName + index} className="tr-grid">
                      <th className="project-info-container">
                        <div className="project-info">
                          <h4>{project.ProjectName}</h4>
                          <p>Creation date: {project.creationDate}</p>
                        </div>
                      </th>
                      <th className="project-manager-th">
                        <div className="project-manager">
                          <div>
                            <h3>
                              {project.ProjectManager.split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </h3>
                          </div>
                          <p>{project.ProjectManager}</p>
                        </div>
                      </th>
                      <th className="assigned-to-th">
                        <div className="assigned-to">
                          <img
                            src={
                              testEmployee.find(
                                (f) => f.employee === project.AssignedTo
                              ).photo
                            }
                            alt={project.AssignedTo}
                          />
                          <p> {project.AssignedTo}</p>
                        </div>
                      </th>
                      <th className="status-th">
                        <div className="status">
                          <p>{project.Status}</p>
                        </div>
                      </th>
                      <th className="options-th">
                        <Options
                          name={project.ProjectName}
                          status={project.Status}
                        />
                      </th>
                    </tr>
                  );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTableSearch;
