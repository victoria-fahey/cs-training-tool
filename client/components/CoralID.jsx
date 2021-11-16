import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getCorals } from '../apiClient'

function CoralID () {
  const [filteredCoral, setFilteredCoral] = useState([{}])
  const { id } = useParams()
  const [correctCoral, setCorrectCoral] = useState([{}])
  // const correctCoral = filteredCoral.genus === Number(id)

  useEffect(() => {
    getCorals()
      .then(coralData => {
        setFilteredCoral(coralData.filter((coral) => coral.id === Number(id)))
        return null
      })
      .catch(err => {
        console.error(err.message)
      })
  }, [])

  function handleChange (event) {
    if (event.target.value === filteredCoral[0].genus) {
      console.log('match')
    } else {
      console.log('no match')
    }
    // console.log(event.target.value)

    // this.state = {
    //   selectedCoral: filteredCoral.genus
    // }
    // setCorrectCoral(event.target.value)

    // if (event.target.value === filteredCoral.genus) {
    //   console.log('match')
    // } else {
    //   console.log('no match')
    // }
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

        <div className='coral-flex-child'>
          <div>
            <label className="rad-label">
              <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Acropora"/>
              <div className="rad-design"></div>
              <div className="rad-text">Acropora</div>
            </label>
            <label className="rad-label">
              <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Porites"/>
              <div className="rad-design"></div>
              <div className="rad-text">Porites</div>
            </label>
            <label className="rad-label">
              <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Diploastrea"/>
              <div className="rad-design"></div>
              <div className="rad-text">Diploastrea</div>
            </label>
            <label className="rad-label">
              <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value={filteredCoral.genus}/>
              <div className="rad-design"></div>
              <div className="rad-text">Favia</div>
            </label>
            <label className="rad-label">
              <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value={filteredCoral.genus}/>
              <div className="rad-design"></div>
              <div className="rad-text">Fungia</div>
            </label>
            <label className="rad-label">
              <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value={filteredCoral.genus}/>
              <div className="rad-design"></div>
              <div className="rad-text">Pachyseris</div>
            </label>
            <label className="rad-label">
              <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value={filteredCoral.genus}/>
              <div className="rad-design"></div>
              <div className="rad-text">Lobophyllia</div>
            </label>
            <label className="rad-label">
              <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value={filteredCoral.genus}/>
              <div className="rad-design"></div>
              <div className="rad-text">Goniopora</div>
            </label>
            <label className="rad-label">
              <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value={filteredCoral.genus}/>
              <div className="rad-design"></div>
              <div className="rad-text">Favites</div>
            </label>
            <label className="rad-label">
              <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value={filteredCoral.genus}/>
              <div className="rad-design"></div>
              <div className="rad-text">Pocillopora</div>
            </label>
            <br></br>
            <button type="button">Next Image</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoralID
