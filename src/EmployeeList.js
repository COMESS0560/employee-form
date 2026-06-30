import React from "react";
import { Link } from "react-router-dom";

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>

      {employees.length === 0 ? (
        <p>No employees have been added yet.</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              <Link to={`/employees/${employee.id}`}>
                {employee.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;