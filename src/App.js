import React from 'react'
import Form from './Form'
import List from './List'

import { createStore } from "redux"
import { Provider } from "react-redux"

const App = () => {
    const reducer = (state, action) => {
        return state
    }
    const INITIAL_STATE = {
        todo: [{
            id: 0,
            text: "a"
        },
        {
            id: 1,
            text: "aaaa"
        }]
    }

    const store = createStore(reducer, INITIAL_STATE)
    return (
        <Provider store={store}>
            <Form />
            <List />
        </Provider>
    )
}

export default App