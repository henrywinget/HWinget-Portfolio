import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Geek from './Geek';
import Zoom from 'react-reveal/Zoom';

export class Ears extends Component {

  renderGeek = (e) => {
    e.preventDefault();
    ReactDOM.render(<Geek />, document.getElementById("geek"));
  }

  render() {
    return (
      <div>
        <Zoom>
        <p>Well that's a weird way to word that question.. but if you're talking about music, I've played drums since I was 15 years old and enjoy the occasional YouTube tutorial on guitar or ukele for my favorite songs.<br/><br/> I like all music that has a good beat and will keep anything on repeat that surprises and impresses me.<br/><br/> Check out some of my recent favorite bands and their music!</p>
        
        <p className ="about-me-buttons" onClick = {this.renderGeek}>Anything more normal?</p>
        </Zoom>
      </div>
    )
  }
}

export default Ears;
