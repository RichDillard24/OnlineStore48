import './styles/catalog.css';
import Product from '../components/product';
import { useEffect, useState} from 'react';
import dataServices from '../services/dataServices';

//TEST CHANGE


function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(function() {

        const prods = dataServices.getProducts();
        setProducts(prods);

        const cats = dataServices.getCategory();
        setCategories(cats);

    }, []);


    return(
        <div className="catalog page">
            <h1> Catalog! </h1>
            
            <div className="filter">
            {categories.map((cat) => <button className='btn btn-sm btn-dark'>{cat}</button>)}
            </div>

            {products.map(prod =>  <Product info={prod}/>)}

        </div>
    )
}

export default Catalog;
