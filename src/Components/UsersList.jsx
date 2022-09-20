import axios from 'axios';
import React from 'react';

const UsersList = ({users, selectUser, getUsers}) => {

    const deleteUser = (id) => {
   
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(res => {
        console.log(res)
        getUsers()
    })
}
    return (
        <div>
            <h1 className='users-2'>Users List</h1>
            <ul className='list'>
                {
                users.map(user => (
                    <li key={user.id}><br />
                        <div className='div-name'>{user.first_name}</div>
                        <div className='div-last'>{user.last_name}</div>
                        <div className='div-email'><b>Email: </b> {user.email}</div>
                        <div className='div-pass'><b>Password: </b> {user.password}</div>
                        <div className='div-birth'><b>Birthday: </b> {user.birthday}</div>
                        <button className='btn-edit' onClick={() => selectUser(user)}>Edit</button>
                        <button className='btn-delete' onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))
}        
            </ul>
        </div>
    );
};

export default UsersList;