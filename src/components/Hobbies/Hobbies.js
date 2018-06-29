import React from "react";
import { Link } from "react-router-dom";
import './Hobbies.css';
import Zoom from 'react-reveal/Zoom';

const Hobbies = props => (
    <div className="developer">
      <p>{props.page}</p>
      <h3 onClick={() => props.addHobbies(props.id)} className="remove">{props.button}</h3>
    </div>
)

export default Hobbies;