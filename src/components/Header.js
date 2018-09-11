import React from 'react';

const Header = (props) => {
    const text = (props.showWishLists)?'Hide Wishilist':'Show Wishlist'
    return (
        <nav className="navbar navbar-default bg-light">
            <a className="navbar-brand" href="#">
                React Movie App
                 <button className="btn btn-primary show-wishlist" type="button" onClick={props.handleToggleWishlist}>
                   {text}
                </button>
            </a>
        </nav>
    )
}
export default Header;
