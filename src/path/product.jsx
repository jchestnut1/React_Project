import { useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    
    const [quantity,setQuantity]= useState(1);
    const handleQuantityChange = (qty) => {
        console.log("QuantityPicker changed",qty);
        setQuantity(qty);
}

    const getTotal=() =>{
        const total = quantity*props.data.price;
        return total.toFixed("2");
    }

    return (
    
    <div className="product">

        <img src={"/images/" + props.data.image } alt="" />

        <h5>{props.data.title}</h5>

        <div className="prices">
        <label>Total</label>
        <label>{props.data.price.toFixed("2")}</label>
        </div>

        <div className="q-picker">
        <QuantityPicker />
        </div>

        <button className="add">Add</button>
    </div>
    );
};

export default Product;