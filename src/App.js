import React from 'react';

import {
  AboutUs,
  Owner,
  FindUs,
  Footer,
  Header,
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
    <FindUs />
    <Footer />
  </div>
);

export default App;
