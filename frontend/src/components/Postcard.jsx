import { useEffect, useRef } from "react";
import { useState } from "react";
import { MdInsertEmoticon } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { emojis } from "../../data/emojis";

const Postcard = ({ onAdd }) => {

    
    const [formData, setFormData] = useState({
        diaryEntry: "",
    })

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const pickerRef = useRef(null);


    const apiKey = import.meta.env.VITE_KEY

    const fetchWeatherByCoords = async (lat, lon) => {
    
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
                try {
                    const response = await fetch(url);
    
                    if (!response.ok) {
                        throw new Error(`HTTP Error! Status: ${response.status}`)
                    }
                    const data = await response.json();
                    
                    return {
                        location: data.name,
                        temperature: data.main.temp,
                        description: data.weather[0].description,
                        icon: data.weather[0].icon,
                    }
                    
    
                } catch (err) {
                    console.error("failed to fetch weather data:", err)
                    return null;
                }
                
            }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        navigator.geolocation.getCurrentPosition(async (position) => {
            
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const weather = await fetchWeatherByCoords(lat, lon);
            
            const newEntry = {
                diaryEntry: formData.diaryEntry,
                latitude: lat,
                longitude: lon,
                // weather, you could also do this shorthand but below is easier to understand
                // Since weather already has exactly the structure your schema expects
                weather: {
                    location: weather.location,
                    temperature: weather.temperature,
                    description: weather.description,
                    icon: weather.icon,
                },
            }

            onAdd(newEntry);
            setFormData({
                            diaryEntry: "",
                        });
            
        }, 
        (error) => {
            console.error(error.message);
        }
    );
        
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                pickerRef.current &&
                !pickerRef.current.contains(event.target)
            ) {
                setShowEmojiPicker(false);
            }

        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        };

    }, [])

    return (
        <form className="messageBox" onSubmit={handleSubmit} autoComplete="off">
            <div className="iconUploadWrapper" ref={pickerRef}>
                <button onClick={() => setShowEmojiPicker(prev => !prev)}
                        type="button"
                >
                    <MdInsertEmoticon className="emoji-icon"                 
                    />
                    {showEmojiPicker && (
                        <div className="emoji-picker">
                            
                            {emojis.map((emo) => (
                                <button key={emo}
                                        type="button"
                                        onClick={() => setFormData(prev => ({
                                            ...prev,
                                            diaryEntry: prev.diaryEntry + emo,
                                        }))}
                                >
                                    {emo}
                                </button>
                            ))}
                        </div>
                    )}
                    <span className="tooltip">Add emojis</span>
                </button>
                
            </div>
            <input type="text" 
                   placeholder="what's on your mind?" 
                   id="messageInput"
                   required
                   value={formData.diaryEntry}
                   onChange={(e) => 
                    setFormData({
                        ...formData, 
                        diaryEntry: e.target.value,
                    })}
            />
            <button id="sendButton">
                <TbSend2 className="send-icon"/>
            </button>
        </form>
      );
}
 
export default Postcard;