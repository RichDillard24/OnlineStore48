import './styles/cart.css';
import {useContext} from 'react';
import DataContext from '../state/dataContext';

function Cart(){

    const cart = useContext(DataContext).cart;


    function getTotal(){
        let total=0;
        for(let i=0;i<cart.length;i++){
            let prod = cart[i];
            total += (prod.quantity * prod.price);
        }

        return total.toFixed(2);
    }


    return(
    <div className="cart page">
        <h1>Welcome to your Cart!</h1>

            <div className="parent">
                <section className="list">

                    {cart.map(prod=>
                    <div className='cart-prod'>
                        <img src={"/img/"+ prod.image} alt="" />
                        <h5>{prod.title}</h5>
                        <label>${prod.price.toFixed(2)}</label>
                        <label>{prod.quantity}</label>
                        <label >Total</label>
                        <button className='btn btn-danger btn-sm'>Remove</button>
                    </div>)}

                </section>

                <section className="menu">
                    <h3>Total</h3>
                    <h3>${getTotal()}</h3>

                    <hr />
                    <button className='btn btn-primary'>Checkout</button>
                </section>

            </div>
    </div>
    );
}

export default Cart;