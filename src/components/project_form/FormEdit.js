import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import {
  testProjectMager,
  testEmployee,
  testStatus,
} from "../../test/testProjects";
import { DataContext } from "../../context/DataContext";
const FormEdit = (name) => {
  const { projectName } = useParams();
  const dataContext = useContext(DataContext);

  let projectToEdit = dataContext.newProjects.filter(
    (f) => f.ProjectName === name.project
  );

  const [editValues, setEditValues] = useState({
    ProjectName: projectToEdit[0].ProjectName,
    Description: projectToEdit[0].Description,
    ProjectManager: projectToEdit[0].ProjectManager,
    AssignedTo: projectToEdit[0].AssignedTo,
    Status: projectToEdit[0].Status,
    creationDate: projectToEdit[0].creationDate,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        setEditValues({
          ProjectName: data.ProjectName,
          Description: data.Description,
          ProjectManager: data.ProjectManager,
          AssignedTo: data.AssignedTo,
          Status: data.Status,
          creationDate: projectToEdit[0].creationDate,
        });
        e.target.reset();

        dataContext.deleteProject(projectToEdit[0].ProjectName);
        dataContext.setNewProjects((prev) => [...prev, editValues]);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>Project name</label>
        <input
          type="text"
          {...register("ProjectName", { required: true, maxLength: 20 })}
          defaultValue={projectToEdit[0].ProjectName}
        />
        {errors.ProjectName?.type === "required" && (
          <p>Project name is required</p>
        )}
        <label>Description</label>
        <input
          type="text"
          {...register("Description", {
            required: true,
            min: 3,
            maxLength: 100,
          })}
          defaultValue={projectToEdit[0].Description}
        />
        {errors.Description?.type === "required" && (
          <p>Description is required</p>
        )}
        <label>Project manager</label>
        <select {...register("ProjectManager", { required: true })}>
          <option>{projectToEdit[0].ProjectManager}</option>
          {testProjectMager.map((pm, index) => (
            <option key={index}>{pm.project_manager}</option>
          ))}
        </select>
        {errors.ProjectManager?.type === "required" && (
          <p>Select a Project manager</p>
        )}
        <label>Assigned to</label>
        <select {...register("AssignedTo", { required: true })}>
          <option>{projectToEdit[0].AssignedTo}</option>
          {testEmployee.map((empoyee, index) => (
            <option key={index}>{empoyee.employee}</option>
          ))}
        </select>
        {errors.AssignedTo?.type === "required" && (
          <p>Assign to an employee is required</p>
        )}
        <label>Status</label>
        <select {...register("Status", { required: true })}>
          <option>{projectToEdit[0].Status}</option>
          {testStatus.map((status, index) => (
            <option key={index}>{status}</option>
          ))}
        </select>
        {errors.AssignedTo?.type === "required" && <p>Status is required</p>}

        <Link to={"/"} className="form-cancel-btn" role="button">
          Cancel
        </Link>
        <input type="submit" className="form-submit-btn" value="Save changes" />
      </form>
    </div>
  );
};

export default FormEdit;
