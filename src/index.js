import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(
  counter, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onChangeIncrement={(increment) => store.dispatch({ type: 'CHANGE_INCREMENT', increment })}
    onResetCounter={() => store.dispatch({ type: 'RESET_COUNTER' })}
    onResetIncrement={() => store.dispatch({ type: 'RESET_INCREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)
