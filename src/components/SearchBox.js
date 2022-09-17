import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input
                className="pa3 ba b--light-pink bg-light-orange"
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;