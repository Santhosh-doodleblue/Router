import React from "react";
import { useNavigate } from "react-router";

import "./about.css";
import Eren from "./Eren";
// import Erwin from "./images/erwin.jpg";
// import Nile from "./images/military.jpeg";
// import Pyxis from "./images/pyxis.jpeg";

function About() {
  let navigate = useNavigate();

  const login = () => {
    navigate("/");
  };
  const items = [
    {
      image: "./images/pyxis.jpeg",
      title: "Garrison Regiment",
      text: "The Garrison Regiment is the largest of the Military divisions which protects and maintains order within the Walls. Given the fatality rate of the Scout Regiment and the limited entry of the Military Police Regiment, most soldiers join the Garrison.",
    },
    {
      image: "./images/erwin.jpg",
      title: "The Survey Corps",
      text: "   In the world of Attack on Titan, the Survey Corps — also sometimes referred to as the Scout Regiment — is the military branch most directly involved in combating the Titan threat.Their other duties include Titan study, outside exploration and mapping, and paving the way for humanity's expansion outside the walls.",
    },
    {
      image: "./images/military.jpeg",
      title: "The Military Police",
      text: "  The Military Police Brigade is the primary police force within human territory. Not only do they maintain order, but they also serve as the king's guard. Since they do not normally come in contact with Titans, they usually carry firearms instead of vertical maneuvering equipment.",
    },
  ];

  return (
    <div>
      {/* <div className="bg-dark text-white">
        <div className="container text-white">
          <div className="row">
            <div className="col-md-6 text-center">
              <h1>Garrison Regiment</h1>
              <p>
                The Garrison Regiment is the largest of the Military divisions
                which protects and maintains order within the Walls. Given the
                fatality rate of the Scout Regiment and the limited entry of the
                Military Police Regiment, most soldiers join the Garrison.
              </p>
              <button onClick={login} className="join">
                Join Now
              </button>
            </div>
            <div className="col-md-6">
              <img style={{ height: "300px" }} src={Pyxis} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center">
              <h1>The Survey Corps</h1>{" "}
              <p>
                In the world of Attack on Titan, the Survey Corps — also
                sometimes referred to as the Scout Regiment — is the military
                branch most directly involved in combating the Titan threat.
                Their other duties include Titan study, outside exploration and
                mapping, and paving the way for humanity's expansion outside the
                walls.
              </p>
              <button onClick={login} className="join">
                Join Now
              </button>
            </div>
            <div className="col-md-6">
              <img style={{ height: "300px" }} src={Erwin} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center">
              <h1>The Military Police</h1>
              <p>
                The Military Police Brigade is the primary police force within
                human territory. Not only do they maintain order, but they also
                serve as the king's guard. Since they do not normally come in
                contact with Titans, they usually carry firearms instead of
                vertical maneuvering equipment.
              </p>
              <button onClick={login} className="join">
                Join Now
              </button>
            </div>
            <div className="col-md-6">
              <img style={{ height: "300px" }} src={Nile} alt="" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-dark text-white">
        <Eren login={login} data={items} />
      </div>
    </div>
  );
}

export default About;
