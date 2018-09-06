import React from 'react';

const WishListCards = (props) => {
    return (
        <div className="col-sm-2">
             <div className="card">
                <img className="card-img-top" src={`http://image.tmdb.org/t/p/w342/${props.list.poster_path}`} />
                <div className="card-body">
                    <h6 className="card-title">{props.list.title}</h6>
                    <button type="button" className="btn btn-danger" onClick={() => props.handleRemove(props.list.id)}>Remove</button>                                      
                </div>
            </div>
        </div>
    )
}

export default WishListCards;
