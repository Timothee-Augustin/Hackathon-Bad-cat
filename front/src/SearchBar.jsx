import React from 'react';
import '.SearchBar.css';

function SearchBar() {
    const { searchBar, setSearchBar } = useSearchBar();

    const onChange = (event) => {
        setSearchBar(event.target.value);
    };
    return (
    <>
        <div className="search-box">
            <input 
            type="search"
            className="search-box-input"
            placeholder="Looking for collaborators"
            results="0"
            value={searchBar}
            onChange={onChange}
        />
        <button type="button" className="nav-bar-button">
            <i className="search-box-icon material-icons"></i>
            </button>
        </div>
        </>
    );
}
export default SearchBar;