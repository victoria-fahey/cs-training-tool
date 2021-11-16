import React from 'react'

function CorrectCoralInfo (props) {
  const { filteredCoral } = props

  return (
    <>
      <div className='coral-flex-child'>
        <h1>{filteredCoral[0].genus}</h1>
        <h4 className="coral-info">Lifestyle</h4>
        <p className="coral-info">{filteredCoral[0].lifestyle}</p>
        <h4>Growth Form</h4>
        <p>{filteredCoral[0].growthForm}</p>
        <h4>Corallite Walls</h4>
        <p>{filteredCoral[0].coralliteWall}</p>
        <h4>Additional Info</h4>
        <p>{filteredCoral[0].info}</p>
        <br></br>
        <button type="button">Next Image</button>
      </div>
    </>
  )
}

export default CorrectCoralInfo
