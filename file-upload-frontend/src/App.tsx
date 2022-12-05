import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FileUpload} from './components/FileUpload';
import { GetAll } from "./components/GetAll";

function App() {
  return (
    <div className='container mt-4'>
        <h4 className='display-4 text-center mb-4'>
            <i className='fab fa-react'/>
            React File Upload
        </h4>

        <FileUpload/>
        <GetAll />
    </div>
  )
}

export default App;
