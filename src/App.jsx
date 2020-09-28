import React from 'react';


import './App.scss';
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

function App() {
 
  const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
    return (
        <div>
          <Header course = {course}/>
          <Content />
          <Total />
        </div>
          
    )
  }
}

export default App;
