import React from "react";
import "./Team.css";
import teamImage from "../assets/opensrc.png";

const Team = () => {
  return (
    <div className="team">
      <div className="container">
        <h2 className="team-title">Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={teamImage} alt="Team Cartoon" className="team-member-image" />
          </div>
        </div>
        <div className="team-description">
          <p>
            We are a dedicated team of contributors working on an open-source project. Together, we are passionate about
            creating innovative solutions and driving positive change in the software development community.
          </p>
          <p>
            Our project welcomes contributions from developers around the world. With the collective effort of the open-source
            community, we strive to build a robust and feature-rich software that addresses the needs of our users.
          </p>
          <p>
            Join us in this exciting journey and be a part of shaping the future of our project. Together, we can make a
            difference!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
