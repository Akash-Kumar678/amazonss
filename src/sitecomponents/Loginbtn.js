import React from 'react'
import { Link } from 'react-router-dom';
import './loginbtn.css'

export default function Loginbtn() {
    
      
    return (
        <div>
           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-1">
          <div className="col"></div>
          <div className="card shadow-sm">
            <p className="card-text"><b>login to get better experience</b></p>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                
                  <button type="button" className="btn btn-sm btn-outline-dark" ><Link to='/login' id='loginbtn' >Login</Link></button>
                  <button type="button" className="btn btn-sm btn-outline-dark" ><Link to='/login' id='signupbtn' >signup</Link></button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

        
    )
}
