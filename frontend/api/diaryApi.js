import axios from "axios";

const API_URL = "http://localhost:1459/api/diary";

const getToken = () => localStorage.getItem("token");

export const getDiaryRecords = () => axios.get(API_URL, {
    headers:{
        Authorization: `Bearer ${getToken()}`
    }
}
)

export const createDiaryPost = (data) => axios.post(API_URL, data, {
    headers: {
        Authorization: `Bearer ${getToken()}`
            }
    })

export const deleteDiaryPost = (id) => axios.delete(`${API_URL}/${id}`, {
    headers: {
        Authorization: `Bearer ${getToken()}`
            }
    })
    
