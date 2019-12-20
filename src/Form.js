import React from 'react';

const Form = () => {
    const handleClick = (event) => {
        event.preventDefault()
    }
    return (
        <form>
            <input type="text"/>
            <button onClick={handleClick} type="submit">追加</button>
        </form>
    )
}

export default Form