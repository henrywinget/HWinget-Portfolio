import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Ears from './Ears';
import Zoom from 'react-reveal/Zoom';

export class Ag extends Component {

  renderEars = (e) => {
    e.preventDefault();
    ReactDOM.render(<Ears />, document.getElementById("ears"));
  }
  
  render() {
    return (
      <div>
        <Zoom>
        <p>I'm an avid agriculturist. I annually grow fruits and vegetables from cucumbers, tomatoes, and peppers, to herbs like basil, cilantro, and oregano.<br/><br/> Around 90% of my annual flora I start from seeds!<br/><br/> I've even built an irrigated raised garden from scratch that just requires you to twist the spigot valve to keep 'em watered.</p>
        
        <p className ="about-me-buttons" onClick = {this.renderEars}>What about your ears?</p>
        </Zoom>
      </div>
    )
  }
}

export default Ag;
