import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Website Redesign",
      client: "Tech Innovations Ltd",
      budget: "$2000",
      deadline: "2025-10-15",
    },
    {
      id: 2,
      title: "Mobile App Backend API",
      client: "StartUp Hub",
      budget: "$1500",
      deadline: "2025-11-01",
    },
    {
      id: 3,
      title: "Portfolio Website",
      client: "John Doe",
      budget: "$700",
      deadline: "2025-10-20",
    },
  ];

  return (
    <div className="dashboard">
      <h2>📁 Projects</h2>
      <p>Explore available projects and apply for the ones that suit you best.</p>

      <div className="dashboard-cards">
        {projects.map((project) => (
          <div key={project.id} className="dashboard-card">
            <h3>{project.title}</h3>
            <p><strong>Client:</strong> {project.client}</p>
            <p><strong>Budget:</strong> {project.budget}</p>
            <p><strong>Deadline:</strong> {project.deadline}</p>

            {/* ✅ This is the updated Apply Now button */}
            <Link to={`/projects/1/apply`}>
            <button>Apply Now</button>
</Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
