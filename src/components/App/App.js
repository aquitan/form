import React, {useState} from 'react'
import { SimpleContext } from '../../context';
import Form from '../UI/Form/Form';
import Modal from '../UI/Modal/Modal';
import './App.scss'

function App() {
    const [isChecked, setIsChecked] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isModal, setIsModal] = useState(false)


    return (
        <SimpleContext.Provider value={{
            isChecked,
            setIsChecked,
            setIsSuccess,
            setIsModal
        }}>
            <div className="app">
                {
                    isModal 
                    ? <Modal>
                        {
                            isSuccess
                            ? <h2 style={{color: 'green'}}>Success!</h2>
                            : <h2 style={{color: 'red'}}>Fail!</h2>
                        }
                    </Modal>
                    : null
                }
                <Form />
            </div>
        </SimpleContext.Provider>
        
    );
}

export default App;
