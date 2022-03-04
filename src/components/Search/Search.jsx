import './Search.scss';
import AvatarHeader from '../Avatar/AvatarHeader';


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
            <AvatarHeader />
        </div>
        
    )
}

export default Search;