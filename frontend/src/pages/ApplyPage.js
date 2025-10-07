import React, { useState } from "react";

function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    proposal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Proposal submitted successfully!");
    console.log("Submitted data:", formData);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>📄 Apply for this Project</h2>
      <p>Fill in your details and proposal below to apply.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          margin: "0 auto",
          maxWidth: "400px",
          textAlign: "left",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <label style={{ fontWeight: "bold" }}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />

        <label style={{ fontWeight: "bold" }}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />

        <label style={{ fontWeight: "bold" }}>Proposal:</label>
        <textarea
          name="proposal"
          value={formData.proposal}
          onChange={handleChange}
          placeholder="Write your proposal..."
          required
          style={{ width: "100%", margin: "10px 0", padding: "8px", height: "100px" }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Submit Proposal
        </button>
      </form>
    </div>
  );
}

export default ApplyPage;
