import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      employees: []
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newEmployee = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };

    console.log('New employee:', newEmployee);

    this.setState((prevState) => ({
      employees: [...prevState.employees, newEmployee],
      name: '',
      email: '',
      phone: ''
    }));
  };

  render() {
    return (
      <section className="employee-form-page">
        <h1>Add Employee</h1>

        <form className="employee-form" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit">Add</button>
        </form>

        <h2>Employee List</h2>
        <ul className="employee-list">
          {this.state.employees.map((employee, index) => (
            <li key={index}>
              {employee.name} - {employee.email} - {employee.phone}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default EmployeeForm;
