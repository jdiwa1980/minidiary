import { FaUserCircle } from "react-icons/fa";
import { RiArrowRightUpLongLine } from "react-icons/ri";

const Status = ({ onLogout,  variant }) => {

    const userName = localStorage.getItem("username")

    const mobile = "open";
    const desktop = "";

    return ( 
        <div className={`header-user ${variant}`}>
            <div className="welcome-wrapper">
                <div className="user-info">
                    <FaUserCircle size={25} />
                    <span>{userName}</span>
                </div>
                    <button onClick={onLogout} className="logout-btn">
                        logout <RiArrowRightUpLongLine />
                    </button>
            </div>
        </div>
     );
}
 
export default Status;

// TODO:
// Status component currently uses "open" for the mobile variant.
// Consider replacing with variant="mobile" / "desktop"
// on the next refactor.