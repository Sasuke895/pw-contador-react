import React from 'react'
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <h2>

            <label htmlFor="passoInput">Passo: </label>
            <input 
                id="passoInput"
                type="number"
                value={props.passo}

                onChange={event => props.setPasso(+event.target.value)}

            />
        </h2>
    )
}