import React, {useState} from 'react';
import UserSidebar from '../components/User/UserSidebar';

function Account(props) {
    let [menuPosition, setMenuPosition] = useState("account");
    alert(menuPosition)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4 mt-3'>
                    <UserSidebar menuPosition={menuPosition} setMenuPosition={setMenuPosition} />
                </div>
                <div className='col-8 p-3'>
                    <div className='row'>
                        asdasdas
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;