// import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>ABOUT ME</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                
                <div className="right">
                  <h4 style={{color:"#fff"}}>{data.role}</h4>
    
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
