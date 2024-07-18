import { useState } from 'react';
import './styles/admin.css';



function Admin(){
    const [product, setProduct] =useState({
        title: "",
        image: "",
        price: "",
        catagory:"",

    });
    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });
    function handleProduct(e){
        const text = e.target.value;
        const name = e.target.name;
       
        let copy = {...product};
        copy[name] = text; 
        setProduct(copy); 
    }
    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name;
       
        let copy = {...coupon};

        copy[name] = text; // js spread operator

        setCoupon(copy); // updating state with new copy
    }
function saveCoupon(){
    console.log(coupon);
}
function saveProduct(){
    console.log(product);
}
    return(
        <div className="admin page">
            <h1>Admin Panel</h1>
            <p>Welcome to the admin panel.</p>

            <div className="parent">
                <section className='sec-prods'>
                    <h1>Products</h1>
                <div>
                    <div className="form">
                        <label className="form-label">Title</label>
                        <input onBlur={handleProduct} name="title" type="text" className="form-control" />
                    </div>
                    <div className="form">
                        <label className="form-label">Image</label>
                        <input onBlur={handleProduct} name="image" type="text" className="form-control" />
                    </div>
                    <div className="form">
                        <label className="form-label">Price</label>
                        <input onBlur={handleProduct} name="price"  type="text" className="form-control" />
                    </div>
                    <div className="form">
                        <label className="form-label">Catagory</label>
                        <input onBlur={handleProduct} name="catagory"  type="text" className="form-control" />
                    </div>
                    <button onClick={saveProduct} className='btn btn-primary' ><i class="fa-regular fa-floppy-disk"> Save Product</i></button>
                </div>
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
                        <button onClick={saveCoupon} className='btn btn-primary'><i class="fa-regular fa-floppy-disk"> Save Coupon</i></button>
                            
                    </div>
                </section>
                
            </div>
        </div>
    );
      


}

export default Admin;

