import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { ADD_USER, EDIT_USER, UPDATE_USER } from './Action/action';

const Edit = () => {

    const {id} = useParams()
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");

    const single = useSelector(state => state.crud.user);
   

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {id,name,phone};
        console.log(obj);
        dispatch(UPDATE_USER(obj,id))
        alert("Record add");
        setName("")
        setPhone("");
        
    }


    
    useEffect(()=>{
        dispatch(EDIT_USER(id))
    },[])

    useEffect(()=>{
        setName(single.name)
        setPhone(single.phone)
    },[single])

  return (
    <>
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
    </>
  )
}

export default Edit
