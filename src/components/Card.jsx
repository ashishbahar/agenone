import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { mydata } from "../assets/js/Myjs";

const Card = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            {mydata.slice(1, 3).map((value) => {
              return (
                <Col lg={3}>
                  <img className="w-100" src={value.Image} alt="card" />
                  <p className="">{value.p}</p>
                  <h3>{value.heading}</h3>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Card;
