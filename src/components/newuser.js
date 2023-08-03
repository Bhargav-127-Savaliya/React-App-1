import React from "react";
import './newuser.css'

function Newuser(props) {
  // console.log("working " + props.name);


  const handleDeleteUser = (indexing) => {
    props.onDeleteUser(indexing);
  };

  return (
    //  <div>Compnent added</div>
    //    <ul>
    //      <li>
    //        {newuser.name} ({newuser.age} years old)
    //      </li>
    //  </ul>


    <ul className="morphisum-ui">
      <h5>List Of Users : </h5>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>{user.indexno}</span>
          <li>
            {user.name} ({user.age} years old)
          </li>
          {/* <button onClick={() => handleDeleteUser(user.id)}>Delete</button> */}
          <button onClick={handleDeleteUser}>Delete</button>
          
          <div
            className='chart-bar__fill'
            style={{ width: user.age + '%' }}
          ></div>
        </div>
      ))}
    </ul>

  );
}

export default Newuser;