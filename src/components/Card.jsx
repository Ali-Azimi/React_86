


const ProductCard = ({title = 'harchi', price, freeShipping, discount, image, quantity}) => {
    const calcDiscountedPrice = () => {
        return price - (price * discount / 100)
    }

    return (
        <div className="card">
            {freeShipping && <div className="badge">Free Shipping </div>}
            <img src={image} />
            <h3>{title}</h3>
            {
                discount ? 
                <div>
                    <p className="discount-row">
                        <span>price: {calcDiscountedPrice()}$</span>
                        <span className="dicount-badge">{discount}%</span>
                    </p>
                    <p className="old-price">{price}$</p>
                </div>
                :
                <p style={price > 200 ? {color: 'red'} : {}}>price: {price}$</p>
                
            }

            {
                quantity > 0 && <p>quanity: {quantity}</p> 
            }

        </div>
    )
}


export default ProductCard;