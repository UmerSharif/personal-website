import React from "react";
import "./Skills.scss";

export default function Skills() {
  return (
    <div className="skill-set">
      <div className="skill-text-parent">
        {" "}
        <span className="skill-text">FOCUSED DEVELOPMENT STACK</span>
      </div>

      <div className="focused">
        <div>ReactJs</div>
        <div>NodeJs</div>
        <div>GraphQl</div>
        <div>MongoDB</div>
        <div>Express</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>SaaS</div>
      </div>
      {/* TODO: fix skills */}
      {/* <div className="others">
        <span>Other Skills</span>
        <span>
          <ul>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>GraphQl</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </span>
      </div> */}
    </div>
  );
}
