import React from 'react'

function RadioButtons (props) {
  const { handleChange } = props
  return (
    <>
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
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Favia"/>
            <div className="rad-design"></div>
            <div className="rad-text">Favia</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Fungia"/>
            <div className="rad-design"></div>
            <div className="rad-text">Fungia</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Pachyseris"/>
            <div className="rad-design"></div>
            <div className="rad-text">Pachyseris</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Lobophyllia"/>
            <div className="rad-design"></div>
            <div className="rad-text">Lobophyllia</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Goniopora"/>
            <div className="rad-design"></div>
            <div className="rad-text">Goniopora</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Favites"/>
            <div className="rad-design"></div>
            <div className="rad-text">Favites</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Pocillopora"/>
            <div className="rad-design"></div>
            <div className="rad-text">Pocillopora</div>
          </label>
          <br></br>
          {/* <button type="button">Next Image</button> */}
        </div>
      </div>
    </>
  )
}

export default RadioButtons
