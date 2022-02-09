export const PersonalInfo= props =>{
    return(
        <div className='row d-flex justify-content-center'>
            <div className='col-4 py-2'>
                <h4>Information Personnelle</h4>
                <div className='p-2 row'>
                    <div className='col-12'>
                        <div className='row mt-2'>
                            <div className='col-6 d-flex flex-column'>
                                <label className='row label' for ='prenom'>Prenom</label>
                                <input type='text' className='row form-control' placeholder='Prenom' />
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label className='row label' for ='Nom'>Nom de famille</label>
                                <input type='text' className='row form-control' placeholder='Nom de Famille' />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-12 d-flex flex-column'>
                                <label className='row label' for ='Nom'>Nom de famille</label>
                                <input type='mail' className='row form-control' placeholder='Adresse Mail' />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-12 d-flex flex-column'>
                                <label className='row label' for ='Nom'>Adresse Mail</label>
                                <input type='mail' className='row form-control py-2 my-1 w-100' placeholder='Numero de telephone' />
                            </div>
                        </div>

                        <div className='row mt-2'>
                            <div className='col-12 d-flex flex-column'>
                                <label className='row label' for ='Nom'>Commentaire</label>

                                <textarea placeholder='votre message' className='row form-control py-2 my-1 w-100'>
                                    Votre message
                                </textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
