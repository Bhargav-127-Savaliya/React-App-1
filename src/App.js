import './App.css';
import React, {useState} from 'react';
import AddUser from './components/Adduser';
import Newuser from './components/newuser';
import Counter from './components/counter';
function App() {

  const [newuser , setnewuser] = useState([]);

  const addnewuser = (enterdusername,enterdage) => {
    // console.log(enterdusername + " is user with age of " + enterdage);
    // return enterduser;
    if (enterdusername!==('') && enterdage!==('')) {
      setnewuser((prevUsersList) => {
        return [
          ...prevUsersList,
          { name: enterdusername, age: enterdage, id: Math.random(), indexno : newuser.length+1},
        ];
      });
    }
    // else if(enterdusername===('')){
    //   alert("Please Enter User Name");
    // }
    // else if(enterdage===('')){
    //   alert("Please Enter User's Age");
    // }
   
  }
    
  // console.log(newuser.length);

  // delete
  const deleteUser = (index) => {
    if (newuser.length === 1) {
      setnewuser([]);
    }else{
      setnewuser((prevUsersList) => {
        const updatedUsers = [...prevUsersList];
        updatedUsers.splice(1,1);
        // updatedUsers.filter(index => index.id !== index);
        // delete updatedUsers[indexno-1];
        return updatedUsers;
      });
    }
  };


  return (
    <div>
      <Counter num={newuser}/>
      <AddUser onAddUser={addnewuser}/>
      <Newuser users={newuser} onDeleteUser={deleteUser}/>
    </div>
  );
}

export default App;
