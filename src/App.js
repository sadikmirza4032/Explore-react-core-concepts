
import './App.css';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Frinds';

function App() {
function HandleEvent(){
  alert('hi bro')
}
const HandleEvent2 = () =>{
  alert('book')
}

const Four = (num) =>{
 alert(num + 10);
}


  return (
   <>
   <h3>React Core Concept part 2</h3>
   <Friends></Friends>
   <Users></Users>
   <Team></Team>
  <Counter></Counter>



   <button onClick={HandleEvent}>Click Me</button>
   <button onClick={HandleEvent2}>Click Me 2</button>
   <button onClick={() => {alert('third')}}>CLick 3</button>
   <button onClick={() =>{Four(4)}}>Click 4</button>

   </>
  );
}

export default App;
