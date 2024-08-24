function Item({item, selectProduct, updateQuantity}) {
    
    return (
        <>
           
                <div onClick = {() =>selectProduct(item.id)} className={`product ${item.isInBag ? 'selected' : ''}`}>
                    <div className="photo">
                        <img src={"././img/" + item.photo} alt='' />
                    </div>
                    <div className="description">
                        <span className="name">{item.name}</span>
                        <span className="price">{item.price}</span>
                        {item.isInBag &&
                            <div className="quantity-area">
                            <button disabled = {item.quantity <= 1} onClick = {(event) => updateQuantity(event, item.id, -1)}>-</button>
                            <span className="quantity">{item.quantity}</span>
                            <button onClick = {(event) => updateQuantity(event, item.id, +1)}>+</button>
                        </div>

                        }
                        
                    </div>
                </div>

            
        </>
    )
}

export default Item;