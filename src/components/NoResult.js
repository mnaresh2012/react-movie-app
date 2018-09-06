import React from 'react';

const NoResult = (props) => {
    return (
        <div className="col-sm-12">
        <br />
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h2 className="display-5">Search Movie or No Results Found..!</h2>
                    <p className="lead">Search with different term.</p>
                </div>
            </div>
        </div>
    )
}

export default NoResult;
