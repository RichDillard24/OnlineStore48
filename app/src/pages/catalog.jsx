import './styles/catalog.css';
import Product from '../components/product';
import { useEffect, useState} from 'react';
import dataServices from '../services/dataServices';
import axios from 'axios';
//TEST CHANGE


function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(function() {

        // const prods = dataServices.getProducts();
        // setProducts(prods);
        loadCatalog();
        loadCategories();


        // const cats = dataServices.getCategory();
        // setCategories(cats);

    }, []);

    async function loadCatalog(){
        let prods = await dataServices.getProducts()
        setProducts(prods)
        console.log(prods)
    }
    async function  loadCategories(){

        let cats = await dataServices.getCategories()
        setCategories(cats)
        console.log(cats)

        // axios.get('https://api.example.com/categories')
        //    .then(response => {
        //         setCategories(response.data);
        //     })
        //    .catch(error => {
        //         console.error('Error fetching categories: ', error);
        //     });
    }


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
