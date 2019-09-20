import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithubSquare, FaInfoCircle } from "react-icons/fa";
import "./ProjectContainer.scss";
import ViewDetail from "../Model/ViewDetail";
import BackDrop from "../Model/BackDrop";

export default function ProjectContainer() {
  /* testing */
  const [project, setProject] = useState("");
  const HandleClick = projectId => {
    setProject(projectId);
  };
  /* testing */

  return (
    <>
      {project && <BackDrop />}
      <section className="work-experience">
        <div className="container">
          <div className="title-heading">
            <h1>Portfolio Projects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit . Ullam,
              quam vel quae consequuntur hic consectetur eveniet molestias
              tenetur{" "}
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
                <Link to="#" className="btn">
                  <span>Live Demo</span>
                </Link>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <Link to="#">
                    <FaGithubSquare className="fa__icons" />
                  </Link>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("1")}
                >
                  <Link to="#">
                    <FaInfoCircle className="fa__icons" />
                  </Link>
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
                <Link to="#" className="btn">
                  <span>Live Demo</span>
                </Link>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <Link to="#">
                    <FaGithubSquare className="fa__icons" />
                  </Link>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("2")}
                >
                  <Link to="#">
                    <FaInfoCircle className="fa__icons" />
                  </Link>
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
                <Link to="#" className="btn">
                  <span>Live Demo</span>
                </Link>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <Link to="#">
                    <FaGithubSquare className="fa__icons" />
                  </Link>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("3")}
                >
                  <Link to="#">
                    <FaInfoCircle className="fa__icons" />
                  </Link>
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
                <Link to="#" className="btn">
                  <span>Live Demo</span>
                </Link>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <Link to="#">
                    <FaGithubSquare className="fa__icons" />
                  </Link>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("4")}
                >
                  <Link to="#">
                    <FaInfoCircle className="fa__icons" />
                  </Link>
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
                <Link to="#" className="btn">
                  <span>Live Demo</span>
                </Link>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <Link to="#">
                    <FaGithubSquare className="fa__icons" />
                  </Link>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("5")}
                >
                  <Link to="#">
                    <FaInfoCircle className="fa__icons" />
                  </Link>
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
                <Link to="#" className="btn">
                  <span>Live Demo</span>
                </Link>
              </div>

              {/* bottom buttons */}
              <div className="bottom-buttons">
                <div className="btn-github btn__common">
                  <Link to="#">
                    <FaGithubSquare className="fa__icons" />
                  </Link>
                </div>
                <div
                  className="btn-info btn__common"
                  onClick={() => HandleClick("6")}
                >
                  <Link to="#">
                    <FaInfoCircle className="fa__icons" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ViewDetail projectId={project} />
    </>
  );
}
