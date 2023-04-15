import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [first, setfirst] = useState(true);
  return (
    <nav>
      <Container>
        <div className="d-flex justify-content-between  ">
          <Link>
    
            <button onClick={() => setfirst(false)}>open</button>
          </Link>

          <div className={first ? "shownav" : "hidenav"}></div>
          <div className="d-flex gap-4 flex-column flex-lg-row mobile_view align-items-center justify-content-center d-lg-none">
            <button onClick={() => setfirst(true)}>close</button>

            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
            <div>home</div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
