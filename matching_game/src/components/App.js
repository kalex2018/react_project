import React from 'react';
import Home from './Home';
import Matching from './Matching';
import Cat from './Cat'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Template from './Template'
import AdooptCat from './AdooptCat';

export default function App() {
  return (
    <Router>
      <Template>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/matching" element={<Matching />} />
          <Route exact path="/cat" element={<Cat />} />

        </Routes>
      </Template>
    </Router>
  )
}


