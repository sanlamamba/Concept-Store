import React from 'react';

function ShippingInfo(props) {
    return(
        <div className='row d-flex justify-content-center'>
            <div className='col-4 py-2'>
                <h4>Information de livraison</h4>
                <div className='p-2 row'>
                    <div className='col-12'>
                        <div className='row mt-2'>
                            <div className='col-6 d-flex flex-column'>
                                <label className='row label' for ='pays'>Pays</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Votre Pays</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label className='row label' for ='pays'>Ville</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Ville</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            
                        </div>
                        <div className='row mt-2'>
                            <div className='col-12 d-flex flex-column'>
                                <label className='row label' for ='Nom'>Adresse De livraion</label>
                                <input type='text' className='row form-control' placeholder='Rue, Quartier' />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-12 d-flex flex-column'>
                                <label className='row label' for ='Nom'>Autre Information</label>
                                <input type='mail' className='row form-control py-2 my-1 w-100' placeholder='BP, Porte ...' />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-12'>
                                <label className='row label' for ='Nom'>Preference heure de livraison</label>
                                <div className='row'>
                                    <div class="form-check col d-flex justify-content-start">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Matin <span className='text-muted'>8-12h</span>
                                        </label>
                                        </div>
                                        <div class="form-check col d-flex justify-content-start">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Soir <span className='text-muted'>14h-18</span>

                                        </label>
                                    </div>  

                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingInfo;