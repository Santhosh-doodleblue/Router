import React from "react";

function Eren({ data, login }) {
  return (
    <>
      <div className="container ">
        {data.map((armin) => {
          const { image, title, text } = armin;
          return (
            <>
              <div className="row g-4">
                <div className="col-md-6 text-center">
                  <h1>{title}</h1>
                  <p>{text}</p>
                  <button onClick={login} className="join">
                    Join Now
                  </button>
                </div>

                <div className="col-md-6">
                  <img style={{ height: "300px" }} src={image} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Eren;
