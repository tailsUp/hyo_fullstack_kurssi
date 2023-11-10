import { createStore } from 'redux'

const App = () => {

  const increaseByOne = ()  => {
    store.dispatch({type: 'INCREMENT'})
  }
  const decreaseByOne = ()  => {
    store.dispatch({type: 'DECREMENT'})
  }
  const setToZero = () => {
    store.dispatch({type: 'ZERO'})
  }

  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'ZERO':
        return 0
      default: // jos ei mikään ylläolevista tullaan tänne
        return state
    }
  }

  const store = createStore(counterReducer)
  store.subscribe(App)

  store.subscribe(() => {
    const storeNow = store.getState()
    console.log(storeNow)
  })

  return (
    <div>
      <p>{store.getState()}</p>
      <Display counter={store.getState()} />

      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />   
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>
      <p>{props.counter}</p>
    </div>
  )
}

export default App