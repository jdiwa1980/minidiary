import { SiGitbook } from "react-icons/si";
import { FaHome, FaSearch, FaInfo,FaPhoneAlt } from "react-icons/fa";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import SearchBox from "../components/SearchBox";
import Status from "../components/status";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = ({ search, setSearch, onLogout }) => {

    const navigate = useNavigate();

    
        
    

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    const inputRef = useRef(null);

    const handleOpenSearch = () => {
        setIsSearchOpen(true);

        setTimeout(() => {
            inputRef.current?.focus();
        
        }, 0);
    }

    const handleCloseSearch = () => {
            setIsSearchOpen(false);
        };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return ( 
        
        <header className={`header-outer ${isScrolled ? "glass-panel" : ""}`}>
            <div className={`mobile-overlay ${isMobileMenuOpen ? "open" : ""}`}
                 onClick={() => setIsMobileMenuOpen(false)}
            >

            </div>
            <div className={`header-inner responsive-wrapper `}>
                <div className="header-logo">
                    <div className="header-child">
                  <SiGitbook size={30}/>  mini diary
                    </div>
                </div>
                {/* desktop navbar  */}
                <nav className={`header-navigation ${isSearchOpen ? "search-open" : ""}`}>
                    
                        <a href="#" title="home">
                            <FaHome size={25} />
                        </a>
                    

                        <div className="searchBox">
                                <input type="text" 
                                    placeholder="Search memories..." 
                                    className="searchInput"
                                    value={search}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setSearch(e.target.value);
                                    }}
                                    ref={inputRef}
                                    onFocus={handleOpenSearch}
                                    onBlur={handleCloseSearch}
                                /> 
                                    <button className="searchButton"
                                            type="button"
                                            // onClick={handleOpenSearch}
                                    
                                    >
                                        <FaSearch size={25}/>
                                    </button>
                        </div>    
                    
                        <a href="#" title="about">
                            <HiMiniInformationCircle size={25}/>
                        </a>
                </nav>
                
                {/* hamburger button  */}
                    <div className="mobile-menu-slot">
                        <button 
                        type="button"
                        onClick={() => setIsMobileMenuOpen((last) => !last)}
                        className={`mobile-menu-btn ${isMobileMenuOpen ? "open":""}`}
                        >
                            {isMobileMenuOpen ? <RxCross2 size={30} /> : <RxHamburgerMenu size={30} />}
                        </button>
                    </div>
                        <Status   onLogout={onLogout} variant="desktop" />
                    
            </div>
                    {/* mobile sidebar  */}
                    <div className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
                        <div className="mobile-status">
                            <Status  onLogout={onLogout}  variant="mobile"/>
                        </div>
                        <nav aria-label="Mobile-navigation">
                            
                            <ul id="menu" className="mobile-navigation">
                                <div>
                                    <a href="#">
                                        <SearchBox 
                                            placeholder="search memories..."
                                            value={search}
                                            onChange={(e) => {
                                                e.preventDefault();
                                                setSearch(e.target.value);
                                            }}
                                            inputRef={inputRef}
                                            onFocus={handleOpenSearch}
                                            onBlur={handleCloseSearch}
                                        />
                                    </a>
                                </div>
                                <li title="home"><a href="#"><FaHome size={25} /></a></li>
                                <li title="neildiwa"><a href="https://neildiwa.vercel.app/#about"><HiMiniInformationCircle size={25}/></a></li>
                                <li title="call me"><a href="https://neildiwa.vercel.app/#contact"><FaPhoneAlt size={25}/></a></li>
                                
                            </ul>
                        </nav>
                    </div>
            
        </header>
     );
}
 
export default Navbar;