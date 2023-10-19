import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
function Users() {
    const [user, setUser] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8080/api/user/getusers')
        .then(res => setUser(res.data))
        .catch(err => console.log(err))

    },[])
    const  handleDelete = async (id)=> {
        try{
            await axios.delete('http://localhost:8080/api/user/'+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }

    }
    return (
        <div className='d-flex   justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded">
                <Link to="/createUsername"className="btn btn-success">Ajouter</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           user.map((data, i) =>(
                            <tr key={i}>
                                <td>{data.nom}</td>
                                <td>{data.prenom}</td>
                                <td>{data.age}</td>
                                <td>{data.email}</td>
                                <td>
                                    <Link to={`/${data.id}`} className="btn btn-primary">Update</Link>
                                    <button className="btn btn-danger ms-2 " onClick={e =>handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                           ))
                        }
                    </tbody>
                </table>

            </div>

        </div>
    )
}
export default Users;