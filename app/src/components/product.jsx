import "./styles/product.css";
import QuantityPicker from "./quantityPicker";

function Product(props){

    function add(){
        console.log("adding" +props.info);
    }
    return(
        <div className="product">
           
            <img src={"/img/"+props.info.image} alt="" />

            <h5>{props.info.title}</h5>

            <label>Total: ${props.info.price.toFixed(2)}</label>
            <label>${props.info.price.toFixed(2)}</label>
            <div className="control">
                <QuantityPicker />
                <button className="btn btn-primary btn-sm" onClick={add} >Add</button>
            </div>
     </div>
    )
}

export default Product;