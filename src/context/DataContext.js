import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  let date = new Date();
  const getDate = () => {
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const [newProjects, setNewProjects] = useState([
    {
      ProjectName: "Create project",
      Description: "This is a description",
      ProjectManager: "Eve Breffit",
      AssignedTo: "Julián Bleker",
      Status: "Enable",
      creationDate: getDate(),
    },
    {
      ProjectName: "Assigned project to",
      Description: "This is a description",
      ProjectManager: "Eve Breffit",
      AssignedTo: "Julián Bleker",
      Status: "Enable",
      creationDate: getDate(),
    },
    {
      ProjectName: "Modify project",
      Description: "This is a description",
      ProjectManager: "Eve Breffit",
      AssignedTo: "Julián Bleker",
      Status: "Enable",
      creationDate: getDate(),
    },
  ]);

  const deleteProject = (projectName) => {
    setNewProjects((prev) => prev.filter((f) => f.ProjectName !== projectName));
    console.log(projectName);
  };

  return (
    <DataContext.Provider
      value={{
        newProjects,
        setNewProjects,
        deleteProject,
        getDate,
        searchQuery,
        setSearchQuery,
        query,
        setQuery,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
