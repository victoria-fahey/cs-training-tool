import React from 'react'
import { Link } from 'react-router-dom'

function Coral101 () {
  return (
    <>
      <div className='title'>
        <h1>Coral Identification 101</h1>
      </div>
      <br></br>
      <div className='content'>
        <Link to={'/coral-id/1'}><button type="button">START ID!</button></Link>
      </div>
      <br></br>
      <div className='content'>
        <p>
              Hover over an image for basic coral anatomy to help you identify coral
        </p>
      </div>
      <div className='flex-container'>
        <div className='flex-child'>
          <h3>Coral Lifestyles</h3>
          <div className='container'>
            <img className='info-image' src='/images/lifestyle_colony.png'/>
            <div className='overlay-text content'>Colony = coral with more than 1 corallite/polyp</div>
          </div>
          <div className='container'>
            <img className='info-image' src='/images/lifestyle_solitary.png'/>
            <div className='overlay-text content'>Solitary = coral that lives their entire life as a single polyp</div>
          </div>
        </div>

        <div className='flex-child'>
          <h3>Coral Growth Forms</h3>
          <div className='container'>
            <img className='info-image' src='/images/growth-form_massive.png'/>
            <div className='overlay-text content'>Massive</div>
          </div>
          <div className='container'>
            <img className='info-image' src='/images/growth-form_branching.png'/>
            <div className='overlay-text content'>Branching</div>
          </div>
          <div className='container'>
            <img className='info-image' src='/images/growth-form_plate.png'/>
            <div className='overlay-text content'>Plate-like</div>
          </div>
          <div className='container'>
            <img className='info-image' src='/images/growth-form_solitary.png'/>
            <div className='overlay-text content'>Solitary</div>
          </div>
        </div>

        <div className='flex-child'>
          <h3>Corallite Walls</h3>
          <div className='container'>
            <img className='info-image' src='/images/corallite_separate.png'/>
            <div className='overlay-text content'>Separate walls</div>
          </div>
          <div className='container'>
            <img className='info-image' src='/images/corallite_shared.png'/>
            <div className='overlay-text content'>Shared walls</div>
          </div>
          <div className='container'>
            <img className='info-image' src='/images/corallite_nowalls.png'/>
            <div className='overlay-text content'>No walls</div>
          </div>
          <div className='container'>
            <img className='info-image' src='/images/corallite_meandering.png'/>
            <div className='overlay-text content'>Meandering</div>
          </div>
          <div className='container'>
            <img className='info-image' src='/images/corallite_axial.png'/>
            <div className='overlay-text content'>Axial corallite = found at branch tip</div>
          </div>
          <div className='container'>
            <img className='info-image' src='/images/corallite_radial.png'/>
            <div className='overlay-text content'>Radial corallite = located on length of branches</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coral101
