import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css';

import Labs from './Labs';
import Kanbas from './Kanbas';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="Kanbas"/>}/>
        <Route path="/labs/*" element={<Labs />}/>
        <Route path="/kanbas/*" element={<Kanbas />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
