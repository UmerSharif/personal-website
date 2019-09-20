import React from "react";

export default function ViewDetail({ projectId }) {
  const Info = [
    { id: "1", name: "project 1", image1: "profile-pic.jpg" },
    { id: "2", name: "project 2", image1: "profile-me.jpg" }
  ];

  return (
    <div className="project-info">
      {Info.map(project => {
        if (projectId === project.id) {
          return (
            <div key={project.id}>
              {project.name}
              <img src={`/images/${project.image1}`} alt="" />
            </div>
          );
        }
      })}
    </div>
  );
}
