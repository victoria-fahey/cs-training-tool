import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getCorals } from '../apiClient'

import CorrectCoralInfo from './CorrectCoralInfo'
import RadioButtons from './RadioButtons'

function CoralID () {
  const [filteredCoral, setFilteredCoral] = useState([{}])
  const { id } = useParams()
  const [correctCoral, setCorrectCoral] = useState(false)

  useEffect(() => {
    getCorals()
      .then(coralData => {
        setFilteredCoral(coralData.filter((coral) => coral.id === Number(id)))
        return null
      })
      .catch(err => {
        console.error(err.message)
      })
  }, [id])

  function handleChange (event) {
    if (event.target.value === filteredCoral[0].genus) {
      setCorrectCoral(true)
      console.log('match')
    } else {
      setCorrectCoral(false)
      console.log('no match')
    }
  }

  return (
    <>
      <div className='title'>
        <h1>Who am I?</h1>
      </div>
      <br></br>
      <div className='content'>
        <p>
            Choose the correct coral
        </p>
      </div>
      <div className='flex-container'>
        <div className='coral-flex-child'>
          <img className='coral-id-image' src={filteredCoral[0].image}/>
          <div className='li-not-center'>
            <p>Reminders:</p>
            <ul className='li-not-center'>
              <li>Growth form?</li>
              <li>Are the walls shared, separate, meandering or have no walls?</li>
              <li>Axial corallite?</li>
            </ul>
          </div>
        </div>
        {correctCoral ? <CorrectCoralInfo filteredCoral={filteredCoral}/> : <RadioButtons handleChange={handleChange}/> }
      </div>
    </>
  )
}

export default CoralID
