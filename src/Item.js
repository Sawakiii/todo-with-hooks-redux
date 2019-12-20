import React from 'react';
import styled from 'styled-components'

import { useSelector } from "react-redux"

const Item = (props) => {
    // const text = useSelector(state => state.todo)
    const txt = useSelector(state => state.todo[props.id])
    const handleClick = () => {
        console.log(txt.text)
    }
    return (
        <ItemWrapper>
            <p>{txt.text}</p>
            <button onClick={handleClick}>adafafaf</button>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.li`
    /* background-color: gray; */
`

export default Item