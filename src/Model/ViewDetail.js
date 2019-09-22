import React from "react";
import "./ViewDetail.scss";
import { MdClose } from "react-icons/md";

export default function ViewDetail(props) {
  const Info = [
    {
      id: "1",
      name: "Eventify App",
      images: {
        img_1: "eventify-1.PNG",
        img_2: "eventify-2.PNG"
      }
    },
    {
      id: "2",
      name: "Todoist App",
      images: {
        img_1: "todoist-1.PNG",
        img_2: "todoist-2.PNG"
      }
    },
    {
      id: "3",
      name: "PostNet App",
      images: {
        img_1: "postnet-1.PNG",
        img_2: "postnet-2.PNG"
      }
    },
    {
      id: "4",
      name: "Netflix App",
      images: {
        img_1: "netflix-1.PNG",
        img_2: "netflix-2.PNG"
      }
    },
    {
      id: "5",
      name: "Personal Website App",
      images: {
        img_1: "pweb-1.PNG",
        img_2: "pweb-2.PNG"
      }
    },
    {
      id: "6",
      name: "Frogger Game",
      images: {
        img_1: "frogger-1.PNG",
        img_2: ""
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
