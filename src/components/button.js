import React from "react";
import './button.css'
function Button(props) {
    return(
        <div>
            <button onClick={props.onButtonClick}>Add User</button>
        </div>
    );
}
export default Button;