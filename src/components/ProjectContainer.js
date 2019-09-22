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
              <h1>Eventify</h1>
              <h2>Event Manager App</h2>

              <p>
                Eventify is an app, where user can create account, login and
                create events. Logged in user can book and cancel events.
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
              <h1>Todoist App</h1>
              <h2>Task Manager</h2>

              <p>
                The app is inspired by official Todoist app. The app can manage
                user task in different ways. User can create projects and assign
                task to it.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>ReactJs</div>
                <div>Firebase</div>
                <div>Sass</div>
                <div>CSS</div>
                <div>HTML</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="https://todoist-app.netlify.com"
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
                    href="https://github.com/UmerSharif/Todoist"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              <h1>Postnet App</h1>
              <h2>A blogging App</h2>

              <p>
                User can create account. Create post and can comment on other
                people posts. user can also like posts.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>ReactJs</div>
                <div>MongoDb</div>
                <div>Graphql</div>
                <div>Nodejs</div>
                <div>Apollo Server</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="https://post-net.netlify.com"
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
                    href="https://github.com/UmerSharif/post-net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              <h1>Netflix App </h1>
              <h2>Netflix inspired App</h2>

              <p>
                Inspired by Netlix official website. This is a mobile first
                responsive app, amazing while keeping UX/UI design pattern in
                mind.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>JavaScript</div>
                <div>Responsive Design</div>
                <div>HTML5</div>
                <div>CSS</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="https://netflix-webapp.netlify.com"
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
                    href="https://github.com/UmerSharif/Netflix-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              <h1>Portfolio</h1>
              <h2>My personal Website</h2>

              <p>
                Created with ReactJs, the website is fully responsive on all
                device ports, with amazing visual and UX/UI design patterns.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>ReactJs</div>
                <div>Sass</div>
                <div>Css</div>
                <div>HTML5</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="#"
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
                    href="https://github.com/UmerSharif/personal-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              <h1>Frogger</h1>
              <h2>A JavaScript game</h2>

              <p>
                This game was create as part of course project. It uses advanced
                JavaScript concepts like Prototypal inheritence. More on github.
              </p>
              <hr className="hr__line" />
              <div className="technologies">
                <div>JavaScript</div>
                <div>CSS</div>
                <div>HTML5</div>
                <div>2D Canvas</div>
              </div>
              {/* button */}
              <div className="cta">
                <a
                  href="https://nano-frogger-game.netlify.com/"
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
                    href="https://github.com/UmerSharif/Nanodegree_frogger-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
