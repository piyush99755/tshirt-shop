
import './App.css';
import Item from './components/Item'
import OrderSummary from './components/OrderSummary';
import { useState } from 'react';


function App() {
  const shopName = 'T-shirt shop made with React JS';
  const [items, setItems] = useState(
    [
      {
          
          id:1,
          photo: "img1.webp",
          name: "Joker",
          price: 44.99,
          active: false,
          quantity: 1, 
          isInBag: false
  
          
          
      },
  
      {
        
          id: 2, 
          photo: "img2.webp",
          name: "England",
          price: 49.99,
          active: false,
          quantity: 1, 
          isInBag: false
  
        
    
          
      },
      {
        
          id: 3, 
          photo: "img3.webp",
          name: "2008",
          price: 39.99,
          active: false,
          quantity: 1, 
          isInBag: false
  
        
          
      },
      {
          
            id: 4, 
           photo: "img4.webp",
           name: "LNA",
           price: 29.99,
           active: false,
           quantity: 1, 
           isInBag: false
          
      },
      {
        
          id: 5, 
          photo: "img5.webp",
          name: "Diablo",
          price: 59.99,
          active: false,
          quantity: 1, 
          isInBag: false
  
        
          
      },
      {
        
          id: 6, 
          photo: "img6.webp",
          name: "Beef",
          price: 24.99,
          active: false,
          quantity: 1, 
          isInBag: false
  
        
         
      },
      {
        
          id: 7, 
          photo: "img7.webp",
          name: "Vince",
          price: 49.99,
          active: false,
          quantity: 1, 
          isInBag: false
  
        
          
      },
      {
        
          id: 8, 
          photo: "img8.webp",
          name: "Tea",
          price: 24.99,
          active: false,
          quantity: 1, 
          isInBag: false
  
        
          
      },
      {
        
          id: 9, 
          photo: "img9.webp",
          name: "London",
          price: 39.99,
          active: false,
          quantity: 1, 
          isInBag: false
  
        
         
      }]

  );

    let itemsInBag = items.filter(item => item.isInBag);

    function selectHandler(id) {
     let item =  items.filter(item => item.id === id)[0];
     item.isInBag = !item.isInBag;
     setItems(items.map(element => element.id === id ? item : element));
    }

    function quantityHandler(event, id, increment) {
      event.stopPropagation();
      let item =  items.filter(item => item.id === id)[0];
      item.quantity += increment;
      setItems(items.map(element => element.id === id ? item : element));

  }

  return(
    <>
       <section className = 'items'>
            <h1>{shopName}</h1>
            {
              items.map(item => 
                <Item 
                item = {item}
                key = {item.id}
                selectProduct = {id => selectHandler(id)}
                updateQuantity = {(event, id, increment) => quantityHandler(event, id, increment)} 
                />
              )
            }
            
            
        </section>
        {itemsInBag.length > 0 && <OrderSummary itemsInBag = {itemsInBag} />}
          
            
   

    </>
      
  );
}

export default App;
