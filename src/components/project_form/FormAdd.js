import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import Swal from 'sweetalert2'
import {
  testProjectMager,
  testEmployee,
  testStatus,
} from "../../test/testProjects";
import { DataContext } from "../../context/DataContext";


const FormAdd = () => {

  const dataContext = useContext(DataContext)

  const [initialValues, setInitialValues] = useState({
    ProjectName: "",
      Description: "",
      ProjectManager: "",
      AssignedTo: "",
      Status: "",
      creationDate: "",
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    setInitialValues({
      ProjectName: data.ProjectName,
      Description: data.Description,
      ProjectManager: data.ProjectManager,
      AssignedTo: data.AssignedTo,
      Status: data.Status,
      creationDate: dataContext.getDate(),
    });
    e.target.reset();
    Swal.fire({
      title: 'Success!',
      text: 'Project created!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    dataContext.setNewProjects((prev)=>[...prev, initialValues])
    console.log(initialValues)
  };

  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>Project name</label>
        <input
          type="text"
          {...register("ProjectName", { required: true, maxLength: 20 })}
        />
        {errors.ProjectName?.type === "required" && (
          <p>Project name is required</p>
        )}
        <label>Description</label>
        <input
          type="text"
          {...register("Description", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.Description?.type === "required" && (
          <p>Description is required</p>
        )}
        <label>Project manager</label>
        <select {...register("ProjectManager", { required: true })}>
          <option></option>
          {testProjectMager.map((pm, index) => (
            <option key={index}>{pm.project_manager}</option>
          ))}
        </select>
        {errors.ProjectManager?.type === "required" && (
          <p>Select a Project manager</p>
        )}
        <label>Assigned to</label>
        <select {...register("AssignedTo", { required: true })}>
          <option></option>
          {testEmployee.map((empoyee, index) => (
            <option key={index}>{empoyee.employee}</option>
          ))}
        </select>
        {errors.AssignedTo?.type === "required" && (
          <p>Assign to an employee is required</p>
        )}
        <label>Status</label>
        <select {...register("Status", { required: true })}>
          <option></option>
          {testStatus.map((status, index) => (
            <option key={index}>{status}</option>
          ))}
        </select>
        {errors.Status?.type === "required" && <p>Status is required</p>}

        <input
          type="submit"
          className="form-submit-btn"
          value="Create project"
        />
      </form>
    </div>
  );
};

export default FormAdd;
