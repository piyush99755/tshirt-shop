function Item({item}) {
    return (
        <>
           
                <div className={`product ${item.isInBag ? 'selected' : ''}`}>
                    <div className="photo">
                        <img src={"././img/" + item.photo} alt='' />
                    </div>
                    <div className="description">
                        <span className="name">{item.name}</span>
                        <span className="price">{item.price}</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

            
        </>
    )
}

export default Item;