import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './components.css'
export default function footer() {
  return (
    <div>
    <Navbar className ="foo">
         <p className="text"><a href="#home">Privacy Policy.</a>| © Develop By Kuber Khandelwal.</p>

    </Navbar>
    </div>
   
  )
}

