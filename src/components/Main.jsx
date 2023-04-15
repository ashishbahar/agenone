import React, { useState } from "react";
// import { Container } from "react-bootstrap";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  return (
    <nav>
      <div className="d-flex justify-content-between align-items-start">
        <button onClick={() => setfirst(false)}>open</button>
        <div className={first ? "hide" : "show"}>
          <ul className="d-flex">
            <button onClick={() => setfirst(true)}>open</button>
            <li className="">home</li>
            <li className="">home</li>
            <li className="">home</li>
            <li className="">home</li>
            <li className="">home</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
