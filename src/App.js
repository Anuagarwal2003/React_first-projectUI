import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decNumber, incNumber } from './action/index';




function App() {
  const myState = useSelector((state) => state.increaseNumber);
  const dispatch = useDispatch();
  return (
   <>
   <div className="container text-center text-secondary">
   <h1>Incremfsfniwnwuifnewuifvneuineiunfeuihfrement</h1>
    
      <h1>Increment/Decrement</h1>
      <h3>Using React & Redux</h3>
      <div className="quantity">
        <a className="quantity_minus" title="Decrement" onClick = {() => dispatch(incNumber())} ><span> - </span></a>
        <input name="quantity" type="text" className="quantity_input" value={myState}/>
        <a className="quantity_plus" title="Increment" onClick = {() => dispatch(decNumber())} ><span> + </span></a>
      
    </div>

   </div>
   </>
  );
}

export default App;
