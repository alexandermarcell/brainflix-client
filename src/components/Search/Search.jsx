import './Search.scss';
import Avatar from "../Avatar/Avatar";


const Search = () => {
    return (
        <div className='searchLine'>
            <form className="searchForm" method="get">
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search"
                />
            </form>
            <Avatar />
        </div>
        
    )
}

export default Search;