import './Search.scss';
import Avatar from '../Avatar/Avatar';


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
            <Avatar />
        </div>
        
    )
}

export default Search;