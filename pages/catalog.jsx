
import Product from "../path/product";
import "./catalog.css";


function Catalog() {
    return (
        <div className="catalog">
            <h1>Check out our amazing products!!</h1>


            <div className="list-container">
            <Product />
            <Product />
            <Product />
            </div>
           
        </div>      
    );
}

export default Catalog;