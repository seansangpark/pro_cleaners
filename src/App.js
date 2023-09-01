import React from 'react';

import {
  AboutUs,
  Owner,
  FindUs,
  Footer,
  Gallery,
  Header,
  Laurels,
  SpecialMenu,
} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Owner />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
