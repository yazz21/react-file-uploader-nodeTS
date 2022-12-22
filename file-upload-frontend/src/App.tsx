import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {FileUpload} from './components/FileUpload';
import { GetAll } from "./components/GetAll";

import { Container } from 'react-bootstrap';
import GetOne from './components/GetOne';

function App() {
  return (
    <React.Fragment>
    <Container>
      <h4 className='display-4 text-center mb-4'>
            <i className='fab fa-react'/>
            React File Upload
        </h4>

        <FileUpload/>
        <GetOne/>
        <GetAll />  
    </Container>
  </React.Fragment>
  )
}

export default App;
