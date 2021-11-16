import React from 'react'

function CorrectCoralInfo (props) {
  const { filteredCoral } = props

  return (
    <>
      <div className='coral-flex-child'>
        <h1>{filteredCoral[0].genus}</h1>
        <h3 className="coral-info">Lifestyle</h3>
        <p className="coral-info">{filteredCoral[0].lifestyle}</p>
        <h3>Growth Form</h3>
        <p>{filteredCoral[0].growthForm}</p>
        <h3>Corallite Walls</h3>
        <p>{filteredCoral[0].coralliteWall}</p>
        <h3>Additional Info</h3>
        <p>{filteredCoral[0].info}</p>
        <br></br>
        <button type="button">Next Image</button>
      </div>
    </>
  )
}

export default CorrectCoralInfo
