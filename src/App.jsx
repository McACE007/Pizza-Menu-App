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
    <><div className="container">
      <Header />
      <Menu/>
      <Footer/>
    </div>
    </>
  )
}


function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {

  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzas.length > 0 ? (
         <ul className='pizzas'>
        {pizzaData.map(pizza => 
          <Pizza
            pizzaObject = {pizza}
            key = {pizza.name}
          />
        )}
      </ul>
      ) : 
        <p>We're still working on our menu. Please come back later :)</p>}
    </main>
  );
}

function Pizza(props){
  return (
    <li className="pizza">
      <img src={props.pizzaObject.photoName} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>{props.pizzaObject.price}</span>
      </div>
    </li> 
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : 
        <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}
    </footer>
  );
}


export default App
