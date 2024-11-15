
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [employee, setEmployee] = useState({ username: "", email: "", status: "active" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://empmanage-server.onrender.com/employee", employee);
    navigate("/");
  };

  return (
    <div style={{ margin: "50px auto", padding: "20px", width: "60%", backgroundColor: "#f7f7f7", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px", color: "#333" }}>Add Employee</h2>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "10px", textAlign: "right", fontSize: "16px" }}>Username:</td>
              <td>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                    width: "100%",
                    boxSizing: "border-box",
                    outline: "none",
                    transition: "border-color 0.3s"
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", textAlign: "right", fontSize: "16px" }}>Email:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                    width: "100%",
                    boxSizing: "border-box",
                    outline: "none",
                    transition: "border-color 0.3s"
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", textAlign: "right", fontSize: "16px" }}>Status:</td>
              <td>
                <select
                  name="status"
                  onChange={handleChange}
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                    backgroundColor: "#fff",
                    width: "100%",
                    boxSizing: "border-box"
                  }}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center", padding: "20px" }}>
                <button
                  type="submit"
                  style={{
                    padding: "12px 20px",
                    backgroundColor: "#4CAF50",
                    border: "none",
                    color: "#fff",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "background-color 0.3s"
                  }}
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Add;


