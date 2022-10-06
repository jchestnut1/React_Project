import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = () =>{
    return <div className="product">

        <img src="https://picsum.photos/100/125" alt="" />

        <h1>Air Jordan 12</h1>

        <label>Total</label>
        <label>Price</label>

        <QuantityPicker />

        <button className="add">Add</button>
    </div>
};

export default Product;