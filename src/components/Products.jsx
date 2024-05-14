import ProductCard from "./ProductCard";
import "./products.css";
import PropTypes from 'prop-types';

const Products = (props) => {
    return (
        <section className="products">
            <div className="prod-title">
                <div className="title">
                    <p>{props.title}</p>
                </div>

                <div className="see-all">
                    <p>Ver Todo</p>
                    <img src="assets/Vector.png" alt="arrow" />
                </div>
            </div>
            <section className="prods-section">
                {props.productList.map((product, index) => {
                    return (
                        <ProductCard key={index} name={product.name} price={product.price} image={product.image} />
                    )
                })}

            </section>
        </section>
    )
}

Products.propTypes = {
    title: PropTypes.string.isRequired,
    productList: PropTypes.array.isRequired,
}
export default Products;