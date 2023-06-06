import './Search.css'

function Search() {
    return (
        <form className='Search'>
           <input className="searchBar" type="search" placeholder='Search'></input>
           <input className="searchButton" type="submit" value="Submit"></input>
        </form>
    );
}

export default Search;