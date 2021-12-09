import React, {useState} from 'react'
import { SimpleContext } from '../../context';
import Form from '../UI/Form/Form';
import './App.scss'

function App() {
    const [isChecked, setIsChecked] = useState(false)


    return (
        <SimpleContext.Provider value={{
            isChecked,
            setIsChecked
        }}>
            <div className="app">
                <Form />
            </div>
        </SimpleContext.Provider>
        
    );
}

export default App;
