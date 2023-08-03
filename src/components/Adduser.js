import React, {useState} from "react";
import './Adduser.css'
import Button from "./button";
function AddUser(props) {

    const [name, setname] = useState('');
    const [age, setage] = useState('');

    const submited = (event) => {
        event.preventDefault();
        // console.log(name + " " + age);
        // alert(name + " " + age)
        props.onAddUser(name,age);
        setname('');
        setage('');
    }

    const namingset = (event) => {
        setname(event.target.value);
    }
    const ageset = (event) => {
        setage(event.target.value);
    }
    
    return(
        <div>
            <form onSubmit={submited}>
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" value={name} onChange={namingset} />
                <label htmlFor="age">age</label>
                <input type="text" name="age" id="age" value={age} onChange={ageset} />
                {/* <button type="submit">Add</button> */}
                <Button type="submit" />
            </form>
        </div>
    );
}

export default AddUser;