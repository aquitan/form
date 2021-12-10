import React, { useContext } from 'react'
import { SimpleContext } from '../../../context'
import './Modal.scss'

const Modal = ({children}) => {
    const {setIsModal} = useContext(SimpleContext)
    

    const onModalClose = () => {
        setIsModal(false)
    }

    return (
        <div className='modal'>
            <div className='modal-inner'> 
                {children}
                <button onClick={onModalClose}>OK</button>
            </div>
        </div>
    )
}

export default Modal