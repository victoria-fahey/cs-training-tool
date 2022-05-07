/* eslint-disable indent */
import React from 'react'

function FishRadioButtons(props) {
    const { handleChange } = props
    const { correctFish } = props

    return (
        <>
            <div className='fish-flex-child'>
                <div>
                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Angelfish' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Angelfish</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Butterflyfish' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Butterflyfish</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Rabbitfish' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Rabbitfish</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Parrotfish' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Parrotfish</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Unicornfish' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Unicornfish</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Batfish' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Batfish</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Fusilier' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Fusilier</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Cardinal fish' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Cardinal fish</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Holocentridae' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Holocentridae</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Serranidae' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Serranidae</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Wrasse' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Wrasse</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Snapper' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Snapper</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Bream' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Bream</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Trevally' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Trevally</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Barracuda' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Barracuda</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Queenfish' />
                        {correctFish
                            ? <div className='rad-design rightFish'></div>
                            : <div className='rad-design wrongFish'></div>}
                        <div className='rad-text'>Queenfish</div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default FishRadioButtons
