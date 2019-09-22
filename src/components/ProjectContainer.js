import React, { useState } from "react";
import { FaGithubSquare, FaInfoCircle } from "react-icons/fa";
import "./ProjectContainer.scss";
import ViewDetail from "../Model/ViewDetail";
import BackDrop from "../Model/BackDrop";

export default function ProjectContainer({ id }) {
  /* testing */
  const [project, setProject] = useState("");
  const HandleClick = projectId => {
    setProject(projectId);
  };

  const handleCloseModel = receivedVal => {
    if (receivedVal) {
      setProject("");
    }
  };

  return (
    <>
      {project && (
        <>
          <BackDrop />
          <ViewDetail projectId={project} CloseModel={handleCloseModel} />)
        </>
      )}
      <section className="work-experience" id={id}>
        <div className="container">
          <div className="title-heading">
            <span className="border-bottom">Portfolio Projects</span>
            <p>
              The following projects includes some of my recent work. All the
              project includes live demo, github links and some screen shots
              related to each project. Enjoy the show.{" "}
              <span role="img" aria-label="Hearts">
                💗🧡💛💚💙💜🤎🖤
              </span>
            </p>
          </div>
          <div className="activities-grid">
            <div className="activities-grid-item ">
              <h1>Project Name</h1>
              <h2>An Event Manager App</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam blanditiis a veritatis molestiae enim molestias ipsa
                magnam.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>React</div>
                <div>MongoDb</div>
                <div>Graphql</div>
                <div>Nodejs</div>
                <div>Express</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="https://myeventify.netlify.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <span>Live Demo</span>
                </a>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <a
                    href="https://github.com/UmerSharif/event-manager"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubSquare className="fa__icons" />
                  </a>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("1")}
                >
                  <FaInfoCircle className="fa__icons" />
                </div>
              </div>
            </div>
            <div className="activities-grid-item ">
              <h1>Project Name</h1>
              <h2>An Event Manager App</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam blanditiis a veritatis molestiae enim molestias ipsa
                magnam.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>React</div>
                <div>MongoDb</div>
                <div>Graphql</div>
                <div>Nodejs</div>
                <div>Express</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="https://myeventify.netlify.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <span>Live Demo</span>
                </a>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <a href="#">
                    <FaGithubSquare className="fa__icons" />
                  </a>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("2")}
                >
                  <FaInfoCircle className="fa__icons" />
                </div>
              </div>
            </div>
            <div className="activities-grid-item ">
              <h1>Project Name</h1>
              <h2>An Event Manager App</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam blanditiis a veritatis molestiae enim molestias ipsa
                magnam.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>React</div>
                <div>MongoDb</div>
                <div>Graphql</div>
                <div>Nodejs</div>
                <div>Express</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="https://myeventify.netlify.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <span>Live Demo</span>
                </a>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <a href="#">
                    <FaGithubSquare className="fa__icons" />
                  </a>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("3")}
                >
                  <FaInfoCircle className="fa__icons" />
                </div>
              </div>
            </div>
            <div className="activities-grid-item ">
              <h1>Project Name</h1>
              <h2>An Event Manager App</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam blanditiis a veritatis molestiae enim molestias ipsa
                magnam.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>React</div>
                <div>MongoDb</div>
                <div>Graphql</div>
                <div>Nodejs</div>
                <div>Express</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="https://myeventify.netlify.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <span>Live Demo</span>
                </a>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <a href="#">
                    <FaGithubSquare className="fa__icons" />
                  </a>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("4")}
                >
                  <FaInfoCircle className="fa__icons" />
                </div>
              </div>
            </div>
            <div className="activities-grid-item ">
              <h1>Project Name</h1>
              <h2>An Event Manager App</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam blanditiis a veritatis molestiae enim molestias ipsa
                magnam.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>React</div>
                <div>MongoDb</div>
                <div>Graphql</div>
                <div>Nodejs</div>
                <div>Express</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="https://myeventify.netlify.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <span>Live Demo</span>
                </a>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <a href="#">
                    <FaGithubSquare className="fa__icons" />
                  </a>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("5")}
                >
                  <FaInfoCircle className="fa__icons" />
                </div>
              </div>
            </div>
            <div className="activities-grid-item ">
              <h1>Project Name</h1>
              <h2>An Event Manager App</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam blanditiis a veritatis molestiae enim molestias ipsa
                magnam.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>React</div>
                <div>MongoDb</div>
                <div>Graphql</div>
                <div>Nodejs</div>
                <div>Express</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="https://myeventify.netlify.com/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <span>Live Demo</span>
                </a>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <a href="#">
                    <FaGithubSquare className="fa__icons" />
                  </a>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("6")}
                >
                  <FaInfoCircle className="fa__icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
