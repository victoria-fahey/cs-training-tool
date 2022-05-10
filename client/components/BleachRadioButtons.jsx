import React from 'react'

function BleachRadioButtons(props) {
    const { handleChange } = props
    const { correctBleach } = props

    return (
        <>
            <div className='bleach-flex-child'>
                <div>
                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Massive - Not Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Massive - Not Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Massive - Fully Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Massive - Fully Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Massive - Partially Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Massive - Partially Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Branching - Not Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Branching - Not Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Branching - Fully Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Branching - Fully Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Branching - Partially Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Branching - Partially Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Plate-like - Not Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Plate-like - Not Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Plate-like - Fully Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Plate-like - Fully Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Plate-like - Partially Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Plate-like - Partially Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Solitary - Not Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Solitary - Not Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Solitary - Fully Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Solitary - Fully Bleached</div>
                    </label>

                    <label className='rad-label'>
                        <input
                            type='radio' className='rad-input' name='fishChoice'
                            onChange={handleChange}
                            value='Solitary - Partially Bleached' />
                        {correctBleach
                            ? <div className='rad-design rightBleach'></div>
                            : <div className='rad-design wrongBleach'></div>}
                        <div className='rad-text'>Solitary - Partially Bleached</div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default BleachRadioButtons
