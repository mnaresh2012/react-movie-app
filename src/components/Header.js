import React from 'react';
import Logo from '../images/logo.png';

const Header = (props) => {
    const text = (props.showWishLists)?'Hide Wishilist':'Show Wishlist'
    return (
        <nav className="navbar navbar-default bg-light">
            <a className="navbar-brand" href="#">
                <img src={Logo} className="d-inline-block align-top" alt="" />
                &nbsp;&nbsp; Movie App

                 <button className="btn btn-primary show-wishlist" type="button" onClick={props.handleToggleWishlist}>
                   {text}
                </button>

            </a>

            
        </nav>
    )
}

export default Header;
