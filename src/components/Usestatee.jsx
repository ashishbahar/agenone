import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";

const Usestatee = () => {
  const [first, setfirst] = useState(0);
  return (
    <section>
      <Container>
        {/* <div className="d-flex justify-content-between">
          <p className={first === 1 ? "red" : ""}>mohit</p>
          <p className={first === 2 ? "green" : ""}>ashish</p>
          <p className={first === 3 ? "blue" : ""}>jhony</p>
        </div>{" "}
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary"
            onClick={() => {
              setfirst(1);
            }}
          >
            red
          </button>{" "}
          <button
            onClick={() => {
              setfirst(2); 
            }}
            className="btn btn-primary"
          >
            green
          </button>{" "}
          <button
            onClick={() => {
              setfirst(3);
            }}
            className="btn btn-primary"
          >
            blue
          </button>
        </div> */} 
      </Container>
    </section>
  );
};

export default Usestatee;
