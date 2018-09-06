import React from 'react';

const ButtonList = (props) => {
    return(
        <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Favorites</a>                
            </div>
        </div>
    )
}

export default ButtonList;
