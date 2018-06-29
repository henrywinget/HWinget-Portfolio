import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import NavTabs from './NavTabs/NavTabs';
import Sidebar from './Sidebar/Sidebar';
import Wrapper from './Wrapper/Wrapper';


export default () => (
  <BrowserRouter>
    <div>
    <Wrapper>
    <Sidebar/>
    <Route exact path="/" component= {Home} />
    <Route path = "/about" component = {About} />
    <Route path = "/projects" component = {Projects} />
    <Route path = "/contact" component = {Contact} />
    <NavTabs />
    </Wrapper>

    </div>
  </BrowserRouter>
)