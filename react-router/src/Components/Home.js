import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="back">
        <div className="container py-5 text-white">
          <div className="row my-5">
            <div className="col-md-6">
              <h1>The Scouts</h1>
              <p>
                The Scout Regiment operates as a military division in charge of
                the exploration and reclaiming of human territory from Titan
                infestation. This is mainly done by setting up small bases,
                camps, resupply stations, and extra fortifications in available
                areas outside the Walls.
              </p>
              <Link to="/about">
                <button className="join">read more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
