import { CiTimer, CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { TbSend2 } from "react-icons/tb";

const Feeds = ({ records, onDelete, search }) => {
        
        // helper functions 
        const formatDate = (date) =>
            date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            });

        const formatTime = (date) =>
            date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
            });
        
            // 2. Derived data from searchBox via search prop
        const query = search.trim().toLowerCase();
            // filter() runs when user types something on search box
            // otherwise it only runs sort()
        const displayedRecords = [...records]
            .filter((record) =>
                record.diaryEntry.toLowerCase().includes(query) ||
                record.weather.location.toLowerCase().includes(query) ||
                record.weather.description.toLowerCase().includes(query) ||
                formatDate(new Date(record.createdAt))
                    .toLowerCase()
                    .includes(query) ||
                formatTime(new Date(record.createdAt))
                    .toLowerCase()
                    .includes(query)
            )
            .sort(
            (a, b) => b.createdAt.localeCompare(a.createdAt)
            );

        // Empty State Render = info to instruct user how to add entries
        if (records.length === 0) {

        return (
            <div className="empty-state">
                <div className="empty-container">

                    <h2>Your diary is empty.</h2>
                    <p>
                        Every Story starts somewhere.
                    </p>

                    <p className="empty-hint">
                        Click <TbSend2  className="inline-icon"/> to capture your first memory.
                    </p>
                </div>
            </div>
            )
        }
        
            
        return ( 
                <div >
                    {
                        displayedRecords.map((item, idx) => {
                        const createdAt = new Date(item.createdAt)
                        
                        return (
                            
                            <blockquote className={`blockquote blockquote${idx % 2 === 1 ? "--classic" : "--slashes"}`} key={item._id}>
                            <button className="delete-btn" 
                                    title="delete entry"
                                    type="button"
                                    onClick={() => onDelete(item)}
                            >
                                [x]
                            </button>
                            <div className="blockcard-container">
                                <div className="blockcard-info">
                                    <div className="meta-column">
                                        <div className="meta-item">
                                            <CiCalendarDate />
                                            <span>{formatDate(createdAt)}</span>
                                        </div>

                                        <div className="meta-item">
                                            <CiTimer />
                                            <span>{formatTime(createdAt)}</span>
                                        </div>
                                        
                                    </div>
                                        <div className="meta-column">
                                            <div className="meta-item">
                                                <CiLocationOn size={20} />
                                                <span>{item.weather.location}</span>
                                            </div>
                                            <div className="meta-item weather">
                                                
                                                    <img src={`https://openweathermap.org/img/wn/${item.weather.icon}@2x.png`} 
                                                        alt={`${item.weather.description}`}
                                                        className="weather-icon"
                                                    /> 
                                            
                                                 <div className="weather-info">
                                                    <span>{Math.round(item.weather.temperature)}°C</span>
                                                    <span>{item.weather.description}</span>
                                                 </div>
                                            </div>
                                        </div>
                                </div>
                                <blockquote className="entry">
                                    <p>{item.diaryEntry}</p>
                                </blockquote>
                                
                            </div>
                        </blockquote>
                        )
                    })}
                        
                </div>
        );
}

 
export default Feeds;