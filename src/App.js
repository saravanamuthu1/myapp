import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Router, Routes,BrowserRouter} from 'react-router-dom';
import Home from './Component/Home';
import Projectmembers from './Component/Projectmebers';
import Project from './Component/Project';
import Publications from './Component/Publications';
import Error from './Component/Error';
import Navfunction from './Component/Navfunction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cardfunction1 from './Component/Cardfunction1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footerfunc from './Component/Footerfunc';

function App() {
  return (
    <>
    <Navfunction />
    <br></br>
      <Routes>
          <Route exact path="/Home" element={<Home />}> </Route>
          <Route exact path="/Projectmembers" element={<Projectmembers />}> </Route>
          <Route exact path="/Project" element={<Project/>}> </Route>
          <Route exact path="/Publications" element={<Publications />}> </Route>
          <Route  element={<Error />}> </Route>
      </Routes>
    </>
  );
}

export default App;