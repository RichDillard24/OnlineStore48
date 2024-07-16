import { useState } from 'react';
import "./styles/product.css";
import QuantityPicker from "./quantityPicker";

function Product(props){
    const [quantity, setQuantity] = useState(1)

    function add(){
        console.log("adding" +props.info);
    }
    function  handleQuantityChange(val){
       
        setQuantity(val);
    }
    function getTotal(){
        let total = props.info.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className="product">
           
            <img src={"/img/"+props.info.image} alt="" />

            <h5>{props.info.title}</h5>

            <label className="total">Total: ${getTotal()}</label>
            <label>${props.info.price.toFixed(2)}</label>
            <div className="control">
                <QuantityPicker onChange={handleQuantityChange}/>
                <button className="btn btn-primary btn-sm" onClick={add} ><i class="fa-solid fa-cart-arrow-down"></i></button>
              
            </div>
     </div>
    )
}

export default Product; 