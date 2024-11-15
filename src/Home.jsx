
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get("https://empmanage-server.onrender.com/employee");
    setEmployees(response.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`https://empmanage-server.onrender.com/employee/${id}`);
    fetchEmployees();
  };

  return (
    <div style={{ margin: "50px auto", padding: "20px", width: "80%", backgroundColor: "#f7f7f7", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px", color: "#333" }}>Employee List</h2>
      <Link to="/add" style={{ display: "inline-block", margin: "20px auto", padding: "12px 20px", backgroundColor: "#4CAF50", color: "#fff", fontSize: "16px", borderRadius: "4px", textDecoration: "none", textAlign: "center" }}>
        Add Employee
      </Link>
      <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#f9f9f9" }}>
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "#fff", padding: "12px" }}>
            <th style={{ padding: "12px", textAlign: "center" }}>ID</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Username</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Email</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Status</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "12px", textAlign: "center" }}>{employee.id}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{employee.username}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{employee.email}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{employee.status}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                  <Link to={`/edit/${employee.id}`} style={{ background: '#4CAF50', color: '#fff', padding: '6px 10px', borderRadius: '5px', textDecoration: 'none' }}>
                    EDIT
                  </Link>
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    style={{ cursor: "pointer", background: "#f44336", color: "#fff", border: "none", borderRadius: "5px", padding: "6px 10px" }}
                  >
                    DELETE
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

