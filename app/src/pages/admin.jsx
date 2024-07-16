import { useState } from 'react';
import './styles/admin.css';



function Admin(){

    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });

    function handleCoupon(){
        const text = e.target.value;
        const name = e.target.name;
       
        let copy = {...coupon};

        copy[name] = text; // js spread operator

        setCoupon(copy); // updating state with new copy
    }

    return(
        <div className="admin page">
            <h1>Admin Panel</h1>
            <p>Welcome to the admin panel.</p>

            <div className="parent">
                <section className='sec-prods'>
                    <h1>Products</h1>
                </section>

                <section className='sec-coupons'>
                    <h1>Coupons</h1>

                    <div className="form">
                
                <div>
                    <label className="form-label">Code</label>
                    <input onBlur={handleCoupon} name="code" type="text" className="form-control" />                    
                </div>
                <div>
                    <label className="form-label">Discount</label>
                    <input onBlur={handleCoupon} name="discount" type="text" className="form-control" />                    
                </div>
                <button className='btn btn-primary'>Save Coupon</button>
                    
            </div>
                </section>
                
            </div>
        </div>
    );
      


}

export default Admin

