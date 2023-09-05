import React from 'react';

import {
  AboutUs,
  Owner,
  FindUs,
  Footer,
  Header,
  SpecialMenu,
  Reviews,
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
    <Reviews />
    <FindUs />
    <Footer />
  </div>
);

export default App;
