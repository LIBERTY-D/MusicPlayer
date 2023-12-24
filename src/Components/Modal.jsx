import React from 'react'
import "../Styles/modal.css"
export default function Modal() {
  return (
        <>
        <div id="popup1" className="overlay">
                <div className="popup">
                  <h2>Search for song to play with user </h2>
                  <a className="close" href="#">&times;</a>
                  <div className="content">
                     <Form/>
                  </div>
                </div>
           </div>
          </>
  )
}

function Form(){

  return <>
          <div className="form-group">
          <span>artist</span>
          <input className="form-field" type="text" placeholder="Future"/>
       </div>
  </>
}
