import React, { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import CheckoutNavigation from '../components/Checkout/CheckoutNavigation';
import { PersonalInfo } from '../components/Checkout/PersonalInfo';
import ShippingInfo from '../components/Checkout/ShippingInfo';



function Checkout(props) {
    let [onglet, setOnglet] = useState("personal")

    const NavNext = ()=>{
        let currentNav = onglet
        if(currentNav == 'personal') return setOnglet(onglet ='shipping')
        if(currentNav == 'shipping') return setOnglet(onglet ='payment')
    }
    const NavBack = ()=>{
        let currentNav = onglet
        if(currentNav == 'payment') return setOnglet(onglet ='shipping')
        if(currentNav == 'shipping') return setOnglet(onglet ='personal')
    }
    

    return (
        <div className='container'>
            <div className='row mt-1 '>
                <h6 className='col-2 d-flex text-muted'></h6>
                <h6 className='col-3 d-flex text-muted justify-content-center'><button className={onglet=="personal" ?"btn btn-link disabled": "btn btn-light"} onClick={()=>setOnglet(onglet= "personal")}> Information Personnelle </button></h6> {/*PERSONAL*/}
                <h6 className='col-3 d-flex text-muted justify-content-center'><button className={onglet=="shipping" ?"btn btn-link disabled": "btn btn-light"} onClick={()=>setOnglet(onglet= "shipping")}> Information Livraison </button></h6>{/*SHIPPING*/}
                <h6 className='col-3 d-flex text-muted justify-content-center'><button className={onglet=="payment" ?"btn btn-link disabled": "btn btn-light"} onClick={()=>setOnglet(onglet= "payment")}> Information Paiement </button></h6>{/*PAYMENT*/}
                <h6 className='col-1 d-flex text-muted justify-content-center align-items-center'> <button className="btn btn-light"> <FiHelpCircle/> </button> </h6>
            </div>
            <div className='row mt-1'>
                {onglet == 'payment' ?<></>: onglet == 'shipping'? <ShippingInfo/> : <PersonalInfo/> } 
            </div>
            <CheckoutNavigation currentNav={onglet} navNext = {NavNext} navBack= {NavBack} />
        </div>
    );
}


export default Checkout;