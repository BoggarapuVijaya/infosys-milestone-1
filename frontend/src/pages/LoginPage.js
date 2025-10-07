import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div
      style={{
        width: "300px",
        margin: "100px auto",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        textAlign: "center"
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>🔐 Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>

      {/*  Register link just below login button */}
      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Don’t have an account?{" "}
        <Link to="/register" style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}>
          Register here
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
