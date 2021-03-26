import './App.css';

//use selector connects a function to its state?
//use dispatch 
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch(); 

  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? 
      (<h3>Valable info i shouldnt see if not logged in</h3>)
      : 
      ''}
    </div> 
  );
}

export default App;
