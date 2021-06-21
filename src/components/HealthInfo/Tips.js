import React from 'react'
import TipsText from './TipsText';

const Tips = () => {
    return (
        <div>

            { TipsText.map((tip, index) => {
                return <div>
                    <h2>{tip.title}</h2>
                    <p>{ tip.text}</p>
                </div>
            })}
        </div>
    )
}

export default Tips
