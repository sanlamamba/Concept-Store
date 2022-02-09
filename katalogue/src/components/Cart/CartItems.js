import React, { useState } from 'react';
import { FiEye, FiTrash2 } from 'react-icons/fi';


function CartItems(props) {
    return (
        <div className='row p-2'>
            <div className="col-12">
                <div className='row '>
                    <h5 className='col-6 py-2 d-flex'>Cart Details : </h5>
                </div>
                <div className='row'>
                    <div className='col-1'> actions</div>
                    <div className='col-5'> Product</div>
                    <div className='col-2'> Prix Unitaire</div>
                    <div className='col-2'> Quantite</div>
                    <div className='col-2'> Sous-Total</div>
                </div>
                <CartItem quantity={5} price={5000} title="Some product Title Here" image ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUArP////8Aqf8Aqv8Ap/8Apf8Arf8Ar/8As//v+v+V2//j8/8Asf+p4/+N2P+Z3f/3/f+34/92z//e9f/X8//L7f/p9//a7//I6P+d1f+W1/8vt/+w4f/x+/9Huv9Uw/9oxf+J0P+m2v+Bzv9dv/9Dvv+D0/8nuv/E6/9wy/95y/+l4f/O6v+a1f9fyP/Z9f/J8sepAAADKklEQVR4nO3XbVPqSBCG4emeQBKDmvASPASICiGgHPf//7vtRIHobun5tGSr7qvKKozTVfM4Mz3BOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/EXV1pL79GERR8P4wGEWDrwODqB7qe4mvVd2Xkt7SsYhM1k3EYioyDdunM3tWfx4Y7W3gri3Z2adN+7BT0l+p7Geyt4UIlzKby9Ky6kKmM8k+zdwvJF+m6aP9uZY4k1XluyU9Vsu0qGKxPbmOZVTGeWHLlazKUNJ1d1yYyViX8kudvsqzu5U77Zb0ly/T12E0k9D5R9kPXJIevC9XyXCwl4N2Bo6ytNY3y+ZcsnoMHmUWdEquNf0/EZWFaxPagbwNdC5Pqi/pXG2lbJV8uXF+vbBxw6oM9dAkjJK40q3kQafk2im+5b0Wudh07+Regwfbh/okx0Bv7FcXTOQQzqRsFsnr4F6e1RV5XltC29iXkmuH+F4xnsqrHa97udEgswz6Wx4Cm/2tTbyYSC537YXg317TifWXukm4TpuE55JrZ/iWf7GGb73Cpnun2ib8JVmb0ILpIZVs2A4M/hJrNs5VeV7oeiXaKblyhh8Uh2kT5l8S2sTtiEr63nL823063fpzwuB/k9BpEUvk7ODdfJzDj11q51CnchclUrXN0g+eZel8u0u37S49l1w7wk9soSp/ahtP505jvVTHi6HfLj/ufrstspG3TtP00tWlOfW7lxb1qHkhK/2p9W/UH+y2CG5l10x8+PET1rXtU9mP3CiJS0s4udwWmz4ntFP0O7C3y8J5m/TAZl95X8XJaDCVbfcib5pnsGte5YKjvAzGTfu9lFxt/j+zt+hjvRFx7cVQjdPEdmSYpONKJp9exuy/8FbPZOGbvZnZvj5ot6THIpE8bRbEuYXEq/Y+sPO2itsXtI6lpLm0yxWu7I6ctvnPJT2m1TGZt1+KnN/Zp/ZyD8bzZPdl4HCRJMeoCeOLhyQr/OeSHvManr7O2hfh0yfn/rEw6oanZzo8pbqUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL3wN/+OMASYO+AqAAAAAElFTkSuQmCC' tags={["iPhone","gold","64gb"]} />
                <CartItem quantity={5} price={5000} title="Some product Title Here" image ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUArP////8Aqf8Aqv8Ap/8Apf8Arf8Ar/8As//v+v+V2//j8/8Asf+p4/+N2P+Z3f/3/f+34/92z//e9f/X8//L7f/p9//a7//I6P+d1f+W1/8vt/+w4f/x+/9Huv9Uw/9oxf+J0P+m2v+Bzv9dv/9Dvv+D0/8nuv/E6/9wy/95y/+l4f/O6v+a1f9fyP/Z9f/J8sepAAADKklEQVR4nO3XbVPqSBCG4emeQBKDmvASPASICiGgHPf//7vtRIHobun5tGSr7qvKKozTVfM4Mz3BOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/EXV1pL79GERR8P4wGEWDrwODqB7qe4mvVd2Xkt7SsYhM1k3EYioyDdunM3tWfx4Y7W3gri3Z2adN+7BT0l+p7Geyt4UIlzKby9Ky6kKmM8k+zdwvJF+m6aP9uZY4k1XluyU9Vsu0qGKxPbmOZVTGeWHLlazKUNJ1d1yYyViX8kudvsqzu5U77Zb0ly/T12E0k9D5R9kPXJIevC9XyXCwl4N2Bo6ytNY3y+ZcsnoMHmUWdEquNf0/EZWFaxPagbwNdC5Pqi/pXG2lbJV8uXF+vbBxw6oM9dAkjJK40q3kQafk2im+5b0Wudh07+Regwfbh/okx0Bv7FcXTOQQzqRsFsnr4F6e1RV5XltC29iXkmuH+F4xnsqrHa97udEgswz6Wx4Cm/2tTbyYSC537YXg317TifWXukm4TpuE55JrZ/iWf7GGb73Cpnun2ib8JVmb0ILpIZVs2A4M/hJrNs5VeV7oeiXaKblyhh8Uh2kT5l8S2sTtiEr63nL823063fpzwuB/k9BpEUvk7ODdfJzDj11q51CnchclUrXN0g+eZel8u0u37S49l1w7wk9soSp/ahtP505jvVTHi6HfLj/ufrstspG3TtP00tWlOfW7lxb1qHkhK/2p9W/UH+y2CG5l10x8+PET1rXtU9mP3CiJS0s4udwWmz4ntFP0O7C3y8J5m/TAZl95X8XJaDCVbfcib5pnsGte5YKjvAzGTfu9lFxt/j+zt+hjvRFx7cVQjdPEdmSYpONKJp9exuy/8FbPZOGbvZnZvj5ot6THIpE8bRbEuYXEq/Y+sPO2itsXtI6lpLm0yxWu7I6ctvnPJT2m1TGZt1+KnN/Zp/ZyD8bzZPdl4HCRJMeoCeOLhyQr/OeSHvManr7O2hfh0yfn/rEw6oanZzo8pbqUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL3wN/+OMASYO+AqAAAAAElFTkSuQmCC' tags={["iPhone","gold","64gb"]} />
                <div className='row mt-2 d-flex justify-content-end'>
                    <h6 className='col-4 d-flex justify-content-center align-items-center'>
                        Total du panier :
                    </h6>
                    <h4 className='col-3 d-flex justify-content-center align-items-center'>
                        60 000 F
                    </h4>
                    
                </div>
            </div>
        </div>
    );
}

const CartItem = props =>{
    let [quantity, setQuantity]= useState(parseInt(props.quantity))
    return (
        <div className='border rounded row my-1 py-1'>
            {/* ACTIONs */}
            <div className='col-1 d-flex flex-column justify-content-center align-items-center'> 
                <FiEye className='rounded p-1 my-1' size={30} />
                <FiTrash2 className='rounded p-1 my-1' size={30} color='red-50' />
            </div>
            {/* IMAGE */}
            <div className='col-1'> 
                <img className="rounded" src={props.image} height='75'/>

            </div>
            {/* TITLE */}
            <div className='col-4'> 
                <h6 className='row p-2'>{props.title}</h6>
                <span className='row px-2 text-muted'>Tags : {props.tags.map((tag,index)=> tag + " ")} </span>

            </div>
            {/* PRICE */}
            <h6 className='col-2 d-flex align-items-center justify-content-center'> {props.price}</h6>
            {/* QUANTITE */}
            <div className='col-2 d-flex align-items-center justify-content-center'> 
                <button className='bg-light border rounded px-2 mx-3' onClick={()=>{quantity>1 ? setQuantity(quantity-=1): quantity = quantity}}> - </button>
                <span>{quantity}</span>
                <button className='bg-light border rounded px-2 mx-3' onClick={()=>{setQuantity(quantity+=1)}}> + </button>
            </div>
            {/* TOTAL */}
            <h6 className='col-2 d-flex align-items-center justify-content-center'> {props.price * quantity} F </h6>
            
        </div>
    )
}

export default CartItems;