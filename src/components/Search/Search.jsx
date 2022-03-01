import './Search.scss';


const Search = () => {
    return (
        <div className='search'>
            <form className="search__form" method="get">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search"
                />
            </form>
        </div>
        
    )
}

export default Search;