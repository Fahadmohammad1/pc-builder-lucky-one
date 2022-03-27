import React from "react";
import { Accordion } from "react-bootstrap";

const Question = () => {
  return (
    <div className="container mx-auto">
      <h1 className="my-5">Question About React</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How React Works?</Accordion.Header>
          <Accordion.Body>
            <strong>React</strong> is a javascript library. React create a
            virtual DOM and when we change something in our code it will compare
            our code with that virtual DOM and efficiently update and render
            just that right component. And changes applied at only that specefic
            area. It not reload the whole application.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Difference Between Props vs State</Accordion.Header>
          <Accordion.Body>
            <strong>Props:</strong> is read only. We can send props only parent
            to child. And props can not be modified.
            <strong>State:</strong> changes when user interact to the website.
            When user click or going one component to another.State changes can
            be asynchronous.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How useState() Works?</Accordion.Header>
          <Accordion.Body>
            <strong>useState:</strong> returns an array and a function. We can
            send data by this function and it will saved in that array.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Question;
