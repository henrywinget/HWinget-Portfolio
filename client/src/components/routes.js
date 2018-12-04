import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills';
import NavTabs from './NavTabs/NavTabs';
import Footer from './Footer/Footer';
// import Sidebar from './Sidebar/Sidebar';
// import Wrapper from './Wrapper/Wrapper';


export default () => (
  <BrowserRouter>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <About />
      <Projects />
      <Skills />
      {/* <Route path = "/about" component = {About} />
    <Route path = "/projects" component = {Projects} />
    <Route path = "/contact" component = {Contact} /> */}
      <Footer />
    </div>
  </BrowserRouter>
)