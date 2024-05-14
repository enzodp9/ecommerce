import PropTypes from 'prop-types';
import { useState } from 'react';

const ProductCard = (props) => {
    const [inCart, setInCart] = useState(false);

    const handleBuyClick = () => {
        setInCart(!inCart);
    }

    return (
        <div className="product-card">
            <img className="product-img" src={props.image} alt={props.name} />
            <p className="product-name">{props.name}</p>
            <p className="product-price">${props.price}</p>
            {
                inCart ? <button className="in-cart" onClick={handleBuyClick}></button>
                    :
                    <button className="buy-button" onClick={handleBuyClick}>Comprar</button>
            }

        </div>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
export default ProductCard;