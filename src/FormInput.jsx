import React from 'react';

function FormInput({handleChangeChild}){
    function wrapHandleChange(event){
        console.log("Child event has been trigerred");
        handleChangeChild(event);
    }
    return (
        <div className="field">
            <input onChange={wrapHandleChange} />
        </div>
    );
}


export default FormInput;
