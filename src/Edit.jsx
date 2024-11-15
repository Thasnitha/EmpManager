
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({ username: "", email: "", status: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    const response = await axios.get(`https://empmanage-server.onrender.com/employee/${id}`);
    setEmployee(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://empmanage-server.onrender.com/employee/${id}`, employee);
    navigate("/");
  };

  return (
    <div style={{ margin: "50px auto", padding: "20px", width: "80%", backgroundColor: "#f7f7f7", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px", color: "#333" }}>Edit Employee</h2>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "16px", color: "#333" }}>Username</label>
          <input
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ddd", fontSize: "16px" }}
            type="text"
            name="username"
            value={employee.username}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "16px", color: "#333" }}>Email</label>
          <input
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ddd", fontSize: "16px" }}
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "16px", color: "#333" }}>Status</label>
          <select
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ddd", fontSize: "16px" }}
            name="status"
            value={employee.status}
            onChange={handleChange}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "12px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;

