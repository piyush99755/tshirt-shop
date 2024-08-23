
import './App.css';


function App() {
  const shopName = 'T-shirt shop made with React JS';
  const items = [
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

      
       
    }];

  return(
    <>
           <section className="items">
                <h1>{shopName}</h1>
                
                <div className="product selected">
                    <div className="photo">
                        <img src="././img/img1.webp" alt='' />
                    </div>
                    <div className="description">
                        <span className="name">Joker</span>
                        <span className="price">£ 44.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="././img/img2.webp" alt='' />
                    </div>
                    <div className="description">
                        <span className="name">England</span>
                        <span className="price">£ 49.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="././img/img3.webp" alt='' />
                    </div>
                    <div className="description">
                        <span className="name">2008</span>
                        <span className="price">£ 39.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="././img/img4.webp" alt='' />
                    </div>
                    <div className="description">
                        <span className="name">LNA</span>
                        <span className="price">£ 29.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="././img/img5.webp" alt='' />
                    </div>
                    <div className="description">
                        <span className="name">Diablo</span>
                        <span className="price">£ 59.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="././img/img6.webp" alt='' />
                    </div>
                    <div className="description">
                        <span className="name">Beef</span>
                        <span className="price">£ 24.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="././img/img7.webp" alt='' />
                    </div>
                    <div className="description">
                        <span className="name">Vince</span>
                        <span className="price">£ 49.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="././img/img8.webp" alt='' />
                    </div>
                    <div className="description">
                        <span className="name">Tea</span>
                        <span className="price">£ 24.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                
                <div className="product">
                    <div className="photo">
                        <img src="././img/img9.webp" alt='' />
                    </div>
                    <div className="description">
                        <span className="name">London</span>
                        <span className="price">£ 39.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </section>

   

    </>
      
  );
}

export default App;
