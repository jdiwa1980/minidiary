import { FaHome, FaSearch, FaInfo } from "react-icons/fa";

const SearchBox = ({ placeholder, value, onChange, inputRef, onFocus, onBlur }) => {
    return ( 
        <div className="searchBox">
                                        <input type="search" 
                                            placeholder={placeholder} 
                                            className="searchInput"
                                            value={value}
                                            onChange={onChange}
                                            inputRef={inputRef}
                                            onFocus={onFocus}
                                            onBlur={onBlur}
                                        /> 
                                            <button className="searchButton"
                                                    type="button"
                                            >
                                                <FaSearch size={25}/>
                                            </button>
                                </div> 
     );
}
 
export default SearchBox;