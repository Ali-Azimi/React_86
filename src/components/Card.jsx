


const ProductCard = ({title, price, freeShipping, discount, image, quantity}) => {
    // const title = props.title;
    // const price = props.price;
    // es6 destruction
    // const {title, price} = props;

    const value = '';
    // falsy values 0, '', false, undefined, null, NaN
    if(value) {
        console.log("HAST")
    }

    const calcDiscountedPrice = () => {
        return price - (price * discount / 100)
    }

    return (
        <div className="card">
            {freeShipping && <div className="badge">Free Shipping </div>}
            <img src={image} />
            <h3>{title}</h3>
            {/* <p className={price > 200 ? 'red' : ''}>price: {price}$</p> */}


            {/* price */}
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