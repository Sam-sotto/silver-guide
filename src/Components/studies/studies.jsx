import React from 'react'
import './studies.css'


function Studies() {
  return (
    <div>
        <span className='study-text'>Studies</span>

        <div className="study-container">

            <div className="study">
                <div className="content UAI">
                    <h1>University</h1>
                </div>
            </div>

            <div className="study">
                <div className="content Edu-IT">
                    <h1>Course</h1>
                </div>
            </div>


            <div className="study">
                <div className="content English">
                    <h1>British Council</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Studies;