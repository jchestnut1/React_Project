import { useEffect, useState } from 'react';
import Product from "../path/product";
import "./catalog.css";
import Dataservice from '../services/dataService';


function Catalog() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let service = new Dataservice();
        let result = service.getCatalog();
        setProducts(result);
    }, []);
    
    return (
        <div className="catalog">
            <h1>Check out our amazing products!!</h1>
            <h4>Always the Freshest Vegetables and Juices</h4>

            <div className="list-container">
            {products.map( prod => <Product data={prod} /> )
            </div>  
        </div>      
     );
};
    
   


export default Catalog;