import React from "react";
import { useParams, Link } from "react-router-dom";

function EmployeeDetails({ employees }) {
  const { id } = useParams();

  const employee = employees.find((emp) => emp.id.toString() === id);

  if (!employee) {
    return (
      <div className="employee-details">
        <h1>Employee Not Found</h1>
        <Link to="/">Back to Employee List</Link>
      </div>
    );
  }

  return (
    <div className="employee-details">
      <h1>Employee Details</h1>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>

      <Link to="/">Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetails;