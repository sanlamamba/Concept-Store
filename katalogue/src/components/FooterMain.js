import React from 'react';
import { MenuLink } from './sub-components/MenuLink';

const FooterMain = () => {
    return (
        <div className="container-fluid py-4 footer">
            <div className='container'>
                <div className='row py-2'>
                    <div className='col-2'>
                        <h6 className='row p-2 footerHeading'>Quick Links</h6>
                        <div className='row'>
                            <MenuLink link='' extraClass='footerItem' title='Home' />
                            <MenuLink link='boutique' extraClass='footerItem' title='Shop' />
                            <MenuLink link='compte' extraClass='footerItem' title='Account' />
                            <MenuLink link='contact' extraClass='footerItem' title='Contact' />
                        </div>
                    </div>
                    <div className='col-2'>
                        <h6 className='row p-2 footerHeading'>Categories</h6>
                        <div className='row'>
                            <MenuLink link='#' extraClass='footerItem' title='Electronics' />
                            <MenuLink link='#' extraClass='footerItem' title='Clothing' />
                            <MenuLink link='#' extraClass='footerItem' title='Accessories' />
                            <MenuLink link='#' extraClass='footerItem' title='Furnitures' />
                        </div>
                    </div>
                    <div className='col-2'>
                        <h6 className='row p-2 footerHeading'>Account</h6>
                        <div className='row'>
                            <MenuLink link='#' extraClass='footerItem' title='Order Invoices' />
                            <MenuLink link='#' extraClass='footerItem' title='Checkout' />
                            <MenuLink link='#' extraClass='footerItem' title='Order History' />

                            <MenuLink link='#' extraClass='footerItem' title='Cart' />
                        </div>
                    </div>
                    
                    
                </div>
                <div className='row py-2 mt-3 footerItem footer_copyright text-muted'>
                    <div className='col-2'>
                        <div className='row '>
                            © Katalogue 2021
                        </div>
                    </div>
                    <div className='col-3'>
                            Developped and powered by Dra-po
                    </div>
                    <div className='col-4'>
                            
                    </div>
                    <div className='col-3'>
                            Something Something
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};


export default FooterMain;