import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DELETE_USER, VIEW_USER } from './Action/action';

const View = () => {

  const dispatch = useDispatch();
  const record = useSelector(state => state.crud.users);

  const deleteData = (id) => {
    dispatch(DELETE_USER(id))
  }

  useEffect(()=>{
    dispatch(VIEW_USER());
},[])


  return (
    <center>
            <h2>View User</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Srno</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>


                <tbody>
                    {
                        record.map((val,i)=>{i=i+1
                            return (
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <td>
                                        <button onClick={ () => deleteData(val.id) }>Delete</button> ||
                                        <Link to={`/edit/${val.id}`}><button>Edit</button></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>


            </table>
            <Link to={`/add`}>Add</Link>
        </center>

  )
}

export default View
