import React from "react";
import "./form.css";
import {
  testProjectMager,
  testEmployee,
  testStatus,
} from "../../test/testProjects";
const Form = () => {
  return (
    <div>
      <form>
        <label>
          Project name
          <input name="Project name" type="text"  />
          {/* value={projectType.name} */}
        </label>
        <label>
          Description
          <input name="Description" type="text"  />
          {/* value={projectType.description} */}
        </label>
        <label>
          Project manager
          <select name="Project manager">
            <option value={null}>Select a person</option>
            {testProjectMager.map((pm, index) => (
              <option key={index} value={pm.project_manager}>
                {pm.project_manager}
              </option>
            ))}
          </select>
        </label>
        <label>
          <select name="">
            <option value={null}>Select a person</option>
            {testEmployee.map((empoyee, index) => (
              <option key={index} value={empoyee.employee}>
                {empoyee.employee}
              </option>
            ))}
          </select>
        </label>
        <label>
          <select name="">
            {testStatus.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
