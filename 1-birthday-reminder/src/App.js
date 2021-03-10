import React , {useState} from "react"
import Data from "./data"
import  List  from "./List";
import './App.css';

function App() {
  const [people , setPeople] = useState(Data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today </h3>
        <List People={people}/>
        <button onClick={() => setPeople([]) }>clear all</button>
      </section>
    </main>
  );
}

export default App;
