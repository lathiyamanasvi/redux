import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { ADD_USER } from './Action/action';

const Add = () => {

    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = Math.floor(Math.random()* 10000);
        let obj = {id,name,phone};
        dispatch(ADD_USER(obj));
        alert("Record add");
        setName("")
        setPhone("");
    }


  return (
    <center>
    <h2>Add User</h2>
   <form onSubmit={handleSubmit}>
        <table border={1}>
                <tbody>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" onChange={ (e) => setName(e.target.value) }       value={name}/></td>
                    </tr>
                    <tr>
                        <td>Phone :- </td>
                        <td><input type="text" onChange={ (e) => setPhone(e.target.value) } value={phone}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </tbody>
            </table>
   </form>
    <Link to={`/`}>View</Link>
</center>

  )
}

export default Add
