import {useState} from 'react';
import"./styles/quantityPicker.css";

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1)
    function decrease(){
       let val = quantity - 1;
        if(val < 0) val = 0;
        setQuantity(val);
  
    }
    
    function increase(){
        let val = quantity + 1;
        setQuantity(val);
       
    }
    return(
        <div className="qt-Picker">
            <button className='btn btn-sm btn-outline-success'disabled={quantity===1} onClick={decrease}>-</button>

            <label>{quantity}</label>

            <button className='btn btn-sm btn-outline-success' onClick={increase}>+</button>

        </div>
    )
}

export default QuantityPicker;