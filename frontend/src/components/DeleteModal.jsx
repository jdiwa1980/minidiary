const DeleteModal = ({ 
    isOpen, 
    record,
    onConfirm,
    onCancel, }) => {
    
    if (!isOpen) return null
    
    return (  
        <section>
            <div className="modal-overlay">
                <div className="card red">
                    <div className="card-header">
                        <button className="close"
                                onClick={onCancel}
                        >
                            [X]
                        </button>
                        
                    </div>
                    <div className="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
                        </svg>

                        <div>

                            <h3>Are you sure you want to Delete:  ?</h3>
                            <p>There was and error and your file could not be uploaded. Would you like to try again?</p>

                        </div>

                    </div>
                    <div className="progress">
                        <a href="#" 
                            className="btn-first"
                            onClick={onConfirm}
                        >

                            Confirm
                        </a>
                        <a href="#" 
                            className="btn-second"
                            onClick={onCancel}
                        >Cancel</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default DeleteModal;