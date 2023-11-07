import React from 'react';
import './styles.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components//Contact';

export const Portfolio = () => {
  return (
    <>
      <div className="App">
        <NavBar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
      
    </>
  )
}
