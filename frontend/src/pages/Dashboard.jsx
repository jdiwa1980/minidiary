import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Feeds from '../sections/Feed';
import Postcard from '../components/Postcard';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import DeleteModal from "../components/DeleteModal";
import { getDiaryRecords, createDiaryPost, deleteDiaryPost } from '../../api/diaryApi';


const Dashboard  = () => {

  const navigate = useNavigate();

  const [records, setRecords] = useState([]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  // for searching functionality 
  const [search, setSearch] = useState("")

  useEffect(() => {
        const fetchRecords = async () => {
          try {
            const response = await getDiaryRecords()
            setRecords(response.data)
          } catch (err) {
            console.error(err);
          }
        }

        fetchRecords()
          // const stored = JSON.parse(localStorage.getItem("diary")) || [];
    
          // setRecords(stored); //getting data so the state updates once a record is saved
      }, []);

  const handleAddDiaryEntry = async (newEntry) => {

      try { 
          const response =  await createDiaryPost(newEntry)

          console.log("POST :", response.data)

          setRecords(prev => [
              ...prev,
              response.data
          ]
          )
      } catch (err) {
        console.error(err)
      }
      // replace these 3 lines inside the try statement to use localstorage
      // const updatedRecords = [...records, newEntry];

      // setRecords(updatedRecords)

      // localStorage.setItem("diary", JSON.stringify(updatedRecords));
  }
// handles pointing to the record being deleted and opens the modal
  const handleDeleteDiary = (records) => {
      setRecordToDelete(records);
      // for testing;
      // console.log(recordToDelete);

      setIsDeleteModalOpen(true);
  }

  // function that actually deletes the record
  const confirmDelete = async () => {

    await deleteDiaryPost(recordToDelete._id)

    // this updates the state
        setRecords(prev => 
          prev.filter(record => 
          
            record._id !== recordToDelete._id
          )
        );
        // clears the pointer to the record
        setRecordToDelete(null);
        // closes the modal after deleting
        setIsDeleteModalOpen(false);
  }

  const cancelDelete = () => {
      setRecordToDelete(null); // clears the pointer to the record
      setIsDeleteModalOpen(false) // closes the modal
    }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/login")
  }
  

  return (
    <div className='main'>
      <Navbar  
        search={search}
        setSearch={setSearch}
        onLogout={handleLogout}
      />
      <main>
        {/* this is how data is passed by App to Postcard via props "onAdd"*/}
        <Postcard onAdd={handleAddDiaryEntry}/> 
        {/* this is how data is passed by App to Feeds via props "records"*/}
        <Feeds records={records}
               onDelete={handleDeleteDiary}
               search={search}
        />
        <DeleteModal isOpen={isDeleteModalOpen}
                     record={recordToDelete}
                     onConfirm={confirmDelete}
                     onCancel={cancelDelete}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Dashboard
