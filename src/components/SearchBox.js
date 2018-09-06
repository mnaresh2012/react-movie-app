import React from 'react';

const SearchBox = (props) => {
    return (
        <form id="movieSearch" onSubmit={props.handleSubmit}>                                            
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Search by Movie Name</label>
                <div class="col-sm-6">
                    <input type="text" className="form-control" value={props.searchTerm} onChange={props.handleChange} />
                </div>
                <div className="col-sm-3">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </div>
        </form>
    )
}

export default SearchBox;
