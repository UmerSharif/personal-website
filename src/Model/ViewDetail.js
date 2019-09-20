import React from "react";
import "./ViewDetail.scss";
import { FaWindowClose, FaArrowLeft } from "react-icons/fa";
import { MdClose } from "react-icons/md";

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
            <div key={project.id} className="model-container-inner">
              <div className="project-title">
                <h1>{project.name}</h1>
              </div>
              <div className="image-container">
                <img src={`/images/${project.images.img_1}`} alt="" />
                <img src={`/images/${project.images.img_2}`} alt="" />
                <img src={`/images/${project.images.img_3}`} alt="" />
              </div>
            </div>
          );
        }
      })}
      <div
        className="close-model-button"
        onClick={() => props.CloseModel("closeModel")}
      >
        <MdClose className="fa__icons" />
      </div>
      {/* <div
        className="close-model-button-bottom btn"
        onClick={() => props.CloseModel("closeModel")}
      >
        <span>
          {" "}
          <FaArrowLeft className="fa__icons" />
        </span>
      </div> */}
    </div>
  );
}
