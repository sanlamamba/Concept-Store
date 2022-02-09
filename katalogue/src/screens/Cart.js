import React from 'react';
import CartItems from '../components/Cart/CartItems';
import CheckoutSidebar from '../components/Cart/CheckoutSidebar';


const Cart = () => {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-end'>


                <div className='col-12'>
                    <CartItems/>

                    
                </div>

                <div className="col-6">
                    
                </div>

                <div className='col-5'>
                    <CheckoutSidebar/>
                </div>
                
            </div>
            <div className='row'>
                asdasdasd
            </div>
            
            
        </div>
    );
};

export default Cart;