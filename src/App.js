import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import EmployeeDetails from "./EmployeeDetails";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!employee.name || !employee.email || !employee.phone) {
      alert("Please fill out all fields.");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: employee.name,
      email: employee.email,
      phone: employee.phone
    };

    setEmployees([...employees, newEmployee]);

    setEmployee({
      name: "",
      email: "",
      phone: ""
    });
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Add Employee</h1>

                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Name: </label>
                    <input
                      type="text"
                      name="name"
                      value={employee.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label>Email: </label>
                    <input
                      type="email"
                      name="email"
                      value={employee.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label>Phone: </label>
                    <input
                      type="text"
                      name="phone"
                      value={employee.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit">Add</button>
                </form>

                <EmployeeList employees={employees} />
              </>
            }
          />

          <Route
            path="/employees/:id"
            element={<EmployeeDetails employees={employees} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;