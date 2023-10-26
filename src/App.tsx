import { FC } from 'react';
import { useState } from "react";
import './style.css';
import AnimalShow from "./AnimalShow";
import './App.css'

function getRandomAnimal(){
  const animals= ['bird', 'cat','cow','dog', 'gator', 'horse']

  return animals[Math.floor(Math.random() * animals.length)]
}

export const App: FC<{ name: string }> = ({ name }) => {

  const [animals, setAnimals]= useState([])

  const handleClick=()=>{
    console.log('button was clicked')
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals= animals.map((animal, index)=>{
    return <AnimalShow type={animal} key={index}></AnimalShow>
  })

  return (
    <div className='app'>
      Show animal list here
      <button onClick={handleClick}>Add animal</button>
      <div className='animals-list'>{renderedAnimals}</div>
      
    </div>
  );
};
