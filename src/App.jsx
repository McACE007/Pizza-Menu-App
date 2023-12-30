import { useState } from 'react'

import './App.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
     <h1>Hello React</h1>
      <Menu/>
      <Footer/>
    </>
  )
}

function Header() {
  const style = {color: 'red', fontSize: '48px', textTransform: 'uppercase'};
  return <h1 style={style}>Fast React Pizza Co.</h1>
}

function Menu() {
  return <div>
    <h2>Our menu</h2>
    <Pizza/>
    <Pizza/>
    <Pizza/>
  </div>
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  
  return (
    <footer>{new Date().toLocaleString()}. We're currently open</footer>
  );
}

function Pizza(){
  return <div>
    <h2>Pizza</h2>
    <img src='pizzas/spinaci.jpg' /> 
  </div> 
}

export default App
