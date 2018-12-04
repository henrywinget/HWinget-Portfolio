import React from "react";
import { Container } from "reactstrap";
import "./Wrapper.css";

const Wrapper = props => <Container id="wrapper">{props.children}</Container>;

export default Wrapper;
