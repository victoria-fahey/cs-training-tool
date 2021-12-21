import React from 'react'

function RadioButtons (props) {
  const { handleChange } = props
  const { correctCoral } = props

  return (
    <>
      <div className='coral-flex-child'>
        <div>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Acropora"/>
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Acropora</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Porites"/>
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Porites</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Diploastrea"/>
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Diploastrea</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Favia"/>
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Favia</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Fungia"/>
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Fungia</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Pachyseris"/>
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Pachyseris</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Platygyra"/>
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Platygyra</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Goniopora"/>
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Goniopora</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Favites"/>
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Favites</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Pocillopora"/>
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Pocillopora</div>
          </label>
        </div>
      </div>
    </>
  )
}

export default RadioButtons
