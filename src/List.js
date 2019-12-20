import React from 'react'
import Item from './Item'

import { useSelector } from "react-redux"

const List = () => {
    const text = useSelector(state => state.todo)
    const texts = text.map((txt, i)=>{
        return (
                <Item id={i}></Item>
                // <Item></Item>
        )
    })
    const handleClick = () => {
        console.log(texts)
    }
    return (
        <div>
            <ol>
                {texts}
            </ol>
            <button onClick={handleClick}>afdfafaf</button>
        </div>
    )
}

export default List