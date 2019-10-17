// import React from "react"
// import { Col, CardPanel } from "react-materialize";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./Cards.css"

// const Cards = props => (
//     <Col s={12} m={4} l={3}>
//         <CardPanel onClick={() => props.clickHandler(props.icon.iconName)} className={"hoverable "}
//     </Col>
// )


import React from "react";
import "./Cards.css";

const Cards = props => (
    <div onClick={() => props.setClicked(props.id)} className="card col-md-3">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default Cards;