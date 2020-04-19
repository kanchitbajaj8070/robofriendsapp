import React from 'react';
const SearchBox = ({searchField,searchChange})=>
{
    return(
        <div className="pa2 tc ">
<input type="search"   placeholder="Search Robots" onChange={searchChange} />
    </div>)

};
export default SearchBox;