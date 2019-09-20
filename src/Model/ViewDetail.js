import React from "react";
import "./ViewDetail.scss";

export default function ViewDetail(props) {
  const Info = [
    {
      id: "1",
      name: "Eventify",
      images: {
        img_1: "profile-pic.jpg",
        img_2: "profile-me.jpg",
        img_3: ""
      }
    }
  ];

  return (
    <div className="project-info-model">
      {Info.map(project => {
        if (props.projectId === project.id) {
          return (
            <div key={project.id} className="image-container">
              {project.name}
              <img src={`/images/${project.images.img_1}`} alt="" />
              <img src={`/images/${project.images.img_2}`} alt="" />
              <img src={`/images/${project.images.img_3}`} alt="" />
            </div>
          );
        }
      })}
      <div className="close" onClick={() => props.CloseModel("closeModel")}>
        <button>CloseMe</button>
      </div>
    </div>
  );
}
