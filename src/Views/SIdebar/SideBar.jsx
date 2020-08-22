import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../Controllers/Redux/authSlice';

const SideBar = () => {
    const dispatch = useDispatch();

    const { auth } = useSelector(state => state);

    function Signout(){
        dispatch(signOut())
    }
    return (
        <div className="sidebar" >
            <Link classNmae="nav-link" to="/">
                <h1 className="brand">
                    Bug-Tracker
                </h1>
            </Link>
            <ul>
                <li><Link to="/" className="nav-link" >Dashboard</Link></li>
                <li><Link to="/viewbugs" className="nav-link" >View Bugs</Link></li>
               {auth.admin && <li><Link to="/creat" className="nav-link" >Create Bug</Link></li>}
            </ul>
            <button className="nav-link logout" onClick={Signout}>Logout</button>
        </div>
    )
}

export default SideBar

// the <li> in line 24 is so only the admin can create a bug. 