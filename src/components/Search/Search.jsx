import './Search.scss';
import Mohan from '../../Assets/Images/Mohan-muruge.jpg';

const Search = () => {
    return (
        <div className='search'>
            <form className="search__form" method="get">
                <input
                    type="search"
                    className="search__input"
                    placeholder="Search"
                />
            </form>
            <img 
            src={Mohan}
            className='search__Avatar'
            alt='Search line avatar' 
            />
        </div>
        
    )
}

export default Search;