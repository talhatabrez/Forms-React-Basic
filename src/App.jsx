import React from "react";
import {createRoot} from 'react-dom/client';
import FormInput from './FormInput';

function App(){
    const [message, setMessage] = React.useState("");

    function handleChange(event, val){
        setMessage(event.target.value);
        console.log(event.targt.value);
    }

    return (
        <div className="container">
            <div className="increment">
                <h1>Hello {message}, Please fill in your details</h1>
                <div>
                    <FormInput handleChangeChild = {(event) => handleChange(event, 100)} />
                    <button>Submit my details</button>
                </div>
            </div>
        </div>
    )
};

export default App;