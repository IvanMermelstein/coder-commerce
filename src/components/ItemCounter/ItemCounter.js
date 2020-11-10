import React, {useState} from 'react'
import Add from './Add/Add'
import Button from './Button/Button'
import Display from './Display/Display'
import './ItemCounter.css'

const ItemCounter = (props) => {

    const [counter, setCounter] = useState(props.initial)
    const [exceeded, setExceeded] = useState(false)

    const handleClick = (amount) => {
        return () => {
            let total = (amount < 0) ? 0 : amount
            let limit = (props.stock < total) ? props.stock : total
            setCounter(limit)
            setExceeded(((props.stock - 1) < total) || (total === 0))
        }
    }

    return (
        <>
            <div className="itemCounter">
        
                <div className="upper">
                    <Button add={false} onClick={handleClick} counter={counter} />
                    <Display counter={counter} exceeded={exceeded} />
                    <Button add={true} onClick={handleClick} counter={counter} />
                </div>

                <div className="lower">    
                    <Add onAdd={props.onAdd} counter={[counter, setCounter]} text="Agregar"/>
                </div>
        
            </div>
        </>
    )
}

export default ItemCounter
