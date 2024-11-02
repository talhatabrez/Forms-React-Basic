import {useState} from 'react';
import ReactDOM from 'react-dom/client';

function MyForm(){
    const [input, setInput] = useState({}); 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput((values) => ({...values, [name]: value})); //this is called as spread operator - works in key value pair
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input type = "text" name = "username" value = {input.username || ""} onChange={handleChange} />
            </label>
            <label>
                Enter your age:
                <input type = "number" name = "age" value = {input.age || ""} onChange={handleChange} />
            </label>
            <input type = "submit" />
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);

export default MyForm;