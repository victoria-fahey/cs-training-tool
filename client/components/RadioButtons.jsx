import React from 'react'

function RadioButtons(props) {
  const { handleChange } = props
  const { correctCoral } = props

  return (
    <>
      <div className='coral-flex-child'>
        <div>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Acropora" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Acropora</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Seriatopora" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Seriatopora</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Porites" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Porites</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Pavona" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Pavona</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Diploastrea" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Diploastrea</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Montipora" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Montipora</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Favia" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Favia</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Fungia" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Fungia</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Pachyseris" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Pachyseris</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Platygyra" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Platygyra</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Ctenactis" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Ctenactis</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Goniopora" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Goniopora</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Alveopora" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Alveopora</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Favites" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Favites</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Pocillopora" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Pocillopora</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Leptoseris" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Leptoseris</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Goniastrea" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Goniastrea</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Montastrea" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Montastrea</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" name="coralChoice" onChange={handleChange} value="Symphyllia" />
            {correctCoral
              ? <div className="rad-design rightCoral"></div>
              : <div className="rad-design wrongCoral"></div>}
            <div className="rad-text">Symphyllia</div>
          </label>
        </div>
      </div>
    </>
  )
}

export default RadioButtons
