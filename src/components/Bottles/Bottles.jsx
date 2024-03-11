import { useEffect, useState } from "react";
import { addToLS, getStoredCart } from "../../utilities/localstorage";
import Bottle from "../bottle/Bottle";
import './Bottles.css';
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  const [cart, setCart] = useState([]);


  useEffect(()=>{
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  },[])

  useEffect(()=> {
    console.log('called the useEffect', bottles.length)
    if(bottles.length){
      const storedCart = getStoredCart();
      console.log(storedCart, bottles)
      const savCart = [];
      for(const id of storedCart){
        console.log(id)
        const bottle = bottles.find(bottle => bottle.id === id);
        if(bottle){
          savCart.push(bottle)
        }
      }
      console.log('saved cart', savCart);
      setCart(savCart);



    }
  },[bottles]);



  const handleAddToCart = bottle => {
    const newCard = [...cart, bottle];
    setCart(newCard);
    addToLS(bottle.id);
  }

  return (
    <div>
      <h2>Bottles Available: {bottles.length} </h2>      
      <Cart cart={cart}></Cart>

      <div className="bottle-container">
        {
          bottles.map(bottle => <Bottle 
            key={bottle.id} 
            handleAddToCart={handleAddToCart}            
            bottle={bottle} ></Bottle>)
        }  
      </div>    
    </div>
  );
};

export default Bottles;