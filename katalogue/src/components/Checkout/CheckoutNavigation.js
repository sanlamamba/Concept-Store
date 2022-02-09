import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutNavigation(props) {
    return (
        <div className='row mt-2'>
            <div className='col-6 d-flex justify-content-start'>
                <Link to="/panier" className='btn btn-outline-secondary'>Revenir au panier</Link>
            </div>
            <div className='col-6 d-flex justify-content-between'>
                <button onClick={()=>props.navBack()} className={props.currentNav == 'personal'? 'btn btn-outline-secondary disabled': 'btn btn-outline-primary '}>Precedent</button>
                
                {props.currentNav == 'payment'?
                    <Link to="/validation/commande" className='btn btn-primary'>Valider la commande</Link>
                    :
                    <button onClick={()=>props.navNext()} className='btn btn-primary'> Continuer </button>
                }

            </div>
            
        </div>
    );
}

export default CheckoutNavigation;