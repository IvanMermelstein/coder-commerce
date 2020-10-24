import React, {useState} from 'react'
import Add from './Add/Add'
import Button from './Button/Button'
import Display from './Display/Display'

const ItemCounter = (props) => {

    const styles = {
        width: 350,
        height: '100%',
        backgroundColor: 'rgb(218, 223, 232)',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        margin: '50px auto'
    }

    const upper = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        height: '40%',
        margin: '20px 0 0'
    }

    const lower = { 
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        margin: '10px 0 20px 0'
    }

    const [counter, setCounter] = useState(props.initial)
    const [exceeded, setExceeded] = useState(false)

    const handleClick = (amount) => {
      
        return () => {
            console.log(counter)
            console.log(props.stock)
            let total = (amount < 0) ? 0 : amount // amount
            let limit = (props.stock < total) ? props.stock : total
            console.log(total)
            setCounter(limit)
            setExceeded(((props.stock - 1) < total) || (total === 0))
        }
    }

    return (
        <>
            <div className="itemCounter" style={styles}>
        
                <div className="upper" style={upper}>
                    <Button add={false} handleClick={handleClick} counter={counter} />
                    <Display counter={counter} exceeded={exceeded} />
                    <Button add={true} handleClick={handleClick} counter={counter} />
                </div>

                <div className="lower" style={lower}>    
                    <Add onAdd={props.onAdd} counter={counter} />
                </div>
        
            </div>
        </>
    )
}

export default ItemCounter
