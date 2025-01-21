import React, { useState } from 'react'
import Modal from './ModalComponent/Modal.jsx'

const Header = () => {

    const [showModalPopup, setShowModalPopup] = useState(false)
    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup)
    }
    return (
        <>
            <div className='navigation'>
                <h1>Expense Tracker</h1>
                <button onClick={handleToggleModalPopup}>Add New Transaction</button>
            </div>
            {
                showModalPopup && <Modal handleToggleModalPopup={handleToggleModalPopup} />
            }
        </>
    )
}

export default Header