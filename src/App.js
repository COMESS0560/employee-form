import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmployee((previousEmployee) => ({
      ...previousEmployee,
      [name]: value,
    }));
  };

  const addEmployee = (event) => {
    event.preventDefault();

    if (!employee.name || !employee.email || !employee.phone) {
      alert("Please fill out all fields.");
      return;
    }

    setEmployees((previousEmployees) => [...previousEmployees, employee]);

    setEmployee({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="App">
      <div className="form-card">
        <h1>Add Employee</h1>

        <form onSubmit={addEmployee}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Add</button>
        </form>

        <h2>Employee List</h2>

        <ul>
          {employees.map((item, index) => (
            <li key={index}>
              {item.name} - {item.email} - {item.phone}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;